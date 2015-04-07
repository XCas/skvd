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
		    events["events"][i]["startdate"] = date;
		    events["events"][i]["starttime"] = events["events"][i]["starttime"].split(":")[0] + ":" + events["events"][i]["starttime"].split(":")[1];
		    events["events"][i]["endtime"] = events["events"][i]["endtime"].split(":")[0] + ":" + events["events"][i]["endtime"].split(":")[1];
		}
		this.events = events;
	};
	
	this.render = function() {
	    var source   = $("#events-view-tpl").html();
	    var template = Handlebars.compile(source);
	    return template(this.events);
	};
};