'use strict'
var Discount = require('../models/discounts')

exports.list_all_discounts = function (req, res) {
  Discount.getAllDiscounts(function (err, discount) {
    if (err) {
      res.send(err)
    }
    res.send(discount)
  })
}
