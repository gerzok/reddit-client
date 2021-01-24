const express = require('express');
const cors = require('cors');
const app = express();
const bodyParser = require('body-parser');
const axios = require('axios');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// app.use(cors());
app.use(express.static('public'));

app.post('/getToken', async (req, res) => {
  let redditToken = await axios({
    method: 'POST',
    url: 'https://www.reddit.com/api/v1/access_token',
    withCredentials: true,
    auth: {
      username: 'zdGd63TEvMYz0A',
      password: 'jZmBcKs3giJ8bU_dDQ9YJM2dZyGsFg'
    },
    headers: {
      'content-type': 'application/x-www-form-urlencoded'
    },
    params: {
      grant_type: 'client_credentials'
    }
  })
  console.log('redditToken', redditToken.data);
  // .then(token => res.send(token))
  // .catch(err => console.log('Error getting token:', err));
})

app.listen(9000, () => console.log('App running in http://localhost:9000'));