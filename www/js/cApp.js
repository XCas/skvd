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
	    this.notevaultURL = "#notevault";
	    this.numbersURL = "#numbers";
	    this.settingsURL = "#settings";
	};

	this.render = function () {
		var self = this;
	    var hash = window.location.hash;

		this.data = new Data();
		this.data.initialize();

		
	    var header = new Header();
	    $("#header-frame").html(header.render(hash));

	    if (!hash) { // If there is no hash, just assume the eventspage is chosen. (defaultpage)
	    	hash = this.eventsURL;
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

    	if (hash.match(this.notevaultURL)) {
    		var notevault = new NotevaultView();
	    	notevault.initialize();

	   		if ( hash.match("&") ) {
	    		var hashsplit = hash.split("&");
	    		switch ( hashsplit.length ) {
	    			case 2:
	    				$("#app-frame").html(notevault.render(2, hashsplit[1] ) );
	    				break;
	    			case 3:
	    				$("#app-frame").html(notevault.render(3, hashsplit[1], hashsplit[2] ) );
	    				break;
	    			case 4:
	    				$("#app-frame").html(notevault.render(4, hashsplit[1], hashsplit[2], hashsplit[3] ) );
	    				break;
	    		}
			} else {
				$("#app-frame").html(notevault.render(1));
	    	}

		}

	    else if (hash.match(this.numbersURL)) {
	    	var nuv = new NumbersView();
	    	nuv.initialize();
	    	$("#app-frame").html(nuv.render());
	    }
	    else if (hash.match(this.settingsURL)) {
	    	var sv = new SettingsView();

	    	if ( hash.match("&") ) {
	    		var action = hash.split("&")[1];
		    	sv.initialize(action);
		    	$("#app-frame").html(sv.render(action));
	    	}
	    	else {
		    	sv.initialize("");
		    	$("#app-frame").html(sv.render(""));
	    	}
	   }
	};
};

var app = new SKVDApp();
app.initialize();
app.render();