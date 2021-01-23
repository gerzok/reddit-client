import axios from 'axios';

// ACTIONS
export const GET_TOKEN = 'GET_TOKEN';

// ACTIONS CREATORS
export const getToken = () => {
  return dispatch =>
    axios({
      method: 'POST',
      url: 'https://www.reddit.com/api/v1/access_token',
      withCredentials: true,
      auth: {
        username: 'zdGd63TEvMYz0A',
        password: 'jZmBcKs3giJ8bU_dDQ9YJM2dZyGsFg'
      },
      headers: {
        'content-type': 'application/x-www-form-urlencoded',
        'Access-Control-Allow-Origin': '*'
      },
      data: {
        grant_type: 'client_credentials'
      }
    })
    .then(res => dispatch({ type: GET_TOKEN, payload: res.data }))
    .catch(err => console.log('Error getting token:', err))
}