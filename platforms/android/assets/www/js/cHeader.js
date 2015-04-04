var Header = function() {
	
		this.initialize = function() {
		    var self = this;
		};
		
		this.render = function(hashash) {
			
			var data = { hash: hashash };
			
		    var source   = $("#header-tpl").html();
		    var template = Handlebars.compile(source);
		    return template(data);
		};	
};
