var SettingsView = function() {
	this.initialize = function() {};
	
	this.render = function() {
		var source   = $("#settings-view-tpl").html();
	    var template = Handlebars.compile(source);
	    return template();
	};
};

SettingsView.btnInternPasswordSaveClick = function() {
	window.localStorage.setItem("key", $("#keyinput").val());
	$("#msg").html("Key gespeichert");
	$("#keyinput").val("");
    this.data = new Data();
    this.data.initialize();
};

SettingsView.btnSyncClick = function() {
    this.data = new Data();
    this.data.initialize();
};