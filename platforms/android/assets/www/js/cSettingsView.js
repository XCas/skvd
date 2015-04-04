var SettingsView = function() {
	this.settings = false;

	this.initialize = function() {
		settings = JSON.parse(window.localStorage.getItem("settings"));
		if ( settings != null ) {
			this.settings = settings;
		}
		console.log(this.settings);
	};
	
	this.render = function() {
		var source   = $("#settings-view-tpl").html();
	    var template = Handlebars.compile(source);
	    return template(this.settings);
	};
};
