import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import App, { Container } from 'next/app';
import withRedux from 'next-redux-wrapper';
import { composeWithDevTools } from 'redux-devtools-extension';
import reduxThunk from 'redux-thunk';

import rootReducers from '../store/reducer';
import GlobalStyles from '../styles/GlobalStyles';
import auth0 from '../services/auth0';

const makeStore = () => {
  return createStore(
    rootReducers,
    composeWithDevTools(applyMiddleware(reduxThunk))
  );
};

class MyApp extends App {
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {};
    const user = process.browser
      ? auth0.clientAuth()
      : auth0.serverAuth(ctx.req);

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    const auth = { user, isAuthenticated: !!user };

    return { pageProps, auth };
  }
  render() {
    const { Component, pageProps, store } = this.props;
    return (
      <Container>
        <GlobalStyles />
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      </Container>
    );
  }
}

export default withRedux(makeStore)(MyApp);
