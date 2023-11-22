const express = require('express');
const app = express();
const path = require('path');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const appController = require('./controllers/appController');
const offerController = require('./controllers/offerController');
const authController = require('./controllers/authController');

const PORT = 3000;

// api/createApp
app.post('/api/createApp', appController.createApp, (req, res) => {
  return res.status(201).json('Successful addition to app db');
});

// api/updateApp
app.put('/api/updateApp', appController.updateApp, (req, res) => {
  return res.status(200).json('Successful update to app db');
});

// api/getApps
app.get('/api/getApps', appController.getApps, (req, res) => {
  return res.status(200).json(res.locals.apps);
});

// api/getOffers
app.get('/api/getOffers', offerController.getOffers, (req, res) => {
  return res.status(200).json(res.locals.offers);
});

// api/updateOffer
app.put('/api/updateOffer', offerController.updateOffers, (req, res) => {
  return res.status(200).json('Successful update to offer db');
});

// api/signup
app.post('/api/signup', authController.signup, (req, res) => {
  return res.status(200).json('Successful addition to user db');
});

//global error handler
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
