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
				    
					/**
				     * Remove Images with Caption
				    */
				    contentString = contentString.replace(/\[caption/g, "[MAKEASPLIT][caption");
				    contentStringArray = contentString.split("[MAKEASPLIT]");
				    
				    contentString = "";
					contentStringArray.forEach(function(entry) {
						entry = entry.replace(/\[caption.*caption\]/g, "<a class=\"box removed\" target=\"_blank\" href=\"" + news["news"][i]["guid"] + "\">Hier wurde ein Foto ausgeblendet um dir Datenvolumen zu sparen.<br />Tippe hier, um den vollständigen Artikel im Browser zu öffnen.</a>");
    					contentString = contentString + entry;
					});


					/**
				     * Remove Images with manual remove tag
				    */
				    contentString = contentString.replace(/\<\!--imgremoveinapp--\>/g, "[MAKEASPLIT]<!--imgremoveinapp-->");
				    contentStringArray = contentString.split("[MAKEASPLIT]");
				    
				    contentString = "";
					contentStringArray.forEach(function(entry) {
						entry = entry.replace(/\<\!--imgremoveinapp--\>.*\<\!--endimgremoveinapp--\>/g, "<a class=\"box removed\" target=\"_blank\" href=\"" + news["news"][i]["guid"] + "\">Hier wurde ein Foto ausgeblendet um dir Datenvolumen zu sparen.<br />Tippe hier, um den vollständigen Artikel im Browser zu öffnen.</a>");
    					contentString = contentString + entry;
					});

					
				    /**
				     * Replace Youtube Iframes
				    */
				    contentString = contentString.replace(/\<iframe/g, "[MAKEASPLIT]<iframe");
				    contentStringArray = contentString.split("[MAKEASPLIT]");
				    
				    contentString = "";
					contentStringArray.forEach(function(entry) {
						entry = entry.replace(/\<iframe.*iframe>/g, "<a class=\"box removed\" target=\"_blank\" href=\"" + news["news"][i]["guid"] + "\">Hier wurde ein Video ausgeblendet um dir Datenvolumen zu sparen. <br />Tippe hier, um den vollständigen Artikel im Browser zu öffnen.</a>");
    					contentString = contentString + entry;
					});

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
