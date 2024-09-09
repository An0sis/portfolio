const express = require('express');
const cors = require('cors');
const fs = require('fs');
const app = express();

app.use(cors());
app.use(express.json());

app.post('/api/data', (req, res) => {
  const data = req.body;
  console.log('Data received:', data);

  // Append the data to a file
  fs.appendFile('data.txt', JSON.stringify(data) + '\n', (err) => {
    if (err) {
      console.error('Error writing to file', err);
      res.status(500).send('Internal Server Error');
    } else {
      res.status(200).send('Data received and saved');
    }
  });
});

module.exports = app;