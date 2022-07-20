'use strict'

module.exports = function (app) {
  var users = require('../controllers/users')

  app.route('/tokens/:userId')
    .get(users.get_user_token)

  app.route('/users/:userId')
    .get(users.read_a_user)

  app.route('/login')
    .post(users.get_user_login)
}
