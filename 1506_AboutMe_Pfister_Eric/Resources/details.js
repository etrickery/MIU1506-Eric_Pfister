
var openDetails = function(movieID){
		
	var useData = require('data');
	
	var detailWindow = Ti.UI.createWindow({
		backgroundColor: '#e6e7e8'
	});
	
	for(x in loadData.jsonObject){
			for(y in loadData.jsonObject[x]){
					if(loadData.jsonObject[x][y].ID === movieID){
						console.log(jsonObject[x][y].title);
					};
			
			};	
	};
	
	
	detailWindow.open();	
};




exports.openDetails = openDetails;