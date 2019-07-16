import { book, getPost, getSearchPost, like, unbook, unlike } from '@/services/urekaapi';
import { PostDTO } from '@/response/post';
import * as _ from 'lodash';
import map from '@/components/Login/map';

type postStateType = { posts: PostDTO[]; searches: PostDTO[] };
const model = {
  namespace: '_post',
  state: {
    posts: [],
    searches: [],
  } as postStateType,
  reducers: {
    fetch(state, action) {
      const { payload } = action;
      const { posts } = state;

      return { ...state, posts: _.uniqWith(posts.concat(payload), _.isEqual) };
    },
    increaseComment(state: postStateType, action) {
      const { payload } = action;
      const { posts } = state;
      const { postId } = payload;

      return {
        ...state,
        posts: posts.map(value =>
          value.post.id === postId
            ? {
                ...value,
                actionCount: {
                  ...value.actionCount,
                  Comment: value.actionCount.Comment + 1,
                },
              }
            : value,
        ),
      };
    },
    init(state, action) {
      return { ...state, posts: [] };
    },
    setSearch(state, action) {
      const { payload } = action;

      return { ...state, searches: payload };
    },
    updateLike(state, action) {
      const { id } = action;
      const { posts } = state;
      const index = _.findIndex(posts, { post: { id } });
      posts[index].liked = !posts[index].liked;
      if (posts[index].liked) {
        posts[index].actionCount.Like += 1;
      } else {
        posts[index].actionCount.Like -= 1;
      }
      return { ...state, posts: [...posts] };
    },
    updateBook(state, action) {
      const { id } = action;
      const { posts } = state;
      const index = _.findIndex(posts, { post: { id } });
      posts[index].bookmarked = !posts[index].bookmarked;
      if (posts[index].bookmarked) {
        posts[index].actionCount.Bookmark += 1;
      } else {
        posts[index].actionCount.Bookmark -= 1;
      }
      return { ...state, posts: [...posts] };
    },
  },
  effects: {
    *get({ payload }, { put }) {
      const { offset, limit, orderBy, channelGroupIds, userIds } = payload;
      const data = yield getPost({ offset, limit, orderBy, channelGroupIds, userIds });
      if (data) {
        yield put({
          type: 'fetch',
          payload: data,
        });
      }
    },
    *initGet({ payload }, { call, put }) {
      const { offset, limit, orderBy, channelGroupIds, userIds } = payload;
      const data = yield call(getPost, { offset, limit, orderBy, channelGroupIds, userIds });
      if (data) {
        yield put({
          type: 'init',
        });
        yield put({
          type: 'fetch',
          payload: data,
        });
      }
    },
    *getSearch({ payload }, { call, put }) {
      const { text, offset, limit } = payload;
      const data = yield call(getSearchPost, text, offset, limit);
      if (data) {
        yield put({
          type: 'setSearch',
          payload: data,
        });
      }
    },
    // *toDoSearch({ payload }, { put, takeLatest }) {
    //   yield takeLatest('FETCH_AUTOCOMPLETE', function*() {
    //     yield put({ type: 'getSearch', payload });
    //   });
    // },
    toDoSearch: [
      function*({ payload }, { put }) {
        yield put({ type: 'getSearch', payload });
      },
      { type: 'throttle', ms: 200 },
    ],
    *like({ payload }, { put }) {
      const { id } = payload;
      const data = yield like(id);

      if (data) {
        yield put({
          type: 'updateLike',
          id,
        });
      }
    },
    *unlike({ payload }, { put }) {
      const { id } = payload;
      const data = yield unlike(id);
      if (data) {
        yield put({
          type: 'updateLike',
          id,
        });
      }
    },
    *book({ payload }, { put }) {
      const { id } = payload;
      const data = yield book(id);
      if (data) {
        yield put({
          type: 'updateBook',
          id,
        });
      }
    },
    *cancelBook({ payload }, { put }) {
      const { id } = payload;
      const data = yield unbook(id);
      if (data) {
        yield put({
          type: 'updateBook',
          id,
        });
      }
    },
  },
};

export default model;
