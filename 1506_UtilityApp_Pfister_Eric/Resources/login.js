
//signup form
var loginPop = function(){
	
	//input variables
	var emailAddy;
	var user;
	var pass;
	var pass2;
	
	//close function
	var closeLogin = function(){
		loginWindow.close();
	};
	
	//window
	var loginWindow = Ti.UI.createWindow({
		backgroundColor: 'transparent'
	});
	
	//background
	var backgroundView = Ti.UI.createView({
		width: screenWidth,
		height: screenHeight,
		backgroundColor: '#c6c8ca',
		bottom: 0,
	});
	
	//upper background
	var upperTile = Ti.UI.createView({
		width: screenWidth-30,
		height: 200,
		backgroundColor: '#a3bfd9',
		top: 25,
	});
	
	//escape hatch
	var escapeHatch = Ti.UI.createView({
		top: 10,
		right: 30,
		width: 20,
		height: 20,
	});
	var escapeHatchLabel = Ti.UI.createLabel({
		color: '#FFF',
		text: 'X',
		font: {fontFamily: 'Copperplate-Bold', fontSize: '20'},
		top: 0,
		right: 0
	});
	escapeHatchLabel.addEventListener('click', closeLogin);
	escapeHatch.add(escapeHatchLabel);
	upperTile.add(escapeHatch);
	
	//logo
	var upperTitleLabel = Ti.UI.createLabel({
		color: '#FFF',
		text: 'party fool',
		font: {fontFamily: 'Didot-Bold', fontSize: '50'},
		align: 'center',
		top: 60
	});
	upperTile.add(upperTitleLabel);
	
	//lower background
	var lowerTile = Ti.UI.createView({
		width: screenWidth-30,
		height: screenHeight-240,
		backgroundColor: '#e0e8ed',
		top: 225,
	});
	
	//middle banner
	var bannerBar = Ti.UI.createView({
		width: screenWidth,
		height: 50,
		backgroundColor: '#677ba0',
		top: 225,
	});
	
	//message
	var bannerTitle = Ti.UI.createLabel({
		color: '#FFF',
		align: 'center',
		text: 'Join our email blog!',
		font: {fontFamily: 'Didot-Bold', fontSize: '24'}
	});
	bannerBar.add(bannerTitle);
	
	//email address 
	var emailAddress = Ti.UI.createView({
		backgroundColor: 'transparent',
		width: screenWidth-40,
		height: '20',
		top: 120
	});
	var emailPrompt = Ti.UI.createLabel({
		color: '#7c5f53',
		left: 5,
		text: 'Enter your email address:',
		font: {fontFamily: 'Cochin', fontWeight: 'Bold', fontSize: '16'}
	});
	var emailBox = Ti.UI.createTextField({
		font: {fontFamily: 'Cochin', fontWeight: 'Bold', fontSize: '16'},
		right: 5,
		height: 20,
		width: 130,
		value: 'your@email.com',
		textAlign: 'right',
		backgroundColor: '#d4c7c0',
		keyboardType:Ti.UI.KEYBOARD_NUMBERS_PUNCTUATION,
	});
	emailAddress.add(emailPrompt, emailBox);
	
	//username
	var userName = Ti.UI.createView({
		backgroundColor: 'transparent',
		width: screenWidth-40,
		height: '20',
		top: 180
	});
	var userNamePrompt = Ti.UI.createLabel({
		color: '#7c5f53',
		left: 5,
		text: 'Enter your username:',
		font: {fontFamily: 'Cochin', fontWeight: 'Bold', fontSize: '16'}
	});
	var userNameBox = Ti.UI.createTextField({
		font: {fontFamily: 'Cochin', fontWeight: 'Bold', fontSize: '16'},
		right: 5,
		height: 20,
		width: 130,
		value: 'username',
		textAlign: 'right',
		backgroundColor: '#d4c7c0',
		keyboardType:Ti.UI.KEYBOARD_NUMBERS_PUNCTUATION,
	});
	userName.add(userNamePrompt, userNameBox);
	
	//password
	var passWord = Ti.UI.createView({
		backgroundColor: 'transparent',
		width: screenWidth-40,
		height: '20',
		top: 240
	});
	var passWordPrompt = Ti.UI.createLabel({
		color: '#7c5f53',
		left: 5,
		text: 'Enter your password:',
		font: {fontFamily: 'Cochin', fontWeight: 'Bold', fontSize: '16'}
	});
	var passWordBox = Ti.UI.createTextField({
		font: {fontFamily: 'Cochin', fontWeight: 'Bold', fontSize: '16'},
		right: 5,
		height: 20,
		width: 130,
		value: 'password',
		textAlign: 'right',
		backgroundColor: '#d4c7c0',
		passwordMask: 'true',
		keyboardType:Ti.UI.KEYBOARD_NUMBERS_PUNCTUATION,
	});
	passWord.add(passWordPrompt, passWordBox);
	
	//password confirmation
	var confirmPassWord = Ti.UI.createView({
		backgroundColor: 'transparent',
		width: screenWidth-40,
		height: '20',
		top: 300
	});
	var confirmPassWordPrompt = Ti.UI.createLabel({
		color: '#7c5f53',
		left: 5,
		text: 'Confirm your password:',
		font: {fontFamily: 'Cochin', fontWeight: 'Bold', fontSize: '16'}
	});
	var confirmPassWordBox = Ti.UI.createTextField({
		font: {fontFamily: 'Cochin', fontWeight: 'Bold', fontSize: '16'},
		right: 5,
		height: 20,
		width: 130,
		value: 'password',
		textAlign: 'right',
		backgroundColor: '#d4c7c0',
		passwordMask: 'true',
		keyboardType:Ti.UI.KEYBOARD_NUMBERS_PUNCTUATION,
	});
	confirmPassWord.add(confirmPassWordPrompt, confirmPassWordBox);
	
	//hints
	var hint01 = Ti.UI.createLabel({
		color: '#404041 ',
		right: '5',
		text: 'enter your email address',
		font: {fontFamily: 'Cochin', fontSize: '14'},
		top: 145
	});
	var hint02 = Ti.UI.createLabel({
		color: '#404041 ',
		right: '5',
		text: 'choose a username (8 to 12 characters)',
		font: {fontFamily: 'Cochin', fontSize: '14'},
		top: 205
	});
	var hint03 = Ti.UI.createLabel({
		color: '#404041 ',
		right: '5',
		text: 'choose a password (8 to 12 characters)',
		font: {fontFamily: 'Cochin', fontSize: '14'},
		top: 265
	});
	var hint04 = Ti.UI.createLabel({
		color: '#404041 ',
		right: '5',
		text: 'confirm your password',
		font: {fontFamily: 'Cochin', fontSize: '14'},
		top: 325
	});
	lowerTile.add(hint01, hint02, hint03, hint04);
	
	//ok button
	var okButton = Ti.UI.createView({
		backgroundColor: '#677ba0',
		width: 120,
		height: '30',
		top: 360,
		right: 5
	});
	var okButtonLabel = Ti.UI.createLabel({
		color: '#FFF',
		align: 'center',
		text: 'JOIN',
		font: {fontFamily: 'Copperplate-Bold', fontWeight: 'Bold', fontSize: '16'}
	});
	okButton.add(okButtonLabel);

	//ok button console logs the values input, stores them and closes the window
	okButton.addEventListener('click', function(){
		emailAddy = emailBox.value;
		user = userNameBox.value;
		pass = passWordBox.value;
		pass2 = confirmPassWordBox.value;
		console.log(emailAddy + "\n" + user + "\n" + pass + "\n" + pass2);
		closeLogin();
	});
	
	//build lower view
	lowerTile.add(emailAddress, userName, passWord, confirmPassWord, okButton);
	
	//build window
	loginWindow.add(backgroundView, upperTile, lowerTile, bannerBar);
	loginWindow.open();
};



//export login function
exports.loginPop = loginPop;
