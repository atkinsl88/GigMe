const User = require('../models/userSchema')
// const jwt = require('jsonwebtoken') //! Don't need this till we start authenticating
// const { secret } = require  //! Don't need this till we start authenticating
// const { secret } = require('../config/environment') //! Don't need this till we start authenticating
// const { unauthorized } = require('../lib/errorMessage') //! Don't need this till we start authenticating


async function register(req, res, next) {
  try {
    const user = await User.create(req.body)
    res.status(201).json({ message: `Welcome ${user.username}` })
  } catch (err) {
    next(err)
  }
}

async function login (req, res, next) {
  try {
    const user = await User.findOne({ email: req.body.email }) 
    if (!user || !user.validatePassword(req.body.password)) {
      throw new Error() } else {
      res.status(202).json({ //! Pre-token logging in.
        message: `Welcome to GigMe ${user.username}`,
      })
    }
  }
  
  catch (err) {
    console.log(err);
  }
}


module.exports = {
  register,
  login
}