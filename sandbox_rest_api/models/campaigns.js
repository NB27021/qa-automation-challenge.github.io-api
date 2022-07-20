'use strict'
var sql = require('./db.js')

var Campaign = function (campaign) {
  this.campaign = campaign.campaign
  this.value = campaign.value
}

Campaign.getAllCampaigns = function (result) {
  sql.query('select * from campaigns', function (err, res) {
    if (err) {
      result(null, err)
    } else {
      result(null, res)
    }
  })
}

module.exports = Campaign
