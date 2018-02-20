import axios from 'axios';

export const FETCH_POSTS= 'fetch_posts';
const rootUrl = 'http://reduxblog.herokuapp.com/api';
const apiKey= '?key=KISSAKUKKA12';

export function fetchPosts() {

    const request = axios.get(`${rootUrl}/posts${apiKey}`);

    return {
        type: FETCH_POSTS,
        payload: request
    };
}