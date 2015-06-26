
//set background
Ti.UI.backgroundColor = "#c6c8ca";


//cover bases
var imageCollectionFolder = Ti.Filesystem.getFile(Ti.Filesystem.resourcesDirectory, "images");
var imageCollection = imageCollectionFolder.getDirectoryListing();
var screenWidth = Ti.Platform.displayCaps.platformWidth;
var screenHeight = Ti.Platform.displayCaps.platformHeight;
var numPeople = '3';


//launch screen
var mainWindow = Ti.UI.createWindow({
	backgroundImage: './images/celebration01.jpg',
});

//blue logo banner
var titleView = Ti.UI.createView({
	backgroundColor: '#677ba0',
	width: screenWidth,
	height: 60,
	top: 80,
});

//logo text
var titleLabel = Ti.UI.createLabel({
	color: '#FFF',
	text: 'party fool',
	font: {fontFamily: 'Didot-Bold', fontSize: '72'},
	align: 'center',
	top: 65
});

//enter button at bottom of screen
var enterButton = Ti.UI.createView({
	backgroundColor: '#677ba0',
	width: screenWidth,
	height: 70,
	bottom: 0,
});

//the word enter floating with drop shadow
var enterLabel = Ti.UI.createLabel({
	color: '#c6c8ca',
	text: 'enter',
	font: {fontFamily: 'Didot-Bold', fontSize: '30'},
	align: 'center',
	bottom: 20,
	shadowColor: '#2a388f',
	shadowOffset: {x: 1, y: 1},
	shadowRadius: 1,
});


//join email blog form


//join banner
var joinView = Ti.UI.createView({
	backgroundColor: '#c2b49a',
	width: (screenWidth*0.5),
	height: 340,
	top: 190,
	left: 15,
	borderRadius: 10,
	borderHeight: 0,
});

//inner text box
var joinViewInlay = Ti.UI.createView({
	backgroundColor: '#FFF',
	width: ((screenWidth*0.5)-10),
	height: 330,
	top: 5,
	left: 5,
	borderRadius: 10,
	borderHeight: 0,
	shadowColor: '#FFF',
	shadowOffset: {x: 1, y: 1},
	shadowRadius: 1,
});

//upper message
var joinInstructions = Ti.UI.createLabel({
	color: '#7c5f53',
	text: 'Join our email blog, for great insight, stories and access to the hotest event planning forum in the world!',
	font: {fontFamily: 'Cochin', fontSize: '18'},
	left: 15,
	top: 20,
});

//join button background
var joinButton = Ti.UI.createView({ 
	backgroundColor: '#c2b49a',
	width: ((screenWidth*0.5)-10),
	height: 80,
	top: 150,
	left: 5,
});

//sign up button
var joinButtonLabel = Ti.UI.createLabel({   //6d2305
	color: '#FFF',
	text: 'JOIN\n   NOW',
	font: {fontFamily: 'GillSans', fontSize: '26'},
	align: 'center',
	top: 10,
});

//build button
joinButton.add(joinButtonLabel);

//lower text label
var enterBelow = Ti.UI.createLabel({
	color: '#2a388f',
	text: '(Or, click enter below to access our food calculator)',
	font: {fontFamily: 'Cochin', fontSize: '18'},
	align: 'center',
	bottom: 20,
	left: 20,
	right: 20
});

//build sign up banner
joinView.add(joinViewInlay, joinInstructions, joinButton, enterBelow);


//join email blog form end



//if enter is clicked...
enterLabel.addEventListener('click', function(event){
	//create a new window
	var popupWindow = Ti.UI.createWindow({
		backgroundColor: 'transparent'
	});
	
	//shade the screen
	var popupWindowBackground = Ti.UI.createView({
		backgroundColor: 404041,
		opacity: 0.60,
		height: screenHeight,
		width: screenWidth,
		align: 'center',
		top: '0'
	});
	
	//close me function
	var closePopup = function(){
		popupWindow.close();
	};
	
	//backup plan
	var escapeHatch = Ti.UI.createView({
		top: 10,
		right: 30,
		width: 20,
		height: 20,
		
	});
	
	//backup plan label
	var escapeHatchLabel = Ti.UI.createLabel({
		color: '#e0e8ed',
		text: 'X',
		font: {fontFamily: 'Copperplate-Bold', fontSize: '20'},
		top: 0,
		right: 0
	});
	
	//backup plan lego time
	escapeHatch.add(escapeHatchLabel);
	
	//popup window
	var popupViewBackground = Ti.UI.createView({
		backgroundColor: '#e0e8ed',
		height: 300,
		width: screenWidth-60,
		align: 'center',
		top: '0',
		borderRadius: 10,
		borderHeight: 0
	});
	
	//transparent shell
	var popupView = Ti.UI.createView({
		backgroundColor: 'transparent',
		height: 300,
		width: screenWidth-60,
		align: 'center',
		top: '10%',
		borderRadius: 10,
		borderHeight: 0
	});
	
	//input field - input number of guests
	var popupViewTextBox = Ti.UI.createTextField({
		right: 30,
		bottom: 50,
		height: 20,
		width: 80,
		value: numPeople,
		textAlign: 'right',
		backgroundColor: '#FFF',
		keyboardType: Ti.UI.KEYBOARD_NUMBERS_PUNCTUATION,
	});
	
	//ok button
	var popupViewOK = Ti.UI.createButton({
    	title: 'OK',
    	style: Ti.UI.iPhone.SystemButtonStyle.SUBMIT,
    	right: 30,
    	bottom: 20,
	});
	
	//note about input
	var instructionsLabel = Ti.UI.createLabel({
		left: 30,
		top: 50,
		width: screenWidth-100,
    	color: '#7c5f53',
    	textWrap: 'true',
		text: 'Everyone needs a little help sometimes. Let us calculate the quantities while you focus on being creative! Enter the number of guests attending your event, from ten to a thousand.',
		font: {fontFamily: 'Cochin', fontSize: '20'}
	});
	
	//prompt
	var popupPromptLabel = Ti.UI.createLabel({
		left: 30,
		bottom: 53,
		width: screenWidth-100,
    	color: '#7c5f53',
		text: 'Please enter the number of guests attending: (10-1000)',
		font: {fontFamily: 'Cochin', fontSize: '16'}
	});

	//get ready to use content.js
	var loadContent = require('content');
	
	//if clicked ok, then...	
	popupViewOK.addEventListener('click', function(event){
		
		//form validation
		if(Number(popupViewTextBox.value) >= '10' && Number(popupViewTextBox.value) <= '1000'){
				
				//change value of numPeople to user's input
				numPeople = popupViewTextBox.value;
				
				//close popup
				closePopup();
				
				//execute content.js 'tabpage' function
				loadContent.tabPage();
		}else{
				//create an error window
				var errorWindow = Ti.UI.createWindow({
					backgroundColor: 'transparent'
				});
				
				//shade it
				var errorWindowBackground = Ti.UI.createView({
					backgroundColor: '#404041',
					opacity: '0.50',
					width: screenWidth,
					height: screenHeight
				});
				errorWindow.add(errorWindowBackground);
				
				//escape hatch
				var errorEscapeHatch = Ti.UI.createView({
					top: 5,
					right: 5,
					width: 15,
					height: 20,
					
				});
				var errorEscapeHatchLabel = Ti.UI.createLabel({
					color: '#6d2305',
					text: 'X',
					font: {fontFamily: 'Copperplate-Bold', fontSize: '20'},
					top: 0,
					right: 0
				});
				errorEscapeHatch.add(errorEscapeHatchLabel);
				
				//popup
				var errorBox = Ti.UI.createView({
					height: '150',
					width: '250',
					backgroundColor: '#e0e8ed',
					top: 250,
					borderRadius: 10,
					borderHeight: 0					
				});
				var errorMessage = Ti.UI.createLabel({
					left: 10,
					top: 20,
			    	color: '#ed1c24',
					text: 'Please enter a number between 10 and 1000.',
					font: {fontFamily: 'Cochin', fontSize: '20'}
				});
				var errorOK = Ti.UI.createButton({
			    	title: 'OK',
			    	style: Titanium.UI.iPhone.SystemButtonStyle.SUBMIT,
			    	right: 5,
			    	bottom: 5,
				});
				
				//function to close popup
				var closeError = function(){
					errorWindow.close();
				};
				
				//build error window
				errorOK.addEventListener('click', closeError);
				errorEscapeHatch.addEventListener('click', closeError);
				errorBox.add(errorMessage, errorEscapeHatch, errorOK);
				errorWindow.add(errorBox);
				errorWindow.open();
				
		}
	});
	
	//build popup window
	popupView.add(popupViewBackground, escapeHatch, popupPromptLabel, instructionsLabel, popupViewTextBox, popupViewOK);
	
	//popup closing escape hatch
	escapeHatch.addEventListener('click', closePopup);
	
	//initial popup build
	escapeHatch.add(escapeHatchLabel);
	popupWindow.add(popupWindowBackground, popupView);
	popupWindow.open();
});

//access login page
var loadLogin = require('login');

//join button function to access login.js functions
joinButton.addEventListener('click', function(event){
	loadLogin.loginPop();
});

//build main window
mainWindow.add(titleView, titleLabel, enterButton, enterLabel, joinView);
mainWindow.open();

