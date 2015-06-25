

Ti.UI.backgroundColor = "#c6c8ca";



var imageCollectionFolder = Ti.Filesystem.getFile(Ti.Filesystem.resourcesDirectory, "images");
var imageCollection = imageCollectionFolder.getDirectoryListing();
var screenWidth = Ti.Platform.displayCaps.platformWidth;
var screenHeight = Ti.Platform.displayCaps.platformHeight;
var numPeople = '3';



var mainWindow = Ti.UI.createWindow({
	backgroundImage: './images/celebration01.jpg',
});


var titleView = Ti.UI.createView({
	backgroundColor: '#677ba0',
	width: screenWidth,
	height: 60,
	top: 80,
});


var titleLabel = Ti.UI.createLabel({
	color: '#FFF',
	text: 'party fool',
	font: {fontFamily: 'Didot-Bold', fontSize: '72'},
	align: 'center',
	top: 65
});


var enterButton = Ti.UI.createView({
	backgroundColor: '#677ba0',
	width: screenWidth,
	height: 70,
	bottom: 0,
});

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



var joinView = Ti.UI.createView({
	backgroundColor: '#c2b49a',
	width: (screenWidth*0.5),
	height: 340,
	top: 190,
	left: 15,
	borderRadius: 10,
	borderHeight: 0,
});
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
var joinInstructions = Ti.UI.createLabel({
	color: '#7c5f53',
	text: 'Join our email blog, for great insight, stories and access to the hotest event planning forum in the world!',
	font: {fontFamily: 'Cochin', fontSize: '18'},
	left: 15,
	top: 20,
});
var joinButton = Ti.UI.createView({ 
	backgroundColor: '#c2b49a',
	width: ((screenWidth*0.5)-10),
	height: 80,
	top: 150,
	left: 5,
});
var joinButtonLabel = Ti.UI.createLabel({   //6d2305
	color: '#FFF',
	text: 'JOIN\n   NOW',
	font: {fontFamily: 'GillSans', fontSize: '26'},
	align: 'center',
	top: 10,
});
joinButton.add(joinButtonLabel);
var enterBelow = Ti.UI.createLabel({
	color: '#2a388f',
	text: 'Or, click enter below to use our food calculator.',
	font: {fontFamily: 'Cochin', fontSize: '20'},
	align: 'center',
	bottom: 20,
	left: 20,
	right: 20
});
joinView.add(joinViewInlay, joinInstructions, joinButton, enterBelow);


//join email blog form end




enterLabel.addEventListener('click', function(event){
	var popupWindow = Ti.UI.createWindow({
		backgroundColor: 'transparent'
	});
	
	var popupWindowBackground = Ti.UI.createView({
		backgroundColor: 404041,
		opacity: 0.60,
		height: screenHeight,
		width: screenWidth,
		align: 'center',
		top: '0'
	});
	
	var closePopup = function(){
		popupWindow.close();
	};
	
	var escapeHatch = Ti.UI.createView({
		top: 10,
		right: 30,
		width: 20,
		height: 20,
		
	});
	
	var escapeHatchLabel = Ti.UI.createLabel({
		color: '#e0e8ed',
		text: 'X',
		font: {fontFamily: 'Copperplate-Bold', fontSize: '20'},
		top: 0,
		right: 0
	});
	
	escapeHatch.add(escapeHatchLabel);
	
	var popupViewBackground = Ti.UI.createView({
		backgroundColor: '#e0e8ed',
		height: 300,
		width: screenWidth-60,
		align: 'center',
		top: '0',
		borderRadius: 10,
		borderHeight: 0
	});
	
	var popupView = Ti.UI.createView({
		backgroundColor: 'transparent',
		height: 300,
		width: screenWidth-60,
		align: 'center',
		top: '10%',
		borderRadius: 10,
		borderHeight: 0
	});
	
	var popupViewTextBox = Ti.UI.createTextField({
		right: 30,
		bottom: 50,
		height: 20,
		width: 80,
		value: numPeople,
		textAlign: 'right',
		backgroundColor: '#FFF',
		keyboardType:Ti.UI.KEYBOARD_NUMBERS_PUNCTUATION,
	});
	
	var popupViewOK = Ti.UI.createButton({
    	title: 'OK',
    	style: Titanium.UI.iPhone.SystemButtonStyle.SUBMIT,
    	right: 30,
    	bottom: 20,
	});
	
	var instructionsLabel = Ti.UI.createLabel({
		left: 30,
		top: 50,
		width: screenWidth-100,
    	color: '#7c5f53',
    	textWrap: 'true',
		text: 'Everyone needs a little help sometimes. Let us calculate the quantities while you focus on being creative! Enter the number of guests attending your event, from ten to a thousand.',
		font: {fontFamily: 'Cochin', fontSize: '20'}
	});
	
	var popupPromptLabel = Ti.UI.createLabel({
		left: 30,
		bottom: 53,
		width: screenWidth-100,
    	color: '#7c5f53',
		text: 'Please enter the number of guests attending: (10-1000)',
		font: {fontFamily: 'Cochin', fontSize: '16'}
	});

	var loadContent = require('content');
	
		
	popupViewOK.addEventListener('click', function(event){
		if(Number(popupViewTextBox.value) >= '10' && Number(popupViewTextBox.value) <= '1000'){
				numPeople = popupViewTextBox.value;
				closePopup();
				loadContent.tabPage();
		}else{
				var errorWindow = Ti.UI.createWindow({
					backgroundColor: 'transparent'
				});
				var errorWindowBackground = Ti.UI.createView({
					backgroundColor: '#404041',
					opacity: '0.50',
					width: screenWidth,
					height: screenHeight
				});
				errorWindow.add(errorWindowBackground);
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
				var closeError = function(){
					errorWindow.close();
				};
				errorOK.addEventListener('click', closeError);
				errorEscapeHatch.addEventListener('click', closeError);
				errorBox.add(errorMessage, errorEscapeHatch, errorOK);
				errorWindow.add(errorBox);
				errorWindow.open();
				
		}
	});
	
	
	popupView.add(popupViewBackground, escapeHatch, popupPromptLabel, instructionsLabel, popupViewTextBox, popupViewOK);
	
	
	escapeHatch.addEventListener('click', closePopup);
	
	
	escapeHatch.add(escapeHatchLabel);
	popupWindow.add(popupWindowBackground, popupView);
	popupWindow.open();
	
	
	
	
});

var loadLogin = require('login');

joinButton.addEventListener('click', function(event){
	loadLogin.loginPop();
});

mainWindow.add(titleView, titleLabel, enterButton, enterLabel, joinView);
mainWindow.open();

