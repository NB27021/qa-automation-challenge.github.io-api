const passport = require('passport')
const BasicStrategy = require('passport-http').BasicStrategy

var User = require('../models/users')
var Authentication = require('../authentication/authentication')

passport.use(new BasicStrategy(
  function (username, password, cb) {
    User.getUserByUsername(username, function (err, user) {
      if (err) {
        return cb(err)
      } else if (user.length === 0) {
        return cb(null, false)
      } else if (Authentication.decrypt_password(user[0].password) !== password) {
        return cb(null, false)
      } else {
        return cb(null, user)
      }
    })
  }))

module.exports = function (app) {
  var campaignsList = require('../controllers/campaigns')
  app.route('/campaigns')
    .get(passport.authenticate('basic', { session: false }), campaignsList.list_all_campaigns)
}
