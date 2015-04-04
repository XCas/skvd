var EventsView = function() {
	this.events = false;

	this.initialize = function() {
		events = JSON.parse(window.localStorage.getItem("events"));
		if ( events != null ) {
			this.events = events;
		}
	};
	
	this.render = function() {
	    var source   = $("#events-view-tpl").html();
	    var template = Handlebars.compile(source);
	    return template(this.events);
	};
};