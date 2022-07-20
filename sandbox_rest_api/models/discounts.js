'use strict'
var sql = require('./db.js')

var Discount = function (discount) {
  this.discount = discount.discount
  this.value = discount.value
}

Discount.getAllDiscounts = function (result) {
  sql.query('select * from discounts', function (err, res) {
    if (err) {
      result(null, err)
    } else {
      result(null, res)
    }
  })
}

module.exports = Discount
