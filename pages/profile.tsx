import { PostDTO } from '@/response/post';
import Connection, { UProps } from '@/store';
import { Layout, message, Tabs } from 'antd';
import React from 'react';

import { UHeader } from '@/components/header/UHeader';
import _ from 'lodash';
import { UCards } from '@/components/home/UCards';
import { Container } from '@/components/layout/Container';

const { Header, Content } = Layout;
const TabPane = Tabs.TabPane;

interface ChannelProps extends UProps {
  posts: PostDTO[];
  postGetLoading: boolean;
  postGetInitLoading: boolean;
  likeLoading: boolean;
  bookLoading: boolean;
}

// @ts-ignore
@Connection(({ _post, loading }) => ({
  posts: _post.posts,
  postGetLoading: loading.effects['_post/get'],
  postGetInitLoading: loading.effects['_post/initGet'],
  likeLoading: loading.effects['_post/like'] || loading.effects['_post/unlike'],
  bookLoading: loading.effects['_post/book'] || loading.effects['_post/cancelBook'],
}))
// @ts-ignore
// @secure()
export default class Profile extends React.Component<ChannelProps, any> {
  state = {
    offset: 0,
    limit: 10,
    orderBy: 'id',
    message: undefined,
  };
  static async getInitialProps(props) {
    // first time run in server side
    // other times run in client side ( client side init with default props
    // console.log('get init props');
    const { pathname, query, isServer, store } = props;
    // dispatch effects to fetch data here
    // await props.store.dispatch({ type: 'posts/init' });
    // dont use store as property name, it will confilct with initial store
    return {
      pathname,
      query,
      isServer,
      dvaStore: store,
    };
  }
  // static async getInitialProps(props) {
  //   // first time run in server side
  //   // other times run in client side ( client side init with default props
  //   // console.log('get init props');
  //   const { pathname, query, isServer, store } = props;
  //   // dispatch effects to fetch data here
  //   console.log('get init props');
  //
  //   await props.store.dispatch({type: '_header/get'});
  //   // dont use store as property name, it will confilct with initial store
  //   return {
  //     pathname,
  //     query,
  //     isServer,
  //     dvaStore: store,
  //
  //   };
  // }

  handleTabs = orderBy => {
    const { dispatch } = this.props;

    this.setState({
      orderBy,
      offset: 0,
      limit: 10,
    });
    this._fetchPost(this.state, this.props, true);
  };

  componentDidMount(): void {
    document.addEventListener('scroll', this.trackScrolling);
    console.log('page show');
    this._fetchPost(this.state, this.props, true);
    // message.config({top: window.innerHeight - 50});
  }

  _fetchPost = ({ offset, limit, orderBy }, props, init) => {
    const { dispatch } = this.props;
    const userIds = _.get(props, 'query.userIds');
    const payload = {
      offset,
      limit,
      // orderBy: 'id',
      orderBy,
      userIds,
    };
    if (init) {
      dispatch({
        type: '_post/initGet',
        payload,
      });
    } else {
      dispatch({
        type: '_post/get',
        payload,
      });
    }
  };

  UNSAFE_componentWillReceiveProps(nextProps: Readonly<ChannelProps>, nextContext: any): void {
    if (this.props.postGetLoading !== nextProps.postGetLoading) {
      if (nextProps.postGetLoading) {
        if (!this.state.message) {
          if (typeof this.state.message === 'undefined') {
            this.setState({
              message: message.loading('Loading ...', 0),
            });
          }
        }
      } else {
        if (typeof this.state.message === 'function') {
          message.destroy();
          this.setState({
            message: undefined,
          });
        }
      }
    }
  }

  componentWillUnmount() {
    document.removeEventListener('scroll', this.trackScrolling);
  }

  trackScrolling = () => {
    const windowHeight = 'innerHeight' in window ? window.innerHeight : document.documentElement.offsetHeight;
    const body = document.body;
    const html = document.documentElement;
    const docHeight = Math.max(
      body.scrollHeight,
      body.offsetHeight,
      html.clientHeight,
      html.scrollHeight,
      html.offsetHeight,
    );
    const windowBottom = windowHeight + window.pageYOffset;
    if (windowBottom >= docHeight) {
      if (!this.props.postGetLoading) {
        this.setState(state => {
          return {
            offset: state.offset + state.limit,
          };
        });
        this._fetchPost(this.state, this.props, false);
      }
    }
  };
  handleLike = (id, flag) => {
    const { dispatch } = this.props;
    if (!this.props.likeLoading) {
      if (flag) {
        dispatch({
          type: '_post/unlike',
          payload: { id },
        });
      } else {
        dispatch({
          type: '_post/like',
          payload: { id },
        });
      }
    }
  };
  handleBook = (id, flag) => {
    const { dispatch } = this.props;
    if (!this.props.bookLoading) {
      if (flag) {
        dispatch({
          type: '_post/cancelBook',
          payload: { id },
        });
      } else {
        dispatch({
          type: '_post/book',
          payload: { id },
        });
      }
    }
  };

  render() {
    const { posts, postGetInitLoading } = this.props;

    return (
      <Layout>
        <Header>
          <UHeader />
          <Content>
            <Container>
              <Tabs defaultActiveKey='id' onChange={this.handleTabs}>
                <TabPane tab='Recent' key='id'>
                  <UCards
                    posts={posts}
                    postInitGetLoading={postGetInitLoading}
                    handleBook={this.handleBook}
                    handleLike={this.handleLike}
                  />
                </TabPane>
                <TabPane tab='Trending' key='postrank'>
                  <UCards
                    posts={posts}
                    postInitGetLoading={postGetInitLoading}
                    handleBook={this.handleBook}
                    handleLike={this.handleLike}
                  />
                </TabPane>
              </Tabs>
            </Container>
          </Content>
        </Header>
      </Layout>
    );
  }
}
