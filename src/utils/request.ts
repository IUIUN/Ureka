import fetch from 'dva-no-router/fetch';
import { notification } from 'antd';
import token from './token';

// const codeMessage = {
//   200: '服务器成功返回请求的数据。',
//   201: '新建或修改数据成功。',
//   202: '一个请求已经进入后台排队（异步任务）。',
//   204: '删除数据成功。',
//   400: '发出的请求有错误，服务器没有进行新建或修改数据的操作。',
//   401: '用户没有权限（令牌、用户名、密码错误）。',
//   403: '用户得到授权，但是访问是被禁止的。',
//   404: '发出的请求针对的是不存在的记录，服务器没有进行操作。',
//   406: '请求的格式不可得。',
//   410: '请求的资源被永久删除，且不会再得到的。',
//   422: '当创建一个对象时，发生一个验证错误。',
//   500: '服务器发生错误，请检查服务器。',
//   502: '网关错误。',
//   503: '服务不可用，服务器暂时过载或维护。',
//   504: '网关超时。',
// };
const codeMessage = {
  200: 'The request has succeeded.',
  201: 'Created.',
  202: 'The request has been received but not yet acted upon.',
  204: 'No Content.',
  400: 'Bad Request.',
  401: 'Unauthorized.',
  403: 'Forbidden.',
  404: 'Not Found.',
  406: 'Not Acceptable.',
  410: 'Gone.',
  422: 'Unprocessable Entity.',
  500: 'Internal Server Error.',
  502: 'Bad Gateway.',
  503: 'Service Unavailable.',
  504: 'Gateway Timeout.',
};

export function buildAuthorization() {
  const tokenVal = token.get();
  return tokenVal ? `Bearer ${tokenVal}` : undefined;
}

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }
  //
  // if (response.status == 403) {
  //   Router.router.push('/login');
  // }

  const errortext = `${codeMessage[response.status] || response.statusText} ${response.status}: ${response.url}`;
  notification.error({
    message: `error: ${response.status}`,
    description: errortext,
  });
  const error = new Error(errortext);
  error.name = response.status;
  // @ts-ignore
  error.response = response;
  throw error;
}

export default function request(url, options?) {
  const defaultOptions = {
    credentials: 'include',
    'Content-Type': 'application/json',

    // 'Access-Control-Allow-Origin': '*',
  };
  const newOptions = { ...defaultOptions, ...options };
  newOptions.headers = {
    'Content-Type': 'application/json',
    ...newOptions.headers,
  };
  if (newOptions.method === 'POST' || newOptions.method === 'PUT') {
    if (!(newOptions.body instanceof FormData)) {
      newOptions.headers = {
        Accept: 'application/json',
        ...newOptions.headers,
      };
      newOptions.body = JSON.stringify(newOptions.body);
    } else {
      // newOptions.body is FormData
      newOptions.headers = {
        Accept: 'application/json',
        ...newOptions.headers,
      };
    }
  }
  console.log(newOptions);

  if (token.get()) {
    newOptions.headers = {
      Authorization: buildAuthorization(),
      ...newOptions.headers,
    };
  }

  return fetch(url, newOptions)
    .then(checkStatus)
    .then(response => {
      if (newOptions.method === 'DELETE' || response.status === 204) {
        return response.text();
      }

      return response.json();
    })
    .catch(e => {
      console.error(e);
      return false;
    });
}
