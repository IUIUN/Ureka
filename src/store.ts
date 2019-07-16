import React from 'react';
import dva, { connect } from 'dva-no-router';
import { Provider } from 'react-redux';
import model from '@/models/index';
import createLoading from 'dva-loading';
import { Store } from 'redux';
import { Context } from 'next/document';

export interface DvaProps<S> {
  store: Store<S>;
  isServer: boolean;
  initialProps: any;
  initialState: any;
}

export interface UProps {
  dispatch?: (action: Dispatch) => void;
}

interface Dispatch {
  type: string;
  payload?: object;
}

export interface DvaContext<S> extends Context {
  store: Store<S>;
  isServer: boolean;
}

const checkServer = () => Object.prototype.toString.call(global.process) === '[object process]';

const __NEXT_DVA_STORE__ = '__NEXT_DVA_STORE__';

function createDvaStore(initialState) {
  let app;
  if (initialState) {
    app = dva({
      initialState,
    });
  } else {
    app = dva({});
  }
  app.use(createLoading());
  const isArray = Array.isArray(model);
  if (isArray) {
    model.forEach(m => {
      app.model(m);
    });
  } else {
    app.model(model);
  }
  app.router(() => {});
  app.start();
  // console.log(app);
  const store = app._store;
  return store;
}

function getOrCreateStore(initialState) {
  const isServer = checkServer();
  if (isServer) {
    // run in server
    return createDvaStore(initialState);
  }
  if (!window[__NEXT_DVA_STORE__]) {
    // run in client
    window[__NEXT_DVA_STORE__] = createDvaStore(initialState);
  }
  return window[__NEXT_DVA_STORE__];
}

export default function Connection(...args) {
  return function CreateNextPage(Component) {
    const ComponentWithDva = (props = {}) => {
      // @ts-ignore
      const { store, initialProps, initialState } = props;

      const ConnectedComponent = connect(...args)(Component);
      return React.createElement(
        Provider,
        // in client side, it will init store with the initial state tranfer from server side
        {
          store: store && store.dispatch ? store : getOrCreateStore(initialState),
        },
        // transfer next.js's props to the page
        React.createElement(ConnectedComponent, initialProps),
      );
    };
    // @ts-ignore
    ComponentWithDva.getInitialProps = async (props = {}) => {
      const isServer = checkServer();

      // @ts-ignore
      const store = getOrCreateStore(props.jsonPageRes);
      // call children's getInitialProps
      // get initProps and transfer in to the page
      const initialProps = Component.getInitialProps
        ? await Component.getInitialProps({ ...props, isServer, store })
        : {};
      console.log('initialProps' + initialProps);
      return {
        store,
        initialProps,
        initialState: store.getState(),
      };
    };
    return ComponentWithDva;
  };
}
