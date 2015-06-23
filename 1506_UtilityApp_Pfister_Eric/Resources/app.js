

Ti.UI.backgroundColor = "#c6c8ca";



var imageCollectionFolder = Ti.Filesystem.getFile(Ti.Filesystem.resourcesDirectory, "images");
var imageCollection = imageCollectionFolder.getDirectoryListing();
var screenWidth = Ti.Platform.displayCaps.platformWidth;
var screenHeight = Ti.Platform.displayCaps.platformHeight;
var numPeople = '10';



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
	color: '#c6c8ca',
	text: 'party fool',
	font: {fontFamily: 'Didot-Bold', fontSize: '50'},
	align: 'center',
	top: 75
});


var enterButton = Ti.UI.createLabel({
	backgroundColor: '#677ba0',
	width: screenWidth,
	height: 70,
	bottom: 0,
});


var enterLabel = Ti.UI.createLabel({
	color: '#c6c8ca',
	text: 'enter',
	font: {fontFamily: 'Didot-Bold', fontSize: '40'},
	align: 'center',
	bottom: 10,
	shadowColor: '#2a388f',
	shadowOffset: {x: 1, y: 1},
	shadowRadius: 1,
});





enterLabel.addEventListener('click', function(event){
	var popupWindow = Ti.UI.createWindow({
		backgroundColor: 'transparent'
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
		backgroundColor: 404041,
		opacity: 0.80,
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
		boarderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
		right: 30,
		bottom: 50,
		height: 20,
		width: 80,
		value: numPeople,
		textAlign: 'right',
		backgroundColor: '#e0e8ed',
	});
	
	var popupViewOK = Ti.UI.createButton({
    	title: 'OK',
    	style: Titanium.UI.iPhone.SystemButtonStyle.SUBMIT,
    	right: 30,
    	bottom: 20,
	});
	
	
	
	var popupPromptLabel = Ti.UI.createLabel({
		left: 30,
		bottom: 50,
		width: screenWidth-100,
    	color: '#e0e8ed',
		text: 'Please enter the number of guests attending',
		font: {fontFamily: 'Cochin', fontSize: '20'}
	});
	
	var loadContent = require('content');
		
	popupViewOK.addEventListener('click', function(event){
		numPeople = popupViewTextBox.value;
		closePopup();
		loadContent.tabPage();
	});
	
	
	popupView.add(popupViewBackground, escapeHatch, popupPromptLabel, popupViewTextBox, popupViewOK);
	
	
	escapeHatch.addEventListener('click', closePopup);
	
	
	escapeHatch.add(escapeHatchLabel);
	popupWindow.add(popupView);
	popupWindow.open();
	
	
	
	
});

mainWindow.add(titleView, titleLabel, enterButton, enterLabel);
mainWindow.open();

