var NewsView = function() {
	this.news = false;
		
	this.initialize = function() {
		news = JSON.parse(window.localStorage.getItem("news"));
		if ( news != null ) {
			this.news = news;
		}
	};
	
	this.render = function() {
	    var source   = $("#news-view-tpl").html();
	    var template = Handlebars.compile(source);
	    return template(this.news);
	};
};
