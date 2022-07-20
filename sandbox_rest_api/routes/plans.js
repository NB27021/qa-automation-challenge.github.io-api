const passport = require('passport')
const DigestStrategy = require('passport-http').DigestStrategy

var User = require('../models/users')
var Authentication = require('../authentication/authentication')

passport.use(new DigestStrategy({ qop: 'auth' },
  function (username, cb) {
    User.getUserByUsername(username, function (err, user) {
      if (err) {
        return cb(err)
      } else if (user.length === 0) {
        return cb(null, false)
      } else {
        return cb(null, user, Authentication.decrypt_password(user[0].password))
      }
    })
  }))

module.exports = function (app) {
  var plansList = require('../controllers/plans')
  app.route('/plans')
    .get(passport.authenticate('digest', { session: false }), plansList.list_all_plans)
}
