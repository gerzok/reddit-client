const express = require('express');
const cors = require('cors');
const requestAPI = require('./helpers'); 

const app = express();

app.use(cors());
app.use(express.static('public'));

app.post('/getToken', async (req, res) => {
  try {
    const token = await requestAPI.getToken();
    res.json(token);
  } catch(err) {
    return res.status(401).json({ error: err.message });
  }
});

app.get('/getTopList', async (req, res) => {
  console.log(req.body);
  try {
    const topList = await requestAPI.getToken(token);
    res.json(topList);
  } catch(err) {
    return res.status(401).json({ error: err.message });
  }
});

app.listen(9000, () => console.log('App running in http://localhost:9000'));