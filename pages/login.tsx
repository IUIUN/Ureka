import * as React from 'react';
import { Fragment } from 'react';

import {
  Checkbox,
  Alert,
  Icon,
  Modal,
  Button,
  Input,
  Form,
  InputNumber
} from 'antd';
import Login from '@/components/Login';
import styles from './login.less';
import Link from 'next/link';
import img from '../static/logo.svg';
import Connection from '@/store';
import Router from 'next/router';
import ParticleComponent from '@/components/Login/ParticleComponent';
import { forgetPassword } from '@/services/urekaapi';

const links = [
  {
    key: 'help',
    title: '帮助',
    href: '',
  },
  {
    key: 'privacy',
    title: '隐私',
    href: '',
  },
  {
    key: 'terms',
    title: '条款',
    href: '',
  },
];

const copyright = (
  <Fragment>
    Copyright <Icon type='copyright' /> 2018 Ureka Inc
  </Fragment>
);

// @ts-ignore
@Connection(({ albums, loading }) => ({
  albums: albums,
  loading: loading.effects['_user/login'],
}))
export default class Page extends React.Component {
  static async getInitialProps(props) {
    // first time run in server side
    // other times run in client side ( client side init with default props
    // console.log('get init props');
    const { pathname, query, isServer, store } = props;
    // dispatch effects to fetch data here
    // await props.store.dispatch({type: 'posts/init'});
    // dont use store as property name, it will confilct with initial store
    return {
      pathname,
      query,
      isServer,
    };
  }

  state = {
    type: 'account',
    autoLogin: true,
    hasError: false,
    email: '',
    username: '',
  };

  info = () => {
    const { dispatch } = this.props;
    const { username } = this.state;
    let email = '';

    Modal.confirm({
      title: 'Forget Password',
      content: (
        <div>
          <p>Please enter your email below..</p>
          <Input placeholder='Email' type={'email'} onChange={e => (email = e.target.value)} />
          {/*<Form>*/}
            {/*<Form.Item*/}
              {/*label='Prime between 8 & 12'*/}
              {/*validateStatus={"success"}*/}
              {/*help={"errorssssssss"}>*/}
              {/*<Input placeholder='Email' type={'email'} onChange={e => (email = e.target.value)} />*/}
            {/*</Form.Item>*/}
          {/*</Form>*/}
        </div>
      ),
      onOk(props) {
        console.log(props);
        return forgetPassword({
          email,
          username,
        });
        // dispatch({
        //   type: '_user/fp',
        //   payload: {
        //     email,
        //     username,
        //   },
        // });
      },
      cancelText: 'Cancel',
    });
  };

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
    console.log('error');
    this.setState({
      hasError: true,
    });
  }

  onTabChange = type => {
    this.setState({ type });
  };

  onGetCaptcha = () => {};

  handleSubmit = (err, values) => {
    const { type } = this.state;
    if (!err) {
      const { dispatch } = this.props;
      dispatch({
        type: '_user/login',
        payload: {
          ...values,
          type,
        },
      });
    }
  };
  componentDidMount() {
    Router.router.prefetch('/home');
  }

  changeAutoLogin = e => {
    this.setState({
      autoLogin: e.target.checked,
    });
  };

  renderMessage = content => <Alert style={{ marginBottom: 24 }} message={content} type='error' showIcon />;

  render() {
    const { Tab, UserName, Password, Mobile, Captcha, Submit } = Login;

    // const { login, submitting } = this.props;
    const { type, autoLogin } = this.state;
    return (
      <div className={styles.container}>
        {/*<ParticleComponent />*/}

        <div className={styles.content}>
          <div className={styles.top}>
            <div className={styles.header}>
              {/*<Link to="/">*/}
              <img alt='logo' className={styles.logo} src={img} />
              <span className={styles.title}>Ureka</span>
              {/*</Link>*/}
            </div>
            <div className={styles.desc}>Share, learn and grow science</div>
          </div>
          <div className={styles.main}>
            <Login
              defaultActiveKey={type}
              onTabChange={this.onTabChange}
              onSubmit={this.handleSubmit}
              ref={form => {
                this.loginForm = form;
              }}>
              {this.state.hasError && this.renderMessage('账户或密码错误（admin/888888）')}
              <UserName name='email' placeholder='admin/user' />
              <Password
                name='password'
                placeholder='password'
                onPressEnter={() => this.loginForm.validateFields(this.handleSubmit)}
              />
              <div>
                <Checkbox checked={autoLogin} onChange={this.changeAutoLogin}>
                  Auto Login
                </Checkbox>
                <Button style={{ float: 'right' }} onClick={this.info}>
                  Forget Password
                </Button>
              </div>
              <Submit loading={this.props.loading}>Login</Submit>
              <div className={styles.other}>
                <Link prefetch={true} href='/register'>
                  <a className={styles.register}>Sign Up</a>
                </Link>
              </div>
            </Login>
          </div>
        </div>
        {/*<GlobalFooter links={links} copyright={copyright} />*/}
      </div>
    );
  }
}
