require('dotenv').config();
const express = require('express');
const jsbase64 = require('js-base64');
const app = express();
const axios = require('axios');

app.use(express.static('public'));

app.post('/getToken', async (req, res) => {
  try {
    const redditToken = await axios({
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
    });
    const { data: token } = redditToken;
    res.json(token);
  } catch(err) {
    return res.status(401).json({ error: err.message });
  }
})

app.listen(9000, () => console.log('App running in http://localhost:9000'));