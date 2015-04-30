var SKVDApp = function() {

	this.registerEvents = function() {		
	    $(window).on('hashchange', $.proxy(this.render, this));
	};
	
	this.initialize = function() {
	    var self = this;

	    FastClick.attach(document.body);

	    this.registerEvents();
	    this.eventsURL = "#events";
	    this.newsURL = "#news";
	    this.numbersURL = "#numbers";
	    this.settingsURL = "#settings";
	    
	    this.data = new Data();
	    this.data.initialize();
	};
	
	this.render = function () {
		var self = this;
	    var hash = window.location.hash;
	    
	    var header = new Header();
	    $("#header-frame").html(header.render(hash));
	    
	    if (!hash) { // If there is no hash, just assume the eventspage is chosen. (defaultpage)
			window.location.hash = this.eventsURL;
	    }
	    
	    if (hash.match(this.eventsURL)) {
	    	var ev = new EventsView();
	    	ev.initialize();
	    	
	    	if ( hash.match("&") ) {
	    		var id = hash.split("&")[1];
		    	$("#app-frame").html(ev.render(id));
	    	}
	    	else {
		    	$("#app-frame").html(ev.render(-1));
	    	}
	    }
	    else if (hash.match(this.newsURL)) {
	    	var nv = new NewsView();
	    	nv.initialize();
	    	$("#app-frame").html(nv.render());
	    }
	    else if (hash.match(this.numbersURL)) {
	    	var nuv = new NumbersView();
	    	nuv.initialize();
	    	$("#app-frame").html(nuv.render());
	    }
	    else if (hash.match(this.settingsURL)) {
	    	var sv = new SettingsView();
	    	sv.initialize();
	    	$("#app-frame").html(sv.render());
	    }
	};
};

var app = new SKVDApp();
app.initialize();
app.render();