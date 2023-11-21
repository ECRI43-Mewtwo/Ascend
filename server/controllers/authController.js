const db = require('../models/models');
const bcrypt = require('bcrypt');

const authController = {};

authController.signup = async (req, res, next) => {
  const { username, password } = req.body;  
  console.log(password);
  try {
    const salt = await bcrypt.genSalt(12);
    const hashedPassword = await bcrypt.hash(password, salt);
    console.log(hashedPassword);
    const userDataArr = [username, hashedPassword];
    const addUserQuery = 'INSERT INTO user_table (username, password) VALUES ($1, $2);'
    db.query(addUserQuery, userDataArr).then (() => {
      return next();
    })
  } catch (error) {
    return next(error);
  }
}


module.exports = authController;