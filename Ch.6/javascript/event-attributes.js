function checkUsername() { // Declare function 
	var elMsg = document.getElementById('feedback'); // Get feedback element
	var elUsername = document.getElementById('username'); // Get username input 
	if (elUsername.value.length < 5) { // if username is too short
		elMsg.textContent = 'Username must be 5 characters or more'; // Set msg
	} else { //Otherwise
	  elMsg.textContent = ''; // Clear Message
	}
}

	