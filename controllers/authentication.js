const jwt = require('jwt-simple');
const db = require('../models');
const bcrypt = require('bcrypt-nodejs');
const config = require('../config/config.json')[process.env.NODE_ENV || 'development'];

function tokenForUser(user) {
  // first param - information we want to encode
  // second param - secret
  // jwt has a convention sub= 'subject' of this token
  // jwt has a convention iat= 'issued at time' of this token
  // More information - https://jwt.io
  const timestamp = new Date().getTime();
  return jwt.encode({ sub: user.id, iat: timestamp}, config.secret);
}

function generateHash(password) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(10), null);
}

exports.signin = function(req, res, next) {
  // User has already had their email and password auth'd
  // We just need to give them a token
  res.send({ token: tokenForUser(req.user) });
}

exports.signup = function(req, res, next) {
  // console.log(req.body); // Emmy note to self: Check the request message using this!!! :)
  const email = req.body.email;
  const password = req.body.password;

  if (!email || !password) {
    return res.status(422).send({ error: 'You must provide email and password'});
  }

  // TODO - Should login be used with email or username?
  db.user.findOne({ where: {email: email } }).then(existingUser => {
    // If a user with email does exist, raise Error
    if (existingUser) {
      return res.status(422).send({ error: 'Email is in use'});
    }

    db.user.create({
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      username: req.body.username,
      email: req.body.email,
      password: generateHash(req.body.password)
    }).then(function(user) {
      console.log('User create successful!');
      res.json({ token: tokenForUser(user)});
    });
  });
}
