import axios from 'axios';

// ACTIONS
export const GET_TOKEN = 'GET_TOKEN';

// ACTIONS CREATORS
export const getToken = () => {
  return dispatch => axios.post('https://www.reddit.com/api/v1/access_token')
    .then(res => dispatch({ type: GET_TOKEN, payload: res.data }))
    .catch(err => console.log('Error fetching token:', err))
}