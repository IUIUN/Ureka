import { AutoComplete, Avatar, Icon, Input, Menu, Popover, Row, Select } from 'antd';
import * as React from 'react';
import styles from './UHeader.less';
import logo from '/static/logo.svg';
import { UChannels } from '@/components/header/UChannels';
import Connection from '@/store';
import { channelGroupTreeDTO } from '@/response/channelGroupTree';
import HeaderDropdown from '@/components/header/HeaderDropdown';
import { UserDTO } from '@/response/usersLogin';
import { getAvatar } from '@/utils/image';
import { PostDTO } from '@/response/post';
import { Container } from '@/components/layout/Container';
import Router from 'next/router';
import Link from 'next/link';

const Option = Select.Option;

const selectAfter = (
  <Select defaultValue='.post' style={{ width: 60, marginLeft: 5 }}>
    <Option value='.post'>Post</Option>
    <Option value='.user'>User</Option>
  </Select>
);

const AutonComplete = <Input addonAfter={selectAfter} defaultValue='mysite' />;
// @ts-ignore
@Connection(({ _header, _user, _post }) => ({
  branch: _header.branch,
  user: _user.user,
  searches: _post.searches,
}))
export class UHeader extends React.Component<{
  branch: channelGroupTreeDTO;
  user: UserDTO;
  dispatch: any;
  searches: PostDTO[];
}> {
  componentDidMount(): void {
    const { dispatch } = this.props;
    dispatch({
      type: '_header/get',
    });
  }
  onSearchChange = text => {
    const { dispatch } = this.props;
    dispatch({
      type: '_post/toDoSearch',
      payload: {
        text,
      },
    });
  };
  onMenuClick = ({ key }) => {
    const { dispatch } = this.props;
    if (key === 'userCenter') {
      // router.push('/account/center');
      return;
    }
    if (key === 'triggerError') {
      // router.push('/exception/trigger');
      return;
    }
    if (key === 'userinfo') {
      // router.push('/account/settings/base');
      return;
    }
    if (key === 'logout') {
      dispatch({
        type: '_user/logout',
      });
    }
  };

  goUserInfoPage () {
    // Router.push('/userinfo');
  }

  render() {
    const { searches, user } = this.props;
    const dataSource = searches.map(value => value.post).map(value => value.title);
    const menu = (
      <Menu className={styles.menu} selectedKeys={[]} onClick={this.onMenuClick}>
        <Menu.Item key='userCenter'>
          <Icon type='user' />
          user details
        </Menu.Item>
        <Menu.Item key='userinfo'>
          <Icon type='setting' />
          my setting
        </Menu.Item>
        <Menu.Item key='channalfollowing'>
          <Icon type='appstore' />
          followed channel
        </Menu.Item>
        <Menu.Divider />
        <Menu.Item key='logout'>
          <Icon type='logout' />
          logout
        </Menu.Item>
      </Menu>
    );
    return (
      <Container>
        <Menu theme='dark' mode='horizontal' defaultSelectedKeys={['1']} style={{ lineHeight: '64px' }}>
          <Menu.Item>
            <img alt='logo' className={styles.logo} src={logo} />
            {/*<Link to="/shopify">Home</Link>*/}
          </Menu.Item>

          <Menu.Item key='2'>Home</Menu.Item>

          <span className={styles.export}>
            <Popover
              content={<UChannels branch={this.props.branch} />}
              overlayClassName={styles.headerMenu}
              placement='bottomLeft'
              trigger='hover'>
              <a href='#'>
                Channels <Icon type='down' />
              </a>
            </Popover>
          </span>

          <div className={styles.right}>
            <Menu theme='dark' mode='horizontal' selectable={false} style={{ lineHeight: '64px' }}>
              <Menu.Item
                // key='4'
                className={styles.autoComplete}>
                <AutoComplete onChange={this.onSearchChange} dataSource={dataSource}>
                  {AutonComplete}
                </AutoComplete>
              </Menu.Item>
              {/*<Avatar icon='user' className={styles.icon} />*/}

              <Menu.Item key='1'>
                <HeaderDropdown overlay={menu}>
                  <Link prefetch={true} href={`/userinfo?userIds=${user.userId}`}>
                    <span className={`${styles.action} ${styles.account}`}>
                      <Avatar
                        size='small'
                        className={styles.icon}
                        // icon='user'
                        src={getAvatar(user.avatar)}
                        alt='avatar'
                        onClick={this.goUserInfoPage.bind(this)}
                      />
                      <span className={styles.name}>{user.fullName}</span>
                    </span>
                  </Link>
                </HeaderDropdown>
              </Menu.Item>

              <Menu.Item key='2'>
                <Icon type='notification' className={styles.icon} />
              </Menu.Item>
              <Menu.Item key='3'>
                <Icon type='edit' className={styles.icon} />
              </Menu.Item>
            </Menu>
          </div>
        </Menu>
      </Container>
    );
  }
}
