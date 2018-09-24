/* Functionality Useful for an Address Book */

// let's create an outline
  //-- "describe" identifies suite, group of specs
    //-- "it" identifies spec, defines test boundary

	//-- each tests starts with a call to a spec 
  		//-- spec func excepts a single value, 'the actual'
    	//-- comparison frame work called 'matcher',eg. toBe()

/* 
  -- example spec --

  it('should consider this spec', function(){
    expect(true).toBe(true);
    expect(false).not.toBe(false);
  });

*/
//-- things to remember
// a spec can have multiple tests
// remember, each test must return *true* for test to pass


// First Test Run
describe('Address Book', function() {

	// Adding a Contact 
	it('should be able to add a contact', function(){
		let addressBook = new AddressBook(),
		thisContact = new Contact(); // instantiation!

		addressBook.addContact(thisContact);


		expect(addressBook.getContact(0)).toBe(thisContact);
	});

});

//-- Expect *red* portion of Refactor Cycle

