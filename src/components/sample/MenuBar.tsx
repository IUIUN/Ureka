import React, { Component } from 'react';
import Router, { withRouter } from 'next/router';
import { Icon, TabBar } from 'antd-mobile';

class MenuBar extends Component {
  render() {
    const { router, children } = this.props;
    const { pathname } = router;

    return (
      <TabBar tabBarPosition='bottom'>
        {tabBarData.map(({ title, icon, selectedIcon, link }) => (
          <TabBar.Item
            key={link}
            title={title}
            icon={<Icon type={icon} />}
            selectedIcon={<Icon type={selectedIcon} />}
            selected={pathname === link}
            onPress={() => Router.push(link)}>
            {children}
          </TabBar.Item>
        ))}
      </TabBar>
    );
  }
}

const tabBarData = [
  {
    title: 'Channel',
    icon: 'check-circle-o',
    selectedIcon: 'check-circle',
    link: '/sample/home',
  },
  {
    title: 'Album',
    icon: 'check-circle-o',
    selectedIcon: 'check-circle',
    link: '/sample/album',
  },
  {
    title: 'User',
    icon: 'check-circle-o',
    selectedIcon: 'check-circle',
    link: '/sample/user',
  },
];

export default withRouter(MenuBar);
