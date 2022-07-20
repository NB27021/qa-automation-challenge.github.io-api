'use strict'
var sql = require('./db.js')

var Plan = function (plan) {
  this.plan = plan.plan
  this.value = plan.value
}

Plan.getAllPlans = function (result) {
  sql.query('select * from plans', function (err, res) {
    if (err) {
      result(null, err)
    } else {
      result(null, res)
    }
  })
}

module.exports = Plan
