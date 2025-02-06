const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const fs = require('fs');
const path = require('path');



app.use(bodyParser.json());
app.use(cors());


// Charger les données depuis data.json
const dataPath = path.join(__dirname, 'data.json');
let items = [];

fs.readFile(dataPath, 'utf8', (err, data) => {

    items = JSON.parse(data);

});

app.get('/api/exams', (req, res) => {
  res.json(items);
});

app.post('/api/exams', (req, res) => {
  const newItem = req.body;
  items.push(newItem);
  res.status(201).json(newItem);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});