import React from 'react';
import { LocaleProvider, NavBar } from 'antd-mobile';
import enUS from 'antd-mobile/lib/locale-provider/en_US';
import MenuBar from './MenuBar';
import Router from 'next/router';

import '../../css/index.less';

export default class BasicLayout extends React.Component<any, any> {
  // transChild = children => {
  //   const childrenWithProps = React.Children.map(children, child => React.cloneElement(child, {}))
  //   return <div>{childrenWithProps}</div>
  // }

  render() {
    const { language, children } = this.props;
    const locale = language.substr(0, 2) === 'en' ? enUS : undefined;

    return (
      <LocaleProvider locale={locale}>
        <div className='container'>
          <NavBar leftContent='back' mode='light' onLeftClick={() => Router.back()}>
            NavBar
          </NavBar>
          <MenuBar>{children}</MenuBar>
        </div>
      </LocaleProvider>
    );
  }
}
