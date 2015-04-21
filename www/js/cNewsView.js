var NewsView = function() {
	this.news = false;
		
	this.initialize = function() {
		news = JSON.parse(window.localStorage.getItem("news"));
		
		
		for (var i=0; i<news["news"].length; i++) {
		    var dt = new Date(news["news"][i]["date"]);
		    
		    var dayofweek = dt.getDay();
		    var weekday = new Array("So", "Mo", "Di", "Mi", "Do", "Fr", "Sa")[dayofweek];
		    var day = dt.getDate();
		    if (day < 10 ) day = "" + 0 + day;

		    var hours = dt.getHours();
		    var min = dt.getMinutes();
		    
		    var monthofyear = dt.getMonth();
		    var month = new Array("Januar", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember")[monthofyear];
		    
		    var year = dt.getFullYear();
		    
		    var date = weekday + "., " + day + ". " + month + " " + year;
		    news["news"][i]["date"] = date;
		    news["news"][i]["time"] = hours + ":" + min + " Uhr";
		}		
		
		if ( news != null ) {
			this.news = news;
		}
	};
	
	this.render = function() {
	    var source   = $("#news-view-tpl").html();
	    var template = Handlebars.compile(source);
	    return template(this.news);
	};
};
