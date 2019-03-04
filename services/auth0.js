import Cookies from 'js-cookie';
import auth0 from 'auth0-js';
import jwt from 'jsonwebtoken';

class Auth0 {
  constructor() {
    this.auth0 = new auth0.WebAuth({
      domain: 'postify.auth0.com',
      clientID: 'e0FOUYfh3AdD4oytPVDFn2vb6c173t29',
      redirectUri: 'http://localhost:3000/callback',
      responseType: 'token id_token',
      scope: 'openid'
    });
  }

  handleAuthentication = () => {
    return new Promise((resolve, reject) => {
      this.auth0.parseHash((err, authResult) => {
        if (authResult && authResult.accessToken && authResult.idToken) {
          this.setSession(authResult);
          resolve();
        } else if (err) {
          reject(err);
          console.log(err);
        }
      });
    });
  };

  getExpireTime = time => time * 1000 + new Date().getTime();

  setSession = ({ accessToken, idToken, expiresIn, idTokenPayload }) => {
    Cookies.set('access_token', accessToken);
    Cookies.set('user', idTokenPayload);
    Cookies.set('token', idToken);
    Cookies.set('expires_at', this.getExpireTime(expiresIn));
  };

  login = () => {
    this.auth0.authorize();
  };

  logout = () => {
    Cookies.remove('access_token');
    Cookies.remove('idTokenPayload');
    Cookies.remove('token');
    Cookies.remove('expires_at');
    this.auth0.logout({
      returnTo: '',
      clientID: 'e0FOUYfh3AdD4oytPVDFn2vb6c173t29'
    });
  };

  isAuthenticated = () => new Date().getTime() < +Cookies.get('expires_at');

  verifyToken(token) {
    if (token) {
      const dcodedToken = jwt.decode(token);
      const expiresAt = dcodedToken.exp * 1000;

      return dcodedToken && new Date.getTime() < +expiresAt
        ? dcodedToken
        : undefined;
    }

    return undefined;
  }

  clientAuth = () => this.isAuthenticated();

  serverAuth = req => {
    if (req.headers.cookie) {
      return +Cookies.get('expires_at');
    }
  };
}

const auth0Client = new Auth0();

export default auth0Client;

// _ga=GA1.1.452171988.1550680695; access_token=0tjlvc471EuJyV5wwmhfROLtfdQUcz4M; user={%22iss%22:%2
//   2https://postify.auth0.com/%22%2C%22sub%22:%22google-oauth2|100389691250210277948%22%2C%22aud%22:
//   %22e0FOUYfh3AdD4oytPVDFn2vb6c173t29%22%2C%22iat%22:1551655884%2C%22exp%22:1551691884%2C%22at_hash
//   %22:%22CLYRX1q3BysNZz2oC-BXbQ%22%2C%22nonce%22:%221XFNwAE0o0ylm-76nATppPD9bSj6mSds%22}; token=eyJ
//   0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6Ik1URTFOVGd6T0RGR1FUUXdORGxGTmpnMU1rWkNSalUyUkRBeE9VVXhNVEUwTlRVMk9URXhRZyJ9.eyJpc3MiOiJodHRwczovL3Bvc3RpZnkuYXV0aDAuY29tLyIsInN1YiI6Imdvb2dsZS1vYXV0aDJ8MTAwMzg5NjkxMjUwMjEwMjc3OTQ4IiwiYXVkIjoiZTBGT1VZZmgzQWRENG95dFBWREZuMnZiNmMxNzN0MjkiLCJpYXQiOjE1NTE2NTU4ODQsImV4cCI6MTU1MTY5MTg4NCwiYXRfaGFzaCI6IkNMWVJYMXEzQnlzTlp6Mm9DLUJYYlEiLCJub25jZSI6IjFYRk53QUUwbzB5bG0tNzZuQVRwcFBEOWJTajZtU2RzIn0.QgYZPS9rV5csKRGdfpp7T0gf6JkM2zY90FcSLzprNYxccHngwvYxjfYKdxVZfLTUB-iAHhgOPd9Q-QHxU6CBg5VQaZIKRinnM4uHErcjOUomL0OoZ_DMA8IWJU3l9g2QRTYN8vHH4M3eIp17aYI5g94MZC89wl-ridMxonq-aZBlznXdF3eYiFsu_CEs1nMdk9pdOwnYtQ2PK9Wreivpl7M2iZz3QEKMsl7ceRInlw9rm-YEMbBAp1QsckN2xAh1CzDqVb124vQOj-GX_CyE3WK-Bu7C8PsuZxpaqg9fecuNv_FfOxThlNpXpB_qSjXkJDy19M-nghZnVKI-Z5-7rg; expires_at=1551663091981
