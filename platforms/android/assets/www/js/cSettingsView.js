var SettingsView = function() {
	this.key = false;

	this.initialize = function() {
		key = window.localStorage.getItem("key");
		if ( key != null ) {
			this.key = key;
		}
	};
	
	this.render = function() {
		var source   = $("#settings-view-tpl").html();
	    var template = Handlebars.compile(source);
	    return template();
	};
};

SettingsView.btnInternPasswordSaveClick = function() {
	window.localStorage.setItem("key", $("#keyinput").val());
//	window.localStorage.setItem("keyIsValid", "true");
	$("#msg").html("Key gespeichert");
	$("#keyinput").val("");
    this.data = new Data();
    this.data.initialize();
};

SettingsView.btnSyncClick = function() {
    this.data = new Data();
    this.data.initialize();
};