const jwt = require('jsonwebtoken')
var secret = process.env.SECRET

function authenticateToken (req, res, next) {
  const authHeader = req.headers.authorization
  const token = authHeader && authHeader.split(' ')[1]
  if (token == null) return res.status(401).json({ message: 'Authentication required', code: 401 })
  jwt.verify(token, secret, function (err) {
    if (err) return res.status(403).json({ message: "You don't have permissions to access this resource", code: 403 })
    next()
  })
}

module.exports = function (app) {
  var discountsList = require('../controllers/discounts')
  app.route('/discounts')
    .get(authenticateToken, discountsList.list_all_discounts)
}
