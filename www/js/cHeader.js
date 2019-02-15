var Header = function() {
	this.menu = "";

	this.initialize = function() {
		var self = this;
	};
	
	this.render = function(hash) {
		
		var backbutton = null;
		if ( hash.match("&save") ) {
			backbutton	    = {"imgsrc":"back", "back": "true", "ahref":"#events" };
		} else {
			backbutton	    = {"imgsrc":"back", "back": "true", "onclick":"history.go(-1);"};
		}
		
		var eventsbutton    = {"imgsrc":"events", "ahref":"#events"};
		var newsbutton      = {"imgsrc":"news", "ahref":"#news"};
		var notevaultbutton  = {"imgsrc":"notevault", "ahref":"#notevault"};
		var numbersbutton   = {"imgsrc":"phone", "ahref":"#numbers"};
		var settingsbutton  = {"imgsrc":"gear", "ahref":"#settings"};
		
		try {
	    	events = JSON.parse(window.localStorage.getItem("events"));
		} catch (e) {
			events = null;
		} finally {
			if ( ( window.localStorage.getItem("numbers") === "" )
					|| ( window.localStorage.getItem("numbers") === null )
					|| ( window.localStorage.getItem("numbers") == "\"authentication failed\"" ) ) {
				events = null;
			}
			if ( ( window.localStorage.getItem("numbers") === "" )
					|| ( window.localStorage.getItem("numbers") === null )
					|| ( window.localStorage.getItem("numbers") == "\"authentication failed\"" ) ) {
				events = null;
			}
		}
		
		if ( hash.match("#events") ) {
			eventsbutton    = {"imgsrc":"events-active", "ahref":"#events"};
		}
		else if ( hash.match("#news") ) {
			newsbutton      = {"imgsrc":"news-active", "ahref":"#news"};
		}
		else if ( hash.match("#numbers") ) {
			numbersbutton   = {"imgsrc":"phone-active", "ahref":"#numbers"};
		}
		else if ( hash.match("#notevault") ) {
			notevaultbutton   = {"imgsrc":"notevault-active", "ahref":"#notevault"};
		}
		else if ( hash.match("#settings") ) {
			settingsbutton  = {"imgsrc":"gear-active", "ahref":"#settings"};
		}

		if (hash.match("&")) {
			this.menu = {"menu":[backbutton, settingsbutton]};
		}
		else if ( events === null ) {
			this.menu = {"menu":[eventsbutton, newsbutton, settingsbutton]};
		}		
		else {
			this.menu = {"menu":[eventsbutton, newsbutton, notevaultbutton, numbersbutton, settingsbutton]};
		}
	
	    var source   = $("#header-tpl").html();
	    var template = Handlebars.compile(source);
	    return template(this.menu);
	};	
};
