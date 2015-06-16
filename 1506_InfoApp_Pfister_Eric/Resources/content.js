//carousel, details, and reviews
var loadContent = require('data');


//create carousel
var carousel = function(){

		//main window
		var carouselWindow = Ti.UI.createWindow({
				backgroundColor: "#7e3f98"
		});
		
		var titleView = Ti.UI.createView({
				backgroundColor: '#e6e7e8',
				height: 300,
				width: screenWidth,
				top: 0
		});
		
		var titleBar = Ti.UI.createView({
				backgroundColor: '#e6e7e8',
				height: 25,
				width: screenWidth,
				top: 0
			
		});
		
		var titleImage = Ti.UI.createImageView({
				image: "images/" + selectedMovie + "a.jpg",
				height: 240,
				bottom: 60
		});
		
		//previous button
		var prevButton = Ti.UI.createImageView({
				image: "images/prevButton.png",
				backgroundColor: '#e6e7e8',
				left: 10,
				bottom: 10,
				width: 50,
				height: 50 
		}); 
		
		//next button
		var nextButton = Ti.UI.createImageView({
				image: "images/nextButton.png",
				backgroundColor: '#e6e7e8',
				right: 10,
				bottom: 10,
				width: 50,
				height: 50 
		}); 
		
		
		
		
		
		
		//prevButton.addEventListener('click', previous);
		//nextButton.addEventListener('click', next);
		
		
		//load window parts
		titleView.add(titleImage, prevButton, nextButton, titleBar);
		carouselWindow.add(titleView);
		carouselWindow.open();
		
		
		
		
		
};


exports.carousel = carousel;