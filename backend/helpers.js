require('dotenv').config();
const axios = require('axios');
const jsbase64 = require('js-base64');

const getToken = () =>
  axios({
    method: 'POST',
    url: 'https://www.reddit.com/api/v1/access_token',
    withCredentials: true,
    auth: {
      username: jsbase64.decode(process.env.REDDIT_APP_ID),
      password: jsbase64.decode(process.env.REDDIT_APP_SECRET)
    },
    headers: {
      'content-type': 'application/x-www-form-urlencoded'
    },
    params: {
      grant_type: 'client_credentials'
    }
  })
  .then(res => res.data);

const getTopList = token =>
axios({
    method: 'GET',
    url: 'https://oauth.reddit.com/r/all/top',
    headers: {
      Authorization: 'basic '+ token
    },
  })
  .then(res => res.data);


exports.getToken = getToken;
exports.getTopList = getTopList;