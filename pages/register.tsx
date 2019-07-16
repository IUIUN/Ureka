import * as React from 'react';
import { Fragment } from 'react';
import { Alert, Button, Form, Icon, Input, Popover, Select } from 'antd';
import Login from '@/components/Login';
import styles from './login.less';
import WithDva from '../src/store';
import Link from 'next/link';
import logo from '../static/logo.svg';

const FormItem = Form.Item;
const { Option } = Select;
const InputGroup = Input.Group;
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

@Form.create()
export class Page extends React.Component {
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
      dvaStore: store,
    };
  }
  componentDidMount(): void {
    const { dispatch } = this.props;
    dispatch({
      type: '_register/occupation',
    });
  }

  state = {
    type: 'account',
    autoLogin: true,
  };

  onTabChange = type => {
    this.setState({ type });
  };

  onGetCaptcha = () => {};

  checkConfirm = (rule, value, callback) => {
    const { form } = this.props;
    if (value && value !== form.getFieldValue('password')) {
      callback('password are not same!');
    } else {
      callback();
    }
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        const { dispatch } = this.props;
        const { occupation, firstname, lastname } = values;
        dispatch({
          type: '_register/createUser',
          payload: {
            ...values,
            occupation: this.props.occupation[occupation],
            name: firstname + ' ' + lastname,
          },
        });
      }
    });
  };

  changeAutoLogin = e => {
    this.setState({
      autoLogin: e.target.checked,
    });
  };

  renderMessage = content => <Alert style={{ marginBottom: 24 }} message={content} type='error' showIcon />;

  render() {
    const { Tab, UserName, Password, Mobile, Captcha, Submit } = Login;
    const { form, submitting, occupation } = this.props;
    const { getFieldDecorator } = form;
    // const { login, submitting } = this.props;
    const { type, autoLogin } = this.state;
    return (
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.top}>
            <div className={styles.header}>
              {/*<Link to="/">*/}
              <img alt='logo' className={styles.logo} src={logo} />
              <span className={styles.title}>Ureka</span>
              {/*</Link>*/}
            </div>
            <div className={styles.desc}>Share, learn and grow science</div>
          </div>
          <div className={styles.main}>
            <h3>Register</h3>
            <Form onSubmit={this.handleSubmit}>
              <FormItem>
                {getFieldDecorator('email', {
                  rules: [
                    {
                      required: true,
                      message: 'Please enter your email！',
                    },
                    {
                      type: 'email',
                      message: 'email format is not correct！',
                    },
                  ],
                })(<Input size='large' placeholder='email' />)}
              </FormItem>
              <FormItem>
                {getFieldDecorator('username', {
                  rules: [
                    {
                      required: true,
                      message: 'Please enter your username！',
                    },
                  ],
                })(<Input size='large' placeholder='User Name' />)}
              </FormItem>
              <FormItem>{getFieldDecorator('firstname', {
                rules: [
                  {
                    required: true,
                    message: 'Please enter your firstName！',
                  },
                ],
              })(<Input size='large' placeholder='First Name' />)}</FormItem>
              <FormItem>{getFieldDecorator('lastname', {
                rules: [
                  {
                    required: true,
                    message: 'Please enter your lastName！',
                  },
                ],
              })(<Input size='large' placeholder='Last Name' />)}</FormItem>
              <FormItem>
                {getFieldDecorator('password', {
                  rules: [
                    {
                      required: true,
                      message: 'Please enter your password！',
                    },
                  ],
                })(<Input size='large' type='password' placeholder='Password' />)}
              </FormItem>

              {/*<FormItem*/}
              {/*// help={help}*/}
              {/*>*/}
              {/*<Popover*/}
              {/*content={*/}
              {/*<div style={{ padding: '4px 0' }}>*/}
              {/*/!*{passwordStatusMap[this.getPasswordStatus()]}*!/*/}
              {/*/!*{this.renderPasswordProgress()}*!/*/}
              {/*/!*<div style={{ marginTop: 10 }}>请至少输入 6 个字符。请不要使用容易被猜到的密码。</div>*!/*/}
              {/*</div>*/}
              {/*}*/}
              {/*overlayStyle={{ width: 240 }}*/}
              {/*placement='right'*/}
              {/*// visible={visible}*/}
              {/*>*/}
              {/*{getFieldDecorator('password', {*/}
              {/*rules: [*/}
              {/*{*/}
              {/*// validator: this.checkPassword,*/}
              {/*},*/}
              {/*],*/}
              {/*})(<Input size='large' type='password' placeholder='至少6位密码，区分大小写' />)}*/}
              {/*</Popover>*/}
              {/*</FormItem>*/}
              <FormItem>
                {getFieldDecorator('confirm', {
                  rules: [
                    {
                      required: true,
                      message: 'Please Confirm your password！',
                    },
                    {
                      validator: this.checkConfirm,
                    },
                  ],
                })(<Input size='large' type='password' placeholder='Comfirm password' />)}
              </FormItem>

              <Form.Item>
                {getFieldDecorator('occupation', {
                  rules: [{  required: true, message: 'Please select occupation!' }],
                })(
                  <Select size='large'>
                    {occupation.map((value, index) => (
                      <Option value={index}>{value}</Option>
                    ))}
                  </Select>,
                )}
              </Form.Item>

              <FormItem>
                <Button size='large' loading={submitting} className={styles.submit} type='primary' htmlType='submit'>
                  Register
                </Button>
                <Link prefetch={true} href={'/login'}>
                  <a className={styles.register}>Already have an account?</a>
                </Link>
              </FormItem>
            </Form>
          </div>
        </div>
        {/*<GlobalFooter links={links} copyright={copyright} />*/}
      </div>
    );
  }
}

export default WithDva(({ _register, albums, loading }) => {
  return {
    occupation: _register.occupation,
    albums: albums,
    loading: loading.effects['_user/login'],
  };
})(Page);
