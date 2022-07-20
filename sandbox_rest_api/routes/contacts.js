'use strict'

module.exports = function (app) {
	var contacts = require("../controllers/contacts")
    
	app.route('/contacts')
		.get(contacts.list_all_contacts)
	
	app.route('/contact')
		.post(contacts.create_new_contact)

	app.route("/contact/:contactName")
		.get(contacts.get_a_contact_by_name)
		.delete(contacts.delete_a_contact_by_name)
}