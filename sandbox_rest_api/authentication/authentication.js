'use strict'
var CryptoJS = require('crypto-js')
var secret = process.env.SECRET

exports.encrypt_password = function (rawPassword) {
  return CryptoJS.AES.encrypt(rawPassword, secret).toString()
}

exports.decrypt_password = function (encryptedPassword) {
  return CryptoJS.AES.decrypt(encryptedPassword, secret).toString(CryptoJS.enc.Utf8)
}
