import React, { Component } from 'react';

import { Link } from '../routes';
import auth0 from '../services/auth0';
import { Nav, LinkTag } from '../styles/baseLayout';

export default class Layout extends Component {
  render() {
    return (
      <Nav>
        <Link route="/">
          <LinkTag>home</LinkTag>
        </Link>
        <Link route="/about">
          <LinkTag>About</LinkTag>
        </Link>

        {!auth0.isAuthenticated() && (
          <LinkTag onClick={auth0.login}>login</LinkTag>
        )}
        {auth0.isAuthenticated() && (
          <LinkTag onClick={auth0.logout}> logout</LinkTag>
        )}
        {this.props.children}
      </Nav>
    );
  }
}
