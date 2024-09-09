const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

app.post('/api/data', (req, res) => {
  const data = req.body;
  console.log('Data received:', data);
  res.status(200).send('Data received');
});

module.exports = app;