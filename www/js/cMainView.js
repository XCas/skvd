var MainView = function() {
	
		this.initialize = function() {
		    var self = this;
		};
		
		this.render = function() {
			var data = { buttons: [
		                       { link: "events", icon: "events", caption: "Termine" },
		                       { link: "news", icon: "news", caption: "Aktuelles" },
		                       { link: "numbers", icon: "numbers", caption: "Nummern" },
		                       ]};
		
		    var source   = $("#main-view-tpl").html();
		    var template = Handlebars.compile(source);
		    return template(data);
		};	
};
