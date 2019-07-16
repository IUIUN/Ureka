import * as React from 'react';
import jsHttpCookie from 'cookie';
import token from '@/utils/token';
import Router from 'next/router';

export const secure = () => WrappedComponent => {
  return class extends React.Component {
    // componentWillMount(): void {
    //   if (!token.get()) {
    //     Router.router.push('/login');
    //   }
    // }
    static async getInitialProps(props) {
      const { req, res } = props;
      let isUser = true;

      if (req && req.headers) {
        const cookies = req.headers.cookie;
        if (typeof cookies === 'string') {
          const cookiesJSON = jsHttpCookie.parse(cookies);
          if (cookiesJSON.TOKEN) {
            isUser = false;
          }
        }
        if (isUser) {
          res.setHeader('Location', '/login');
          res.statusCode = 302;
          res.end();
        }
      } else {
        if (!token.get()) {
          Router.router.push('/login');
        }
      }
      // return props;
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  };
};
