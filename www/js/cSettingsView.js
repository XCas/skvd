var SettingsView = function() {
	this.settings = "";

	this.initialize = function() {
		this.settings = {"settings":[
		                 {"title":"S.K.V.D.e.V.", "text":"Schalmeien- und Kulturverein Dudweiler e.V."},
		                 //{"title":"Lizenz", "text":"GNU GPL", "onClick":""},
		                 {"title":"Autor", "text":"Uwe Caspari - <a href=\"mailto:UCas@UCasLife.de\">UCas@UCasLife.de</a>", "onClick":""},
		                 {"title":"Synchronisieren", "text":"Die Daten sofort aktualisieren", "onClick":"SettingsView.btnSyncClick();"},
		                 {"title":"SKVD Intern", "text":"Aktivierung der Aktiven-Option", "href":"#intern"}
		]};
	};

	this.render = function() {
		var source   = $("#settings-view-tpl").html();
	    var template = Handlebars.compile(source);
	    return template(this.settings);
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