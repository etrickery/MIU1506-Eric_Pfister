//Eric S Pfister
//Informational Application
//Launch Page

//screen fill
Ti.UI.backgroundColor = "#000";


//global variables
var imageCollectionFolder = Ti.Filesystem.getFile(Ti.Filesystem.resourcesDirectory, "images");
var imageCollection = imageCollectionFolder.getDirectoryListing();
var screenWidth = Ti.Platform.displayCaps.platformWidth;
var screenHeight = Ti.Platform.displayCaps.platformHeight;
var selectedMovie = 20200;
var numMovies = 5;


//load content page
var loadContent = require('content');

//create the main window
var mainWindow = Ti.UI.createWindow({
	backgroundGradient: {
		type: 'linear',
		colors: [{color: '#651296', offset: 0.0}, {color: '#000', offset: 1.0}]
	}
	
});

//create the title view
var titleView = Ti.UI.createView({
	backgroundColor: 'transparent',
	height: screenHeight,
	width: screenWidth
});

//create title
var titleLabel = Ti.UI.createLabel({
	text: 'MOVINFO',
	color: '#FFF',
	font: {fontSize: 48, fontFamily: "Copperplate-bold"},
	bottom: '20%',
	right: '15'
});

//add label to titleview
titleView.add(titleLabel);

//make logo clickable
titleLabel.addEventListener("click", loadContent.carousel);

//build screen out
mainWindow.add(titleView);
mainWindow.open();






