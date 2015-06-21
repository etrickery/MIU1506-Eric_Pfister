


var tabPage = function(){
	console.log('opened');
	//setup tab menu
	var tabMenu = Ti.UI.createTabGroup({
	});
	
	//food tab
	var foodWindow = Ti.UI.createWindow({
		title: 'Food',
		backgroundColor: "#c6c8ca"
	});
	var foodTab = Ti.UI.createTab({
		title: 'Food',
		window: foodWindow
	});
	var foodView = Ti.UI.createView({
		backgroundColor: '#000',
		width: screenWidth,
		height: 60,
		bottom: 80,
	});
	
	foodWindow.add(foodView);
	
	//dessert tab
	var dessertWindow = Ti.UI.createWindow({
		title: 'dessert',
		backgroundColor: "#c6c8ca"
	});
	var dessertTab = Ti.UI.createTab({
		title: 'dessert',
		window: dessertWindow
	});
	
	//beverages tab
	var beveragesWindow = Ti.UI.createWindow({
		title: 'beverages',
		backgroundColor: "#c6c8ca"
	});
	var beveragesTab = Ti.UI.createTab({
		title: 'beverages',
		window: beveragesWindow
	});
	
	//liquer tab
	var liquerWindow = Ti.UI.createWindow({
		title: 'liquer',
		backgroundColor: "#c6c8ca"
	});
	var liquerTab = Ti.UI.createTab({
		title: 'liquer',
		window: liquerWindow
	});
	
	//add tabs to menu
	tabMenu.add(foodTab, dessertTab, beveragesTab, liquerTab);
	
	
	tabMenu.open();
	
};



tabPage.exports = tabPage;

