const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const requestAPI = require('./helpers'); 

const app = express();

app.use(cors());
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/getToken', async (req, res) => {
  try {
    const token = await requestAPI.getToken();
    res.json(token);
  } catch(err) {
    return res.status(401).json({ error: err.message });
  }
});

app.post('/getTopList', async (req, res) => {
  try {
    const topList = await requestAPI.getTopList(req.body.token);
    res.json(topList);
  } catch(err) {
    return res.status(401).json({ error: err.message });
  }
});

app.post('/getPagination', async (req, res) => {
  try {
    const pagination = await requestAPI.getPagination(req.body.token, req.body.pagination);
    res.json(pagination);
  } catch(err) {
    return res.status(401).json({ error: err.message });
  }
});

app.listen(9000, () => console.log('App running in http://localhost:9000'));