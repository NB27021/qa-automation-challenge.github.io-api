'use strict'
var sql = require('./db.js')

var Contact = function (contact) {
  this.name = contact.name
  this.contact = contact.contact
}

Contact.getAllContacts = function (result) {
  sql.query('select * from contacts', function (err, res) {
    if (err) {
      result(null, err)
    } else {
      result(null, res)
    }
  })
}

Contact.createContact = function (newContact, result) {
  sql.query('insert into contacts set ?', newContact, function (err, res) {
    if (err) {
      result(err, null)
    } else {
      result(null, res)
    }
  })
}

Contact.getContactByName = function (contactName, result) {
  sql.query('select * from contacts where name = ? ', contactName, function (err, res) {
    if (err) {
      result(err, null)
    } else {
      result(null, res)
    }
  })
}

Contact.removeContactByName = function (name, result) {
  sql.query('delete from contacts where name = ?', name, function (err, res) {
    if (err) {
      result(null, err)
    } else {
      result(null, res)
    }
  })
}

module.exports = Contact