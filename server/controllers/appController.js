const db = require('../models/models');

const appController = {};

//creates new application entry
appController.createApp = async (req, res, next) => {
  const {
    date,
    company,
    title,
    location,
    app_type,
    status,
    contact,
    notes,
    referral,
    link,
    starred,
  } = req.body;
  const addAppArr = [
    date,
    company,
    title,
    location,
    app_type,
    status,
    contact,
    notes,
    referral,
    link,
    starred,
  ];
  const addAppQuery =
    'INSERT INTO app_table (date, company, title, location, app_type, status, contact, notes, referral, link, starred) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11);';
  try {
    db.query(addAppQuery, addAppArr).then(() => {
      return next();
    });
  } catch (error) {
    return next(error);
  }
};

//updates application i
appController.updateApp = async (req, res, next) => {
  const {
    id,
    date,
    company,
    title,
    location,
    app_type,
    status,
    contact,
    notes,
    referral,
    link,
    starred,
  } = req.body;
  const updateAppArr = [
    date,
    company,
    title,
    location,
    app_type,
    status,
    contact,
    notes,
    referral,
    link,
    starred,
    id,
  ];
  const updateAppQuery =
    'UPDATE app_table SET date=$1, company=$2, title=$3, location=$4, app_type=$5, status=$6, contact=$7, notes=$8, referral=$9, link=$10, starred=$11 WHERE id=$12;';
  try {
    db.query(updateAppQuery, updateAppArr).then(() => {
      if (status === 'offered') {
        let start_date = new Date();
        start_date.toISOString().split('T')[0];
        const createOfferArr = [company, start_date];
        const addOfferQuery = `INSERT INTO offer_table (company, salary, bonus, equity, total_comp, start_date) VALUES ($1, 0, 0, 0, 0, $2)`;
        db.query(addOfferQuery, createOfferArr).then(() => {
          return next();
        });
      }
      return next();
    });
  } catch (error) {
    return next(error);
  }
};

//grabs all entries from app_table except ones with status of "offered"
appController.getApps = async (req, res, next) => {
  const getAppQuery = `SELECT * FROM app_table EXCEPT SELECT * FROM "app_table" WHERE STATUS IN ('offered');`;
  try {
    db.query(getAppQuery).then((data) => {
      console.log('DATA----', data.rows);
      res.locals.apps = data.rows;
      return next();
    });
  } catch (error) {
    return next(error);
  }
};

module.exports = appController;
