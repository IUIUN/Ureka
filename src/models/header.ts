import { getBranch } from '@/services/urekaapi';
import { channelGroupTreeDTO } from '@/response/channelGroupTree';

const model = {
  namespace: '_header',
  state: {
    branch: {} as channelGroupTreeDTO,
  },
  reducers: {
    fetch(state, action) {
      const { payload } = action;

      return { ...state, branch: payload };
    },
  },
  effects: {
    *get(_action, { call, put }) {
      const data = yield call(getBranch);
      // const data = yield queryPosts();

      if (data) {
        yield put({
          type: 'fetch',
          payload: data,
        });
      }
    },
  },
};

export default model;
