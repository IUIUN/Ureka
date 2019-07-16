import * as React from 'react';
import { Icon, Menu } from 'antd';
import _ from 'lodash';
import {
  ChannelGroupGroup,
  channelGroupTreeDTO
} from '@/response/channelGroupTree';
import Router from 'next/router';

const SubMenu = Menu.SubMenu;

export function UChannels(props: { branch: channelGroupTreeDTO }) {
  const branch = _.get(props, 'branch.channelGroupGroup', []) as ChannelGroupGroup[];

  return (
    <Menu
      // onClick={this.handleClick}
      theme={'dark'}
      style={{ width: 256 }}
      mode='inline'>
      {branch.map((value, index) => {
        return (
          <SubMenu key={index} title={<span>{value.groupGroupName}</span>}>
            {value.channelGroups.map((value1, index1) => {
              return (
                <Menu.Item
                  key={index1 * value.channelGroups.length + index}
                  onClick={() => {
                    Router.router.push(`/channel?channelGroupIds=${value1.id}`);

                  }}
                >
                  <span>
                    <Icon type='appstore' />
                    <span>{value1.groupName}</span>
                  </span>
                </Menu.Item>
              );
            })}
          </SubMenu>
        );
      })}
    </Menu>
  );
}
