var Header = function() {
	this.menu = "";
	this.initialize = function() {
	    var self = this;
	};
	
	this.render = function(hash) {
				
		var eventsbutton    = {"imgsrc":"events", "ahref":"#events"};
		var newsbutton      = {"imgsrc":"news", "ahref":"#news"};
		var numbersbutton   = {"imgsrc":"phone", "ahref":"#numbers"};
		var settingsbutton  = {"imgsrc":"gear", "ahref":"#settings"};
		
		if ( hash == "#events" ) {
			var eventsbutton    = {"imgsrc":"events-active", "ahref":"#events"};
		}
		else if ( hash == "#news" ) {
			var newsbutton      = {"imgsrc":"news-active", "ahref":"#news"};
		}
		else if ( hash == "#numbers" ) {
			var numbersbutton   = {"imgsrc":"phone-active", "ahref":"#numbers"};
		}
		else if ( hash == "#settings" ) {
			var settingsbutton  = {"imgsrc":"gear-active", "ahref":"#settings"};
		}
		
		if ( window.localStorage.getItem("numbers") == "\"authentication failed\"" ) {
			this.menu = {"menu":[eventsbutton, newsbutton, settingsbutton]};
		}		
		else {
			this.menu = {"menu":[eventsbutton, newsbutton, numbersbutton, settingsbutton]};
		}
	
		
	    var source   = $("#header-tpl").html();
	    var template = Handlebars.compile(source);
	    return template(this.menu);
	};	
};
