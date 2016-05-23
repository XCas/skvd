var EventsView = function() {
	this.events = false;

	this.initialize = function() {
		events = JSON.parse(window.localStorage.getItem("events"));
		for (var i=0; i<events["events"].length; i++) {
		    var dt = new Date(events["events"][i]["startdate"]);
		    
		    var dayofweek = dt.getDay();
		    var weekday = new Array("So", "Mo", "Di", "Mi", "Do", "Fr", "Sa")[dayofweek];
		    var day = dt.getDate();
		    if (day < 10 ) day = "" + 0 + day;
		    
		    var monthofyear = dt.getMonth();
		    var month = new Array("Januar", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember")[monthofyear];
		    
		    var year = dt.getFullYear();
		    
		    var date = weekday + "., " + day + ". " + month + " " + year;
		    events["events"][i]["date"] = date;
		    
		    var starttime = events["events"][i]["starttime"].split(":")[0] + ":" + events["events"][i]["starttime"].split(":")[1];
		    var endtime = events["events"][i]["endtime"].split(":")[0] + ":" + events["events"][i]["endtime"].split(":")[1];
		    
		    var time = "";
		    if ( starttime == "00:00" ) { 
		    	time = "Uhrzeit unbekannt";
		    }
		    else if ( ( endtime == "00:00" ) || ( starttime == endtime ) ) {
		    	time = "Ab " + starttime + " Uhr";
		    }
		    else {
		    	time = starttime + " - " + endtime + " " + " Uhr";
		    }
		    events["events"][i]["time"] = time;
		}
		if ( events != null ) {
			this.events = events;
		}	
	};
	
	this.getElementByID = function(id) {
		var event = "";
		for (var i=0; i<events["events"].length; i++) {
			if ( events["events"][i]["id"] == id )
				event = events["events"][i];
		}
		console.debug(event);
		return event;
	}
	
	this.render = function(id) {
		if ( id == -1 ) {
		    var source   = $("#events-view-tpl").html();
		    var template = Handlebars.compile(source);
		    return template(this.events);
		}
		else {
		    var source   = $("#single-event-view-tpl").html();
		    var template = Handlebars.compile(source);
		    return template(this.getElementByID(id));			
		}
	};
};












