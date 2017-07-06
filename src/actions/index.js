import axios from 'axios'

export const FETCH_POSTS = 'fetch_posts'
export const CREATE_POST = 'create_post'
export const FETCH_SINGLE_POST = 'fetch_single_post'
export const DELETE_POST = 'delete_post'

const ROOT_URL = 'http://reduxblog.herokuapp.com/api/'

// key value can be anything random
const API_KEY = '?key=MY_KEY12345'

export function fetchPosts (callback) {
  const request = axios.get(`${ROOT_URL}/posts${API_KEY}`)
  return {
    type: FETCH_POSTS,
    payload: request
  }
}

export function createPost (values, callback) {
  const request = axios.post(`${ROOT_URL}/posts${API_KEY}`, values)
    .then(() => callback())
  return {
    type: CREATE_POST,
    payload: request
  }
}

export function fetchSinglePost (id) {
  const request = axios.get(`${ROOT_URL}/posts/${id}${API_KEY}`)
  return {
    type: FETCH_SINGLE_POST,
    payload: request
  }
}

export function deletePost (id, callback) {
  axios.delete(`${ROOT_URL}/posts/${id}${API_KEY}`)
    .then(() => callback())
  return {
    type: DELETE_POST,
    payload: id
  }
}
