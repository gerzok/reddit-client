const express = require('express');
const app = express();

app.use(express.static('public'));

app.listen(9000, () => console.log('App running in http://localhost:9000'));