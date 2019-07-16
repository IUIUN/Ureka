import request from '@/utils/request';
import { PostCommentRequest } from '@/request/comments';

export const url = 'http://ec2-52-15-224-200.us-east-2.compute.amazonaws.com:8080';

// export const url = 'https://ureka.science';
export async function putLogin(body) {
  return request('/api/users/login', { method: 'PUT', body });
}

export async function getBranch() {
  return request('/api/channel/groupTree?canWrite=false&subscribedOnly=false');
}
export async function getOccupations() {
  return request('/api/occupations', { method: 'GET' });
}
export async function getSearchPost(text, offset = 0, limit = 10) {
  return request(`/api/post?offset=${offset}0&limit=${limit}&fulltext=${text}&orderBy=postrank&subscribedOnly=false`, {
    method: 'GET',
  });
}

export async function creatUser(body) {
  return request('/api/users/create', { method: 'POST', body });
}

export async function forgetPassword(body) {
  return request('/api/users/reset/password', { method: 'PUT', body });
}

export async function getPost({ offset, limit, orderBy, channelGroupIds, userIds }) {
  const make = {
    limit: limit ? `limit=${limit}` : limit,
    orderBy: orderBy ? `orderBy=${orderBy}` : orderBy,
    userIds: userIds ? `userIds=${userIds}&channelOnly=false` : userIds,
    channelGroupIds: channelGroupIds ? `channelGroupIds=${channelGroupIds}&channelOnly=true` : channelGroupIds,
  };
  // @ts-ignore
  const urlString = Object.values(make)
    .filter(url => url)
    .join('&');
  if (urlString) {
    return request(`/api/post?subscribedOnly=false&includeWelcome=false&offset=${offset}&${urlString}`, {
      method: 'GET',
    });
  } else {
    return request(url + '/api/post', { method: 'GET' });
  }
  // http://ec2-52-15-224-200.us-east-2.compute.amazonaws.com:8080/api/post?offset=0&limit=5&channelOnly=false&subscribedOnly=true&orderBy=id&withoutUsers=&includeWelcome=true
}

export async function like(postId) {
  return request(`/api/post/${postId}/like`, { method: 'PUT' });
}

export async function unlike(postId) {
  return request(`/api/post/${postId}/unlike`, { method: 'DELETE' });
}

export async function book(postId) {
  return request(`/api/post/${postId}/bookmark`, { method: 'PUT' });
}

export async function unbook(postId) {
  return request(`/api/post/${postId}/discard`, { method: 'DELETE' });
}

// comment
export async function getComment(postId, offset, limit) {
  return request(`/api/post/${postId}/comment?offset=${offset}&limit=${limit}`, {
    method: 'GET',
  });
}

export async function postComment(postId, body: PostCommentRequest) {
  return request(`/api/post/${postId}/comment`, {
    method: 'POST',
    body,
  });
}
