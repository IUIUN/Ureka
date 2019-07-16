import atob from 'atob';
import _ from 'lodash';
import jsCookie from 'js-cookie';

const STORAGE_TOKEN_NAME = 'TOKEN';
const isBrowser = process.browser;


const getCookieFromBrowser = key => {
  return jsCookie.get(key);
};

const getCookieFromServer = (key, req) => {
  if (!req.headers.cookie) {
    return undefined;
  }
  const rawCookie = req.headers.cookie.split(';').find(c => c.trim().startsWith(`${key}=`));
  if (!rawCookie) {
    return undefined;
  }
  return rawCookie.split('=')[1];
};

export const setCookie = (key, value) => {
  if (process.browser) {
    jsCookie.set(key, value, {
      expires: 1,
      path: '/',
    });
  }
};

export const removeCookie = key => {
  if (isBrowser) {
    jsCookie.remove(key, {
      expires: 1,
    });
  }
};

export const getCookie = (key, req) => {
  return isBrowser ? getCookieFromBrowser(key) : getCookieFromServer(key, req);
};

/**
 * JWT的方案
 */
export default {
  parse() {
    let token = this.get();
    try {
      const arr = token.split('.');
      if (arr.length === 3) {
        token = atob(token.split('.')[1]);
      }
      return JSON.parse(token);
    } catch (ex) {
      throw ex;
    }
  },
  check() {
    try {
      const payload = this.parse();
      return !_.isEmpty(payload);
    } catch (ex) {
      this.remove();
      return false;
    }
  },
  get() {
    return jsCookie.get(STORAGE_TOKEN_NAME);
  },
  save(token) {
    jsCookie.set(STORAGE_TOKEN_NAME, token);
    sessionStorage.setItem(STORAGE_TOKEN_NAME, token);
  },
  remove() {
    jsCookie.remove(STORAGE_TOKEN_NAME);
  },
};


