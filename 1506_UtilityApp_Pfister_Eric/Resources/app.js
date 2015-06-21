

Ti.UI.backgroundColor = "#c6c8ca";



var imageCollectionFolder = Ti.Filesystem.getFile(Ti.Filesystem.resourcesDirectory, "images");
var imageCollection = imageCollectionFolder.getDirectoryListing();
var screenWidth = Ti.Platform.displayCaps.platformWidth;
var screenHeight = Ti.Platform.displayCaps.platformHeight;

var loadContent = require('content');


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
	loadContent.tabPage;
	console.log('clicked');
});

mainWindow.add(titleView, titleLabel, enterButton, enterLabel);
mainWindow.open();

