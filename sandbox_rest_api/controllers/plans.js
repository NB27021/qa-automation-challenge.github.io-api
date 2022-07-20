'use strict'
var Plan = require('../models/plans')

exports.list_all_plans = function (req, res) {
  Plan.getAllPlans(function (err, plan) {
    if (err) {
      res.send(err)
    }
    res.send(plan)
  })
}
