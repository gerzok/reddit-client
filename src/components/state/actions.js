import axios from 'axios';

// ACTIONS
export const GET_TOKEN = 'GET_TOKEN';
export const GET_TOPLIST = 'GET_TOPLIST';
export const GET_MORE_TOPLIST = 'GET_MORE_TOPLIST';
export const NEXT_PAGE_PAGINATION = 'NEXT_PAGE_PAGINATION';
export const INITIAL_TOP_LIST = 'INITIAL_TOP_LIST';
export const REMOVE_ALL_POSTS = 'REMOVE_ALL_POSTS';
export const REMOVE_THIS_POST = 'REMOVE_THIS_POST';
export const ITEM_READ = 'ITEM_READ';

// ACTIONS CREATORS
export const getToken = () => {
  return dispatch =>
      axios.post('http://localhost:9000/getToken')
        .then(res => dispatch({ type: GET_TOKEN, payload: res.data }));
}

export const getTopList = token => {
  return dispatch =>
    axios.post('http://localhost:9000/getTopList', { token }, 
    { headers: { 'Content-Type': 'application/json' } })
      .then(res => dispatch({ type: GET_TOPLIST, payload: res.data }));
}

export const getPagination = (token, pagination) => {
  return dispatch =>
    axios.post('http://localhost:9000/getPagination', { token, pagination }, 
    { headers: { 'Content-Type': 'application/json' } })
      .then(res => dispatch({ type: GET_MORE_TOPLIST, payload: res.data }));
}

export const nextPage = page => {
  return dispatch => dispatch({ type: NEXT_PAGE_PAGINATION, payload: page });
}

export const initialTopList = () => {
  return dispatch => dispatch({ type: INITIAL_TOP_LIST });
}

export const removeAllPosts = () => {
  return dispatch => dispatch({ type: REMOVE_ALL_POSTS });
}

export const removeThisPost = id => {
  return dispatch => dispatch({ type: REMOVE_THIS_POST, payload: id });
}

export const itemRead = id => {
  return dispatch => dispatch({ type: ITEM_READ, payload: id });
}