'use script'

module.exports = function(app) {
    var multipart = require('../controllers/multipart.js')
    app.route('/multipartFormData')
      .post(multipart.multipart_request)
}