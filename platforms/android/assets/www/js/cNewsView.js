var NewsView = function() {
	this.news = null;
		
	this.initialize = function() {
		try {
			news = JSON.parse(window.localStorage.getItem("news"));
		} catch (e) {
			news = null;
		}
		
		if ( news != null ) {
			if ( news["news"] != null ) {
				for (var i=0; i<news["news"].length; i++) {
					
					// Format Date
					var dt = new Date(news["news"][i]["date"]);
		
				    var dayofweek = dt.getDay();
				    var weekday = new Array("So", "Mo", "Di", "Mi", "Do", "Fr", "Sa")[dayofweek];
		
					var day = dt.getDate();
				    if (day < 10 ) day = "" + 0 + day;
		
				    var hours = dt.getHours();
				    if (hours < 10 ) hours = "" + 0 + hours;
		
				    var min = dt.getMinutes();
				    if (min < 10 ) min = "" + 0 + min;
		
				    var month = new Array("Januar", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember")[dt.getMonth()];
				    
				    var year = dt.getFullYear();
				    
				    var date = weekday + "., " + day + ". " + month + " " + year;
				    news["news"][i]["date"] = date;
				    news["news"][i]["time"] = hours + ":" + min + " Uhr";
				    
				    // Remove Images
				    
				    var contentString = news["news"][i]["content"];
				    /**
				     * Remove caption brackets [] and format image with italic caption
				    */
					contentString = contentString.replace(/\[caption.*?\]<img.*?src=\"(.*?)".*?>(.*?)\[\/caption\]/g, '<img src="$1" width=100%"><p style="text-align: center; font-style: italic;">$2</p>');
					contentString = contentString.replace(/<img.*?src=\"(.*?)".*?>/g, '<img src="$1" width=100%">');
				    
					/**
					* Remove youtube classes and add a proper iframe
					*/
					contentString = contentString.replace(/<figure.*[\s\S]https:\/\/www\.youtube\.com\/watch\?v=(.*)[\s\S]<\/div>.*<\/figure>/gm, '<iframe width="100%" height="50%" src="https://www.youtube.com/embed/$1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>');

					
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
