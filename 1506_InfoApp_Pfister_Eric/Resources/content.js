//carousel, details, and reviews
var loadContent = require('data');

//create carousel
var carousel = function(){
		//main window
		var carouselWindow = Ti.UI.createWindow({
				backgroundGradient: {
					type: 'linear',
					colors: [{color: '#651296', offset: 0.0}, {color: '#000', offset: 1.0}]
				}
		});
		
		//image view shell
		var titleView = Ti.UI.createView({
				backgroundColor: 'transparent',
				height: 360,
				width: screenWidth,
				top: 0
		});
		
		//card
		var titleViewBackground = Ti.UI.createView({
				backgroundColor: '#CCC',
				opacity: 0.25,
				height: 340,
				width: screenWidth - 10,
				borderRadius: '6',
				top: 20
		});
		
		//image loading 
		var poster = Ti.UI.createImageView({
				image: "images/20200.jpg",
				width: 214,
				height: 317,
				align: 'center',
				top: 30
		});

		//poster
		titleView.add(titleViewBackground, poster);
		carouselWindow.add(titleView);
		carouselWindow.open();
		
};


exports.carousel = carousel;