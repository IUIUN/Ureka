import { getComment, postComment } from '@/services/urekaapi';
import { CommentDTO } from '@/response/comment';

const model = {
  namespace: '_comment',
  state: {
    comments: [] as CommentDTO[],
  },
  reducers: {
    fetch(state, action) {
      const { payload } = action;

      return { ...state, comments: payload.reverse() };
    },
  },
  effects: {
    *get({ payload }, { put }) {
      const { postId, offset, limit } = payload;
      const data = yield getComment(postId, offset, limit);

      if (data) {
        yield put({
          type: 'fetch',
          payload: data,
        });
      }
    },
    *post({ payload }, { put }) {
      const { postId, text, emails } = payload;

      const data = yield postComment(postId, {
        postId,
        text,
        emails,
      });
      // const data = yield queryPosts();

      if (data) {
        yield put({
          type: '_post/increaseComment',
          payload: {
            postId,
          },
        });
        yield put({
          type: 'get',
          payload: {
            postId,
            offset: 0,
            limit: 100,
          },
        });
      }
    },
  },
};

export default model;
