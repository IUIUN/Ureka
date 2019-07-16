import { creatUser, getOccupations } from '@/services/urekaapi';
import Router from 'next/router';

const model = {
  namespace: '_register',
  state: {
    occupation: [],
    createUser: {},
  },
  reducers: {
    fetch(state, action) {
      const { payload } = action;
      return { ...state, occupation: payload };
    },
    create(state, action) {
      const { payload } = action;
      return { ...state, createUser: payload };
    },
  },
  effects: {
    *occupation({ payload }, { put }) {
      const data = yield getOccupations();
      if (data) {
        yield put({
          type: 'fetch',
          payload: data,
        });
      }
    },
    *createUser({ payload }, { put }) {
      const data = yield creatUser(payload);
      if (data) {
        yield put({
          type: 'create',
          payload: data,
        });
        Router.router.push('/login');
      }
    },
  },
};

export default model;
