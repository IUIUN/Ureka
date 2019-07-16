import React from 'react';
import { WhiteSpace, Card } from 'antd-mobile';
import BasicLayout from '@/components/sample/BasicLayout';
import Connection from '@/store';
import { DvaContext } from 'utils/store';

class Page extends React.Component<any, any> {
  static async getInitialProps(props: DvaContext<any>) {
    // first time run in server side
    // other times run in client side ( client side init with default props
    // console.log('get init props');
    const { pathname, query, isServer, store } = props;
    // dispatch effects to fetch data here
    await props.store.dispatch({ type: 'albums/init' });
    // dont use store as property name, it will confilct with initial store
    return {
      pathname,
      query,
      isServer,
      dvaStore: store,
    };
  }

  render() {
    const { albums } = this.props;
    const dataList = albums.list;

    return (
      <BasicLayout language={`en`}>
        {dataList.map(item => {
          return (
            <div key={item.id}>
              <WhiteSpace size='lg' />
              <Card>
                <Card.Header title={item.title} />
              </Card>
            </div>
          );
        })}
      </BasicLayout>
    );
  }
}

export default Connection(state => {
  return { albums: state.albums };
})(Page);
