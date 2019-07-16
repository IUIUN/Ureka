import * as React from 'react';
import './index.less';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import _ from 'lodash';
import Link from 'next/link';
import Connection from '@/store';

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

// @ts-ignore
@Connection(({ _post, loading }) => ({
  posts: _post.posts,
  postGetLoading: loading.effects['_post/get'],
}))
export default class App extends React.Component {

  static async getInitialProps(props) {
    // first time run in server side
    // other times run in client side ( client side init with default props
    // console.log('get init props');
    const { pathname, query, isServer, store } = props;
    // dispatch effects to fetch data here
    await props.store.dispatch({ type: 'posts/init' });
    // dont use store as property name, it will confilct with initial store
    return {
      pathname,
      query,
      isServer,
      dvaStore: store,
    };
  }
  componentDidMount() {
    const features = [
      {
        name: 'feature1',
        tags: [
          {
            weight: 10,
            tagName: 't1',
          },
          {
            weight: 20,
            tagName: 't2',
          },
          {
            weight: 30,
            tagName: 't3',
          },
        ],
      },
      {
        name: 'feature2',
        tags: [
          {
            weight: 40,
            tagName: 't1',
          },
          {
            weight: 5,
            tagName: 't2',
          },
          {
            weight: 80,
            tagName: 't3',
          },
        ],
      },
      {
        name: 'feature3',
        tags: [
          {
            weight: 50,
            tagName: 't1',
          },
          {
            weight: 2,
            tagName: 't2',
          },
          {
            weight: 80,
            tagName: 't3',
          },
        ],
      },
    ];
    const g = features.map(value => value.tags);
    const a = _(features)
      .flatMap('tags')
      .uniqBy('weight')
      .value();
    // console.log(a);
    // var data = [
    //   {
    //     value: [
    //       {
    //         id: '1',
    //         list: [
    //           {name: 'test', mapp_id: 1},
    //           {name: 'test1', mapp_id: 1},
    //           {name: 'test2', mapp_id: 1},
    //           {name: 'test3', mapp_id: 2}],
    //       },
    //       {
    //         id: '2',
    //         list: [
    //           {'name': 'test4', mapp_id: 2},
    //           {'name': 'test5', mapp_id: 2},
    //           {'name': 'test6', mapp_id: 2},
    //           {'name': 'test7', mapp_id: 1}],
    //       }],
    //   },
    //   {
    //     value: [
    //       {
    //         id: '3',
    //         list: [
    //           {name: 'test8', mapp_id: 3},
    //           {name: 'test9', mapp_id: 3},
    //           {name: 'test10', mapp_id: 1},
    //           {name: 'test11', mapp_id: 1}],
    //       },
    //       {
    //         id: '4',
    //         list: [
    //           {name: 'test12', mapp_id: 1},
    //           {name: 'test13', mapp_id: 1},
    //           {name: 'test14', mapp_id: 2},
    //           {name: 'test14', mapp_id: 2}],
    //       }],
    //   }];
    var data = [];
    // _(data).flatMap("value");

    const gg = _(data)
      .flatMap('value')
      .flatMap('list')
      // groupBy('mapp_id').
      .value();

    // _.get(data,"value",[]).map();
    // const a = _(data).
    //   flatMap('value').
    //   flatMap('list').
    //   values();

    console.log(gg);
    // console.log(gg);

    // console.log(result);

    // const result = _.flatMap(features, item =>
    //   _.map(item.tags, tag => _.defaults({name: item.name}, tag)),
    // );
  }

  render() {
    return (
      <Layout>
        <style jsx>{`
          #components-layout-demo-top-side-2 .logo {
            width: 120px;
            height: 31px;
            background: #333;
            border-radius: 6px;
            margin: 16px 28px 16px 0;
            float: left;
          }
        `}</style>

        <Header className='header'>
          <div className='logo' />
          <Menu theme='dark' mode='horizontal' defaultSelectedKeys={['2']} style={{ lineHeight: '64px' }}>
            <Menu.Item key='1'>
              <Link href={`/home`}>main page</Link>
            </Menu.Item>
            <Menu.Item key='2'>nav 2</Menu.Item>
            <Menu.Item key='3'>nav 3</Menu.Item>
          </Menu>
        </Header>
        <Layout>
          <Sider width={200} style={{ background: '#fff' }}>
            <Menu mode='inline' defaultSelectedKeys={['1']} defaultOpenKeys={['sub1']} style={{ height: '100%' }}>
              <SubMenu
                key='sub1'
                title={
                  <span>
                    <Icon type='user' />
                    subnav 1
                  </span>
                }>
                <Menu.Item key='1'>option1</Menu.Item>
                <Menu.Item key='2'>option2</Menu.Item>
                <Menu.Item key='3'>option3</Menu.Item>
                <Menu.Item key='4'>option4</Menu.Item>
              </SubMenu>
              <SubMenu
                key='sub2'
                title={
                  <span>
                    <Icon type='laptop' />
                    subnav 2
                  </span>
                }>
                <Menu.Item key='5'>option5</Menu.Item>
                <Menu.Item key='6'>option6</Menu.Item>
                <Menu.Item key='7'>option7</Menu.Item>
                <Menu.Item key='8'>option8</Menu.Item>
              </SubMenu>
              <SubMenu
                key='sub3'
                title={
                  <span>
                    <Icon type='notification' />
                    subnav 3
                  </span>
                }>
                <Menu.Item key='9'>option9</Menu.Item>
                <Menu.Item key='10'>option10</Menu.Item>
                <Menu.Item key='11'>option11</Menu.Item>
                <Menu.Item key='12'>option12</Menu.Item>
              </SubMenu>
            </Menu>
          </Sider>
          <Layout style={{ padding: '0 24px 24px' }}>
            <Breadcrumb style={{ margin: '12px 0' }}>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>List</Breadcrumb.Item>
              <Breadcrumb.Item>App</Breadcrumb.Item>
            </Breadcrumb>
            <Content
              style={{
                background: '#fff',
                padding: 24,
                margin: 0,
                minHeight: 280,
              }}>
              Content
            </Content>
          </Layout>
        </Layout>
      </Layout>
    );
  }
}

