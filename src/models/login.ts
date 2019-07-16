import { forgetPassword, putLogin } from '@/services/urekaapi';
import Router from 'next/router';
import token from '@/utils/token';
import { UserDTO } from '@/response/usersLogin';

const model = {
  namespace: '_user',
  state: {
    user: {} as UserDTO,
    forgetPassword: {},
  },
  reducers: {
    fetch(state, action) {
      const { payload } = action;
      return { ...state, user: payload };
    },
    forgetPasswordReduce(state, action) {
      const { payload } = action;
      return { ...state, forgetPassword: payload };
    },
  },
  effects: {
    *login({ payload }, { put }) {
      const data = yield putLogin(payload);
      if (data) {
        localStorage.setItem('userinfo', JSON.stringify(data))
        token.save(data.token);
        yield put({
          type: 'fetch',
          payload: data,
        });
        Router.router.push('/home');
      }
    },
    *fp({ payload }, { put }) {
      const data = yield forgetPassword(payload);
      if (data) {
        yield put({
          type: 'forgetPasswordReduce',
          payload: data,
        });
      }
    },
    *logout() {
      token.remove();
      Router.router.push('/login');
    },
  },
};

export default model;
