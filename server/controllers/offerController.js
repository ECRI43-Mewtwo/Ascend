const db = require('../models/models');

const offerController = {};

// returns all entries in offer_table
offerController.getOffers = (req, res, next) => {
  const getOfferQuery = `SELECT * FROM offer_table;`
    try {
      db.query(getOfferQuery).then ((data) => {
        console.log("DATA----" , data.rows)
        res.locals.offers = data.rows;
        return next();
      })
    } catch (error) {
      return next(error);
    }
}

offerController.updateOffers = (req, res, next) => {
  const { company, salary, bonus, equity, start_date } = req.body;
  const updateOfferArr = [company, salary, bonus, equity, salary+bonus+equity, start_date];
  const updateOfferQuery = `UPDATE offer_table SET salary=$2, bonus =$3, equity=$4, total_comp=$5, start_date=$6 WHERE company=$1;`
  try {
    db.query(updateOfferQuery, updateOfferArr).then (() => {
      return next()
    })
  } catch (error) {
    return next(error);
  }
}

module.exports = offerController;