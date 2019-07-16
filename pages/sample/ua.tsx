import React from 'react';

export default class extends React.Component<any, any> {
  static async getInitialProps({ req }) {
    const userAgent = req ? req.headers['user-agent'] : navigator.userAgent;
    return { userAgent };
  }

  render() {
    return <div>Hello World {this.props.userAgent}</div>;
  }
}
