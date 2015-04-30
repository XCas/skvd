var SettingsView = function() {
	this.settings = "";
	this.settings_intern = "";

	this.initialize = function() {
		this.settings = {"settings":[
		                 {"title":"S.K.V.D.e.V.", "text":"Schalmeien- und Kulturverein Dudweiler e.V."},
		                 {"title":"Autor", "text":"Uwe Caspari - <a href=\"mailto:UCas@UCasLife.de\">UCas@UCasLife.de</a> - <a target=\"_blank\" href=\"http://ucaslife.de\">UCasLife.de</a>", "onClick":""},
		                 {"title":"Lizenz", "text":"<a href=\"http://www.gnu.org/licenses/gpl-3.0.html\">GNU GPLv3</a>"},
		                 {"title":"Synchronisieren", "text":"Die Daten sofort aktualisieren", "href":"#settings", "onClick":"SettingsView.btnSyncClick();"},
		                 {"title":"SKVD Intern", "text":"Aktivierung der Aktiven-Option", "href":"#settings&intern"}
		]};
		
		this.settings_intern = "";
	};
	
	
	
	this.render = function(action) {
		if ( action.match("intern") ) {
		    var source   = $("#settings-intern-view-tpl").html();
		    var template = Handlebars.compile(source);
		    return template(this.settings_intern);
		}
		else {
			var source   = $("#settings-view-tpl").html();
		    var template = Handlebars.compile(source);
		    return template(this.settings);		
		}
	};
};

SettingsView.btnInternPasswordSaveClick = function() {
	window.localStorage.setItem("key", $("#keyinput").val());
    this.data = new Data();
    this.data.initialize();
    window.location = "#settings";	
};

SettingsView.btnInternPasswordCancelClick = function() {
	window.location = "#settings";
};

SettingsView.btnSyncClick = function() {
    this.data = new Data();
    this.data.initialize();
};