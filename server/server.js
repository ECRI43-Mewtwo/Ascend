const express = require('express');
const app = express();
const path = require('path');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const appController = require('./controllers/appController');
const offerController = require('./controllers/offerController')

const PORT = 3000;

app.get('/', (req,res) => {
  return res.sendFile(path.join(__dirname, '..', 'src', 'public', 'index.html'));
})

// api/createApp
app.post('/api/app', appController.createApp, (req,res) => {
  return res.status(201).json('Successful addition to db');
}) 

// api/updateApp
app.put('/api/app', appController.updateApp, (req,res) => {
  return res.status(200).json('Successful update to db');
})

// api/getApps
app.get('/api/app', appController.getApps, (req, res) => {
  return res.status(200).json(res.locals.apps);
})

app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});
app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));