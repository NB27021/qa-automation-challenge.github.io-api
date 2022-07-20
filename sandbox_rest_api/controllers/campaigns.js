'use strict'
var Campaign = require('../models/campaigns')

exports.list_all_campaigns = function (req, res) {
  Campaign.getAllCampaigns(function (err, campaign) {
    if (err) {
      res.send(err)
    }
    res.send(campaign)
  })
}
