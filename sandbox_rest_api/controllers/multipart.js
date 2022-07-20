'use strict'

exports.multipart_request = function (req, res) {

    var uploadedFiles = req.files
    var jsonObject = req.body

    try {
        if(!req.files) {
            res.send({
                status: false,
                message: 'No file uploaded'
            })
        } else {
            for(var key in uploadedFiles) {
                var file_to_move = uploadedFiles[key]
                console.log(file_to_move.name)
            }
            for(var key in jsonObject){
                console.log(key + ": " + jsonObject[key])
            }

            res.send({
                status: true,
                message: 'File Uploaded',
            });
        }
    } catch (err) {
        res.status(500).send(err)
    }
}
