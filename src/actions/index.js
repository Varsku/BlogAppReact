import axios from 'axios';

export const FETCH_POSTS= 'fetch_posts';
export const CREATE_POST='create_post';
const rootUrl = 'http://reduxblog.herokuapp.com/api';
const apiKey= '?key=KISSAKUKKA12';

export function fetchPosts() {
    const request = axios.get(`${rootUrl}/posts${apiKey}`);
    return {
        type: FETCH_POSTS,
        payload: request
    };
}

export function createPost(values, callBack) {
  const request = axios.post(`${rootUrl}/posts${apiKey}`, values)
    .then (() => callBack());

  return {
    type: CREATE_POST,
    payload: request
  };
}
