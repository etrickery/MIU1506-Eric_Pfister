//carousel, details, and reviews
var loadContent = require('data');


//create carousel
var carousel = function(){

		var previous = function(){
			carouselWindow.close();
			if(selectedMovie === 20200){
				selectedMovie = '20204';
			}else{
				selectedMovie--;
			};
			LoadWindow;
			console.log(selectedMovie);
		};
		
		var next = function(){
			carouselWindow.close();
			if(selectedMovie === numMovies-1+20200){
				selectedMovie = '20200';
			}else{
				selectedMovie++;
			};
			loadWindow;
			console.log(selectedMovie);
		};
		
		//main window
		var carouselWindow = Ti.UI.createWindow({
				backgroundImage: "images/" + selectedMovie + ".jpg"
		});
		
		//image view shell
		var titleView = Ti.UI.createView({
				backgroundColor: 'transparent',
				height: 120,
				width: screenWidth,
				bottom: 0
		});
		
		
		//previous button
		var prevButton = Ti.UI.createImageView({
				image: "images/prevButton.png",
				backgroundColor: '#e6e7e8',
				left: 50,
				bottom: 50,
				width: 50,
				height: 50 
		}); 
		
		//next button
		var nextButton = Ti.UI.createImageView({
				image: "images/nextButton.png",
				backgroundColor: '#e6e7e8',
				right: 50,
				bottom: 50,
				width: 50,
				height: 50 
		}); 
		
		//load window parts
		titleView.add(prevButton, nextButton);
		carouselWindow.add(titleView);
		carouselWindow.open();
		
		
		prevButton.addEventListener('click', previous);
		nextButton.addEventListener('click', next);

		
		
		
};


exports.carousel = carousel;