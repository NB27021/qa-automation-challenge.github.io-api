'use strict'
var sql = require('./db.js')

var User = function (user) {
  this.username = user.username
  this.password = user.password
}

User.getUserByUsername = function (userId, result) {
  sql.query('select * from users where username = ?', userId, function (err, res) {
    if (err) {
      result(err, null)
    } else {
      result(null, res)
    }
  })
}

User.getUserLogin = function (newUser, result) {
  sql.query('select * from users where username=? and password=?', [newUser.username, newUser.password], function (err, res) {
    if (err) {
      result(err, null)
    } else {
      result(null, res)
    }
  })
}

module.exports = User
