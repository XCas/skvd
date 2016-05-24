var Header = function() {
	this.menu = "";
	
	this.initialize = function() {
	    var self = this;
	};
	
	this.render = function(hash) {
		var backbutton	    = {"imgsrc":"back", "back":"true"};
		
		var eventsbutton    = {"imgsrc":"events", "ahref":"#events"};
		var newsbutton      = {"imgsrc":"news", "ahref":"#news"};
		var numbersbutton   = {"imgsrc":"phone", "ahref":"#numbers"};
		var settingsbutton  = {"imgsrc":"gear", "ahref":"#settings"};
		
		if ( hash.match("#events") ) {
			var eventsbutton    = {"imgsrc":"events-active", "ahref":"#events"};
		}
		else if ( hash.match("#news") ) {
			var newsbutton      = {"imgsrc":"news-active", "ahref":"#news"};
		}
		else if ( hash.match("#numbers") ) {
			var numbersbutton   = {"imgsrc":"phone-active", "ahref":"#numbers"};
		}
		else if ( hash.match("#settings") ) {
			var settingsbutton  = {"imgsrc":"gear-active", "ahref":"#settings"};
		}

		if (hash.match("&")) {
			this.menu = {"menu":[backbutton, settingsbutton]};
		}
		else if ( window.localStorage.getItem("numbers") == "\"authentication failed\"" ) {
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
