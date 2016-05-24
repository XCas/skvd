var NumbersView = function() {
	this.numbers = false;
	this.initialize = function() {
		numbers = JSON.parse(window.localStorage.getItem("numbers"));
		if ( numbers != null ) {
			this.numbers = numbers;
		}
	};
	
	this.render = function() {
	    var source   = $("#numbers-view-tpl").html();
	    var template = Handlebars.compile(source);
	    return template(this.numbers);
	};
};
