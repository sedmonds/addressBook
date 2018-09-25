describe('Address Book', function() {

	// Adding a Contact 
	it('should be able to add a contact', function(){
		let addressBook = new AddressBook(),
		thisContact = new Contact(); // instantiation!

		addressBook.addContact(thisContact);


		expect(addressBook.getContact(0)).toBe(thisContact);
	});

});


