


var tabPage = function(){
	
	//food tab
	var foodWindow = Ti.UI.createWindow({
		title: 'Food',
		backgroundColor: "#c6c8ca"
	});
	var foodTab = Ti.UI.createTab({
		title: 'FOOD',
		window: foodWindow,
	});
	
	var navEscapeHatch = Ti.UI.createView({
		top: 30,
		right: 30,
		width: 20,
		height: 20,
		
	});
	
	var navEscapeHatchLabel = Ti.UI.createLabel({
		color: '#000',
		text: 'X',
		font: {fontFamily: 'Copperplate-Bold', fontSize: '20'},
		top: 0,
		right: 0
	});
	
	navEscapeHatch.add(navEscapeHatchLabel);
	
	//dessert tab
	var dessertsWindow = Ti.UI.createWindow({
		title: 'Desserts',
		backgroundColor: "#c6c8ca"
	});
	var dessertsTab = Ti.UI.createTab({
		title: 'DESSERTS',
		window: dessertsWindow,
	});
	
	
	
	//beverages tab
	var beveragesWindow = Ti.UI.createWindow({
		title: 'beverages',
		backgroundColor: "#c6c8ca"
	});
	var beveragesTab = Ti.UI.createTab({
		title: 'BEVERAGES',
		window: beveragesWindow,
	});
	
	
	
	//liquer tab
	var liquerWindow = Ti.UI.createWindow({
		title: 'liquer',
		backgroundColor: "#c6c8ca"
	});
	var liquerTab = Ti.UI.createTab({
		title: 'LIQUER',
		window: liquerWindow,
	});
	
	
	
	//add tabs to menu
	var tabMenu = Ti.UI.createTabGroup({
		tabs: [foodTab, dessertsTab, beveragesTab, liquerTab],
		swipeable: 'true',
	});
	
	
	
	var loadData = require('data');
	for(x in loadData.jsonObject){
		for(y in loadData.jsonObject[x]){
			if(loadData.jsonObject[x][y].Title === "Food"){
				var foodImage = Ti.UI.createImageView({
					bottom: screenHeight-350,
					image: "./images/" + loadData.jsonObject[x][y].Title + ".jpg",
					width: screenWidth,
					height: '300'
				});
				
				var titleBanner = Ti.UI.createView({
					width: screenWidth,
					height: '50',
					backgroundColor: '#677ba0',
					top: 200
				});
				
				var bodyBackground = Ti.UI.createView({
					width: screenWidth,
					height: screenHeight-350,
					backgroundColor: '#e0e8ed',
					bottom: 0
				});
				
				var foodTable = Ti.UI.createTableView({
					backgroundColor: '#e0e8ed',
					width: screenWidth,
					height: screenHeight-350,
					bottom: 0,
					style: Ti.UI.iPhone.TableViewStyle.GROUPED,
					separatorStyle : Ti.UI.iPhone.TableViewSeparatorStyle.NONE,
				});
				
				var foodItems = [];
				
				for(z in loadData.jsonObject[x][y]){
					var tableRows = Ti.UI.createTableViewRow({
						backgroundColor: '#e0e8ed',
						height: 'auto',
					});
					
					var itemLabel = Ti.UI.createLabel({
						color: '#7c5f53',
						height: 'auto',
						left: '20',
						text: z,
						font: {fontFamily: 'Cochin', fontWeight: 'Bold', fontSize: '14'}
					});
					
					if(z === 'Title'){
							var itemLabel = Ti.UI.createLabel({
								color: '#7c5f53',
								height: 'auto',
								left: '22',
								text: loadData.jsonObject[x][y][z],
								font: {fontFamily: 'Cochin', fontWeight: 'Bold', fontSize: '14'}
							});
					}else{
							var itemLabel = Ti.UI.createLabel({
								color: '#7c5f53',
								height: 'auto',
								left: '20',
								text: z,
								font: {fontFamily: 'Cochin', fontWeight: 'Bold', fontSize: '14'}
							});
							var itemValue = Ti.UI.createLabel({
								color: '#7c5f53',
								height: 'auto',
								right: '20',
								text: Math.round(loadData.jsonObject[x][y][z] * numPeople), 
								font: {fontFamily: 'Cochin', fontSize: '14'}
							});
					};
					
					tableRows.add(itemLabel, itemValue);
					foodItems.push(tableRows);
					
				};
				
				foodTable.setData(foodItems);
				
				foodWindow.add(foodImage, bodyBackground, titleBanner, foodTable);
				
			}else if(loadData.jsonObject[x][y].Title === "Desserts"){
				var dessertsImage = Ti.UI.createImageView({
					bottom: screenHeight-350,
					image: "./images/" + loadData.jsonObject[x][y].Title + ".jpg",
					width: screenWidth,
					height: '300'
				});
				
				var titleBanner = Ti.UI.createView({
					width: screenWidth,
					height: '50',
					backgroundColor: '#677ba0',
					top: 200
				});
				
				var bodyBackground = Ti.UI.createView({
					width: screenWidth,
					height: screenHeight-350,
					backgroundColor: '#e0e8ed',
					bottom: 0
				});
				
				var dessertsTable = Ti.UI.createTableView({
					backgroundColor: '#e0e8ed',
					width: screenWidth,
					height: screenHeight-350,
					bottom: 0,
					style: Ti.UI.iPhone.TableViewStyle.GROUPED,
					separatorStyle : Ti.UI.iPhone.TableViewSeparatorStyle.NONE,
				});
				
				var dessertsItems = [];
				
				for(z in loadData.jsonObject[x][y]){
					var dessertsRows = Ti.UI.createTableViewRow({
						backgroundColor: '#e0e8ed',
						height: 'auto',
					});
					
					if(z === 'Title'){
							var dessertsItemLabel = Ti.UI.createLabel({
								color: '#7c5f53',
								height: 'auto',
								left: '22',
								text: loadData.jsonObject[x][y][z],
								font: {fontFamily: 'Cochin', fontWeight: 'Bold', fontSize: '14'}
							});
					}else{
							var dessertsItemLabel = Ti.UI.createLabel({
								color: '#7c5f53',
								height: 'auto',
								left: '20',
								text: z,
								font: {fontFamily: 'Cochin', fontWeight: 'Bold', fontSize: '14'}
							});
							var dessertsItemValue = Ti.UI.createLabel({
								color: '#7c5f53',
								height: 'auto',
								right: '20',
								text: (loadData.jsonObject[x][y][z] * numPeople), 
								font: {fontFamily: 'Cochin', fontSize: '14'}
							});
					};
					
					dessertsRows.add(dessertsItemLabel, dessertsItemValue);
					dessertsItems.push(dessertsRows);
				};
				
				dessertsTable.setData(dessertsItems);
				
				dessertsWindow.add(dessertsImage, bodyBackground, titleBanner, dessertsTable);
				
			}else if(loadData.jsonObject[x][y].Title === "Beverages"){
				var beveragesImage = Ti.UI.createImageView({
					top: '0',
					image: "./images/" + loadData.jsonObject[x][y].Title + ".jpg",
					width: screenWidth,
					height: '300'
				});
				
				var titleBanner = Ti.UI.createView({
					width: screenWidth,
					height: '50',
					backgroundColor: '#677ba0',
					top: 200
				});
				
				var bodyBackground = Ti.UI.createView({
					width: screenWidth,
					height: screenHeight-350,
					backgroundColor: '#e0e8ed',
					bottom: 0
				});
				
				var beveragesTable = Ti.UI.createTableView({
					backgroundColor: '#e0e8ed',
					width: screenWidth,
					height: screenHeight-350,
					bottom: 0,
					style: Ti.UI.iPhone.TableViewStyle.GROUPED,
					separatorStyle : Ti.UI.iPhone.TableViewSeparatorStyle.NONE,
				});
				
				var beveragesItems = [];
				
				for(z in loadData.jsonObject[x][y]){
					var beveragesRows = Ti.UI.createTableViewRow({
						backgroundColor: '#e0e8ed',
						height: 'auto',
					});
					
					if(z === 'Title'){
							var beveragesItemLabel = Ti.UI.createLabel({
								color: '#7c5f53',
								height: 'auto',
								left: '22',
								text: loadData.jsonObject[x][y][z],
								font: {fontFamily: 'Cochin', fontWeight: 'Bold', fontSize: '14'}
							});
					}else{
							var beveragesItemLabel = Ti.UI.createLabel({
								color: '#7c5f53',
								height: 'auto',
								left: '20',
								text: z,
								font: {fontFamily: 'Cochin', fontWeight: 'Bold', fontSize: '14'}
							});
							var beveragesItemValue = Ti.UI.createLabel({
								color: '#7c5f53',
								height: 'auto',
								right: '20',
								text: Math.round(loadData.jsonObject[x][y][z] * numPeople), 
								font: {fontFamily: 'Cochin', fontSize: '14'}
							});
					};
					
					beveragesRows.add(beveragesItemLabel, beveragesItemValue);
					beveragesItems.push(beveragesRows);
				};
				
				beveragesTable.setData(beveragesItems);
				
				beveragesWindow.add(beveragesImage, bodyBackground, titleBanner, beveragesTable);
			
			}else if(loadData.jsonObject[x][y].Title === "Liquer"){
				var liquerImage = Ti.UI.createImageView({
					bottom: screenHeight-350,
					image: "./images/" + loadData.jsonObject[x][y].Title + ".jpg",
					width: screenWidth,
					height: '300'
				});
				
				var titleBanner = Ti.UI.createView({
					width: screenWidth,
					height: '50',
					backgroundColor: '#677ba0',
					top: 200
				});
				
				var bodyBackground = Ti.UI.createView({
					width: screenWidth,
					height: screenHeight-350,
					backgroundColor: '#e0e8ed',
					bottom: 0
				});
				
				var liquerTable = Ti.UI.createTableView({
					backgroundColor: '#e0e8ed',
					width: screenWidth,
					height: screenHeight-350,
					bottom: 0,
					style: Ti.UI.iPhone.TableViewStyle.GROUPED,
					separatorStyle : Ti.UI.iPhone.TableViewSeparatorStyle.NONE,
				});
				
				var liquerItems = [];
				
				for(z in loadData.jsonObject[x][y]){
					var liquerRows = Ti.UI.createTableViewRow({
						backgroundColor: '#e0e8ed',
						height: 'auto',
					});
					
					if(z === 'Title'){
							var liquerItemLabel = Ti.UI.createLabel({
								color: '#7c5f53',
								height: 'auto',
								left: '22',
								text: loadData.jsonObject[x][y][z],
								font: {fontFamily: 'Cochin', fontWeight: 'Bold', fontSize: '14'}
							});
					}else{
							var liquerItemLabel = Ti.UI.createLabel({
								color: '#7c5f53',
								height: 'auto',
								left: '20',
								text: z,
								font: {fontFamily: 'Cochin', fontWeight: 'Bold', fontSize: '14'}
							});
							var liquerItemValue = Ti.UI.createLabel({
								color: '#7c5f53',
								height: 'auto',
								right: '20',
								text: Math.round(loadData.jsonObject[x][y][z] * numPeople), 
								font: {fontFamily: 'Cochin', fontSize: '14'}
							});
							if(liquerItemValue.text === '0'){
								liquerItemValue.text = '1';
							};	
					};
					
					liquerRows.add(liquerItemLabel, liquerItemValue);
					liquerItems.push(liquerRows);
				};
				
				liquerTable.setData(liquerItems);
				
				liquerWindow.add(liquerImage, bodyBackground, titleBanner, liquerTable);
			};
		};
	};
	
	var closeNav = function(){
		tabMenu.close();
	};
	
	navEscapeHatch.addEventListener('click', closeNav);
	
	tabMenu.add(navEscapeHatch);
	tabMenu.open();
	
};



exports.tabPage = tabPage;

