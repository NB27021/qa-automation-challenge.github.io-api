const jwt = require('jsonwebtoken')
var secret = process.env.SECRET

var User = require('../models/users')

exports.get_user_token = function (req, res) {
  User.getUserByUsername(req.params.userId, function (err, user) {
    if (err) {
      res.send(err)
    } else if (user.length !== 0) {
      const token = generateAccessToken({ username: req.params.username })
      res.status(200).json({ token })
    } else {
      res.status(404).send({ message: "User doesn't exist", code: 404 })
    }
  })
}

exports.read_a_user = function (req, res) {
  User.getUserByUsername(req.params.userId, function (err, user) {
    if (err) {
      res.send(err)
    } else if (user.length !== 0) {
      res.status(200).json(user)
    } else {
      res.status(404).send({ message: "User doesn't exist", code: 404 })
    }
  })
}

exports.get_user_login = function (req,res) {
	var newUser = new User(req.body)
  if (!newUser.username || !newUser.password) {
    res.status(422).send({ message: 'Invalid product parameters. Username = ' 
      + newUser.username + " password = " + newUser.password, code: 422 })
  } else {
    User.getUserLogin(newUser, function (err, user) {
      if (err) {
        res.send(err)
      }
      res.status(201).json(user)
    })
  }
}

function generateAccessToken (username) {
  return jwt.sign(username, secret, { expiresIn: '1800s' })
}
