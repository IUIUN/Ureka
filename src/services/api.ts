import request from '@/utils/request';

export async function queryPosts() {
  return request('/api/channel/groupTree?canWrite=false&subscribedOnly=false');
}

export async function queryPostById(id) {
  return request(`https://jsonplaceholder.typicode.com/posts/${id}`);
}

// https://github.com/typicode/json-server
export async function queryAlbums() {
  return request('https://jsonplaceholder.typicode.com/albums?_page=1&_limit=20');
}

// visitor
export async function queryUserById() {
  return request('https://jsonplaceholder.typicode.com/users/1');
}
