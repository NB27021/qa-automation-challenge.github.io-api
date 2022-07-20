'use strict'
const Contact = require('../models/contacts')

exports.list_all_contacts = function (req,res) {
	Contact.getAllContacts(function (err, contact) {
		if (err) {
				res.send(err)
		}
		res.send(contact)
	})
}

exports.create_new_contact = function (req,res) {
  var headerContentType = req.header('content-type')
	var newContact = new Contact(req.body)
	if (!newContact.name || !newContact.contact || !headerContentType.includes("multipart/form-data")) {
    res.status(422).send({ message: 'Invalid contact parameters. name: ' 
			+ newContact.name + " contact:" + newContact.contact + " content-type: " + headerContentType, code: 422 })
  } else {
    Contact.createContact(newContact, function (err, contact) {
      if (err) {
        res.send(err)
      }
      res.status(201).json(contact)
    })
  }
}

exports.get_a_contact_by_name = function (req, res) {
  Contact.getContactByName(req.params.contactName, function (err, contact) {
    if (err) {
      res.send(err)
    } else if (contact.length !== 0) {
      res.header('Contact-Name', 'id: ' + req.params.contactName).status(200).json(contact)
    } else {
      res.status(404).send({ message: "Contact doesn't exist", code: 404 })
    }
  })
}

exports.delete_a_contact_by_name = function (req, res) {
  Contact.getContactByName(req.params.contactName, function (_err, contact) {
    if (contact.length !== 0) {
      Contact.removeContactByName(req.params.contactName, function (err, result) {
        if (err) {
          res.send(err)
        }
        res.status(204).json('Success')
      })
    } else {
      res.status(404).send({ message: "Contact doesn't exist", code: 404 })
    }
  })
}