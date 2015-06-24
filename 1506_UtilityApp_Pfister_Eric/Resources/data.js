var jsonObject = {
					"Servings": [
									{
										"Title": "Food",				//tab
										"Main Dish (ie: Sandwiches)": "1.5",				//servings ie hamburgers
										"Side Dishes (cups)": "1.5",			//# of cups 
										"Fruits & Vegetables (# of trays)": "0.08",	//round up # of large trays
										"Apps(with a meal)": "6",		//appetizers with a meal
										"Apps(no main dish)": "12",		//apps by themselves
									},
									{
										"Title": "Desserts",
										"Cupcakes": "1.5",	//seperate button for cake
										"Cookies": "3",		//medium cookies
										"Candy (cups)": ".5",		//cups 
										"Ice Cream (cups)": "1",	//cups
									},
									{
										"Title": "Beverages",
										"Lemonade (gallons)": "0.16",		//reduce by 30% if more than one
										"Punch (gallons)": "0.16",		//drink selected
										"Tea (gallons)": "0.16"			//round up, in gallons
									},
									{
										"Title": "Liquer",
										"Non-Alcoholic (gallons)": "0.08", //round up in gallons
										"Alcoholic Drinks (drinks per hour)": "1.5", //drinks per hour
										"Kegs (Or 7 cases per keg)": ".011"	//round up, #of kegs (or #x7 = # of cases)
									}
					]
	
};

//export json object to other files
exports.jsonObject = jsonObject;

