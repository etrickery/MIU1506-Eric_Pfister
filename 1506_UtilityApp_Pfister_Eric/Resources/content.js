

//main body of calculator function
var tabPage = function(){
	
	//results page tab escape hatch
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
	
	//food tab
	var foodWindow = Ti.UI.createWindow({
		title: 'Food',
		backgroundColor: "#c6c8ca"
	});
	var foodTab = Ti.UI.createTab({
		title: 'FOOD',
		window: foodWindow,
	});
	
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
	
	
	//access json object in data.js
	var loadData = require('data');
	
	//sorting
	for(x in loadData.jsonObject){
		
		//folding
		for(y in loadData.jsonObject[x]){
			
			//putting away laundry
			if(loadData.jsonObject[x][y].Title === "Food"){
				
				//build each screen, begin with food
				var foodImage = Ti.UI.createImageView({
					bottom: screenHeight-350,
					image: "./images/" + loadData.jsonObject[x][y].Title + ".jpg",
					width: screenWidth,
					height: '300'
				});
				
				//body of form
				var titleBanner = Ti.UI.createView({
					width: screenWidth,
					height: '50',
					backgroundColor: '#677ba0',
					top: 200
				});
				
				//background
				var bodyBackground = Ti.UI.createView({
					width: screenWidth,
					height: screenHeight-350,
					backgroundColor: '#e0e8ed',
					bottom: 0
				});
				
				//table to house information
				var foodTable = Ti.UI.createTableView({
					backgroundColor: '#e0e8ed',
					width: screenWidth,
					height: screenHeight-350,
					bottom: 0,
					style: Ti.UI.iPhone.TableViewStyle.GROUPED,
					separatorStyle : Ti.UI.iPhone.TableViewSeparatorStyle.NONE,
				});
				
				//array to push
				var foodItems = [];
				
				//dig into data
				for(z in loadData.jsonObject[x][y]){
					
					//build each row
					var tableRows = Ti.UI.createTableViewRow({
						backgroundColor: '#e0e8ed',
						height: 'auto',
					});
					
					//load each row with a label
					var itemLabel = Ti.UI.createLabel({
						color: '#7c5f53',
						height: 'auto',
						left: '20',
						text: z,
						font: {fontFamily: 'Cochin', fontWeight: 'Bold', fontSize: '14'}
					});
					
					//and title (but if main title row, then display the respective title)
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
					
					//build table
					tableRows.add(itemLabel, itemValue);
					foodItems.push(tableRows);
					
				};
				
				//push results into table
				foodTable.setData(foodItems);
				
				//build food tab
				foodWindow.add(foodImage, bodyBackground, titleBanner, foodTable);
				
				
			}else if(loadData.jsonObject[x][y].Title === "Desserts"){
				
				//desserts image
				var dessertsImage = Ti.UI.createImageView({
					bottom: screenHeight-350,
					image: "./images/" + loadData.jsonObject[x][y].Title + ".jpg",
					width: screenWidth,
					height: '300'
				});
				
				//decor
				var titleBanner = Ti.UI.createView({
					width: screenWidth,
					height: '50',
					backgroundColor: '#677ba0',
					top: 200
				});
				
				//background
				var bodyBackground = Ti.UI.createView({
					width: screenWidth,
					height: screenHeight-350,
					backgroundColor: '#e0e8ed',
					bottom: 0
				});
				
				//table
				var dessertsTable = Ti.UI.createTableView({
					backgroundColor: '#e0e8ed',
					width: screenWidth,
					height: screenHeight-350,
					bottom: 0,
					style: Ti.UI.iPhone.TableViewStyle.GROUPED,
					separatorStyle : Ti.UI.iPhone.TableViewSeparatorStyle.NONE,
				});
				
				//array
				var dessertsItems = [];
				
				//sort object into rows
				for(z in loadData.jsonObject[x][y]){
					var dessertsRows = Ti.UI.createTableViewRow({
						backgroundColor: '#e0e8ed',
						height: 'auto',
					});
					
					//verify if title row, and then apply correct content to each row
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
					
					//build table items
					dessertsRows.add(dessertsItemLabel, dessertsItemValue);
					dessertsItems.push(dessertsRows);
				};
				
				//push data into table
				dessertsTable.setData(dessertsItems);
				
				//stack page
				dessertsWindow.add(dessertsImage, bodyBackground, titleBanner, dessertsTable);
				
			}else if(loadData.jsonObject[x][y].Title === "Beverages"){
				
				//beverages image
				var beveragesImage = Ti.UI.createImageView({
					top: '0',
					image: "./images/" + loadData.jsonObject[x][y].Title + ".jpg",
					width: screenWidth,
					height: '300'
				});
				
				//main banner
				var titleBanner = Ti.UI.createView({
					width: screenWidth,
					height: '50',
					backgroundColor: '#677ba0',
					top: 200
				});
				
				//main body background
				var bodyBackground = Ti.UI.createView({
					width: screenWidth,
					height: screenHeight-350,
					backgroundColor: '#e0e8ed',
					bottom: 0
				});
				
				//table
				var beveragesTable = Ti.UI.createTableView({
					backgroundColor: '#e0e8ed',
					width: screenWidth,
					height: screenHeight-350,
					bottom: 0,
					style: Ti.UI.iPhone.TableViewStyle.GROUPED,
					separatorStyle : Ti.UI.iPhone.TableViewSeparatorStyle.NONE,
				});
				
				//array
				var beveragesItems = [];
				
				//sort object
				for(z in loadData.jsonObject[x][y]){
					var beveragesRows = Ti.UI.createTableViewRow({
						backgroundColor: '#e0e8ed',
						height: 'auto',
					});
					
					//validate data
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
					
					//stack table
					beveragesRows.add(beveragesItemLabel, beveragesItemValue);
					beveragesItems.push(beveragesRows);
				};
				
				//push data to table
				beveragesTable.setData(beveragesItems);
				
				//stack tab
				beveragesWindow.add(beveragesImage, bodyBackground, titleBanner, beveragesTable);
			
			}else if(loadData.jsonObject[x][y].Title === "Liquer"){
				
				//liquer window
				var liquerImage = Ti.UI.createImageView({
					bottom: screenHeight-350,
					image: "./images/" + loadData.jsonObject[x][y].Title + ".jpg",
					width: screenWidth,
					height: '300'
				});
				
				//banner
				var titleBanner = Ti.UI.createView({
					width: screenWidth,
					height: '50',
					backgroundColor: '#677ba0',
					top: 200
				});
				
				//background
				var bodyBackground = Ti.UI.createView({
					width: screenWidth,
					height: screenHeight-350,
					backgroundColor: '#e0e8ed',
					bottom: 0
				});
				
				//table
				var liquerTable = Ti.UI.createTableView({
					backgroundColor: '#e0e8ed',
					width: screenWidth,
					height: screenHeight-350,
					bottom: 0,
					style: Ti.UI.iPhone.TableViewStyle.GROUPED,
					separatorStyle : Ti.UI.iPhone.TableViewSeparatorStyle.NONE,
				});
				
				//array
				var liquerItems = [];
				
				//json object
				for(z in loadData.jsonObject[x][y]){
					
					//rows
					var liquerRows = Ti.UI.createTableViewRow({
						backgroundColor: '#e0e8ed',
						height: 'auto',
					});
					
					//title? then display title, else display title and result
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
					
					//stack rows
					liquerRows.add(liquerItemLabel, liquerItemValue);
					liquerItems.push(liquerRows);
				};
				
				//push data to table
				liquerTable.setData(liquerItems);
				
				//stack window
				liquerWindow.add(liquerImage, bodyBackground, titleBanner, liquerTable);
			};
		};
	};
	
	//close nav page window
	var closeNav = function(){
		tabMenu.close();
	};
	
	//close page if clicked
	navEscapeHatch.addEventListener('click', closeNav);
	
	//add escape hatch to nav page
	tabMenu.add(navEscapeHatch);
	tabMenu.open();
	
};


//export use of tabpage
exports.tabPage = tabPage;

