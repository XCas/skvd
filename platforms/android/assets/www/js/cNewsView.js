var NewsView = function() {
	this.news = null;
		
	this.initialize = function() {
		news = JSON.parse(window.localStorage.getItem("news"));
		
		if ( news != null ) {
			if ( news["news"] != null ) {
				for (var i=0; i<news["news"].length; i++) {
					
					// Format Date
					var inputString = news["news"][i]["date"];
					var dateInputString = inputString.split(" ")[0];
					var timeInputString = inputString.split(" ")[1];
						
				    var dt = new Date(dateInputString.split("-")[0], dateInputString.split("-")[1], dateInputString.split("-")[2], timeInputString.split(":")[0], timeInputString.split(":")[1], timeInputString.split(":")[2]);
		
				    var dayofweek = dt.getDay();
				    var weekday = new Array("So", "Mo", "Di", "Mi", "Do", "Fr", "Sa")[dayofweek];
				    var day = dt.getDate();
				    if (day < 10 ) day = "" + 0 + day;
		
				    var hours = dt.getHours();
				    if (hours < 10 ) hours = "" + 0 + hours;
		
				    var min = dt.getMinutes();
				    if (min < 10 ) min = "" + 0 + min;
		
				    var monthofyear = dt.getMonth();
				    var month = new Array("Januar", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember")[monthofyear];
				    
				    var year = dt.getFullYear();
				    
				    var date = weekday + "., " + day + ". " + month + " " + year;
				    news["news"][i]["date"] = date;
				    news["news"][i]["time"] = hours + ":" + min + " Uhr";
				    
				    // Remove Images
				    
				    var contentString = news["news"][i]["content"];
				    contentString = contentString.replace(/\<img.*>/g, "$REMOVED$");
				    contentString = contentString.replace(/\[caption.*caption\]/g, "$REMOVED$");
				    contentString = contentString.replace("$REMOVED$", "<strong>[Bild]</strong>");
				    
				    news["news"][i]["content"] = contentString;
				}		
			}
		this.news = news;
		}
	};
	
	this.render = function() {
		if ( this.news == null ) {
		    var source   = $("#error-view-tpl").html();
		    var template = Handlebars.compile(source);
		    return template();
		}
		else {
		    var source   = $("#news-view-tpl").html();
		    var template = Handlebars.compile(source);
		    return template(this.news);
		}
	};
};
