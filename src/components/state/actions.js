import axios from 'axios';

// ACTIONS
export const GET_TOKEN = 'GET_TOKEN';
export const GET_TOPLIST = 'GET_TOPLIST';

// ACTIONS CREATORS
export const getToken = () => {
  return dispatch =>
      axios.post('http://localhost:9000/getToken')
      .then(res => dispatch({ type: GET_TOKEN, payload: res.data }));
}

export const getTopList = () => {
  return dispatch =>
      axios.get('http://localhost:9000/getTopList')
      .then(res => dispatch({ type: GET_TOPLIST, payload: res.data }));
}