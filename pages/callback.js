import React, { Component } from 'react';
import { withRouter } from 'next/router';

import auth0Client from '../services/auth0';

class Callback extends Component {
  async componentDidMount() {
    try {
      await auth0Client.handleAuthentication();
      this.props.router.push('/');
    } catch (error) {
      console.log(error.message);
    }
  }

  render() {
    return <h1>Loading...</h1>;
  }
}

export default withRouter(Callback);
