const express = require('express');
const app = express();
const path = require('path');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const appController = require('./controllers/appController');

const PORT = 3000;

app.get('/', (req,res) => {
  return res.sendFile(path.join(__dirname, '..', 'src', 'public', 'index.html'));
})

// api/createApp
app.post('/api', appController.createApp, (req,res) => {
  return res.status(201).json('Successful addition to db');
}) 

// api/updateApp
app.put('/api', appController.updateApp, (req,res) => {
  return res.status(200).json('Successful update to db');
})

app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));