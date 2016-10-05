var SettingsView = function() {
	this.settings = "";
	this.settings_intern = "";
	this.version_info = "";
	
	this.version_info_text = "";
	this.version_info_text += '<h3>V2.2.0 - 2016-10-04</h3><ul>';
	this.version_info_text += '<li>Added Notevault</li>';
	this.version_info_text += '<li>Added new loginfeedback</li>';
	this.version_info_text += '<li>Added versionlog in settings</li>';
	this.version_info_text += '<li>Added new remove routine for images and videos in news</li>';
	this.version_info_text += '<li>Added new icon</li>';
	this.version_info_text += '<li>Added new header color scheme</li>';
	this.version_info_text += '<li>Bugfix: Loginform was not properly shown on mobile browsers</li>';
	this.version_info_text += '<li>Bugfix: Sizes were not correct in mobile browsers</li>';
	this.version_info_text += '<li>Bugfix: Back-Button did not work correctly in browsers</li></ul>';

	this.version_info_text += '<h3>V2.1.0 - 2016-05-23</h3><ul>';
	this.version_info_text += '<li>Added weblink to news</li>';
	this.version_info_text += '<li>Removed images from news</li>';
	this.version_info_text += '<li>Added day of birth to numbers</li>';
	this.version_info_text += '<li>Added version info to settings</li>';
	this.version_info_text += '<li>added club-url to settings</li>';
	this.version_info_text += '<li>Added description to single-events</li>';
	this.version_info_text += '<li>Rearranged numbers</li>';
	this.version_info_text += '<li>Repairing crash in case of missing server-connection</li>';
	this.version_info_text += '<li>Adding error-sheets in case of missing server-connection</li>';
	this.version_info_text += '<li>Adding "no planned events"-sheet</li></ul>';

	this.version_info_text += '<h3>V2.0.1 - 2015-04-30</h3><ul>';
	this.version_info_text += '<li>Bugfix: Geo-URL did not work in single events</li></ul>';

	this.version_info_text += '<h3>V2.0.0 - 2015-04-30</h3><ul>';
	this.version_info_text += '<li>Complete redesign, including:</li>';
	this.version_info_text += '<ul><li>New UI concept</li>';
	this.version_info_text += '<li>Geo-URL in single events</li>';
	this.version_info_text += '<li>New events view</li></ul></ul>';

	this.version_info_text += '<h3>V1.0.0 - 2015-04-07</h3><ul>';
	this.version_info_text += '<li>Neu: Events</li>';
	this.version_info_text += '<li>Neu: News</li>';
	this.version_info_text += '<li>Neu: Numbers</li>';
	this.version_info_text += '<li>Neu: Settings</li></ul>';
	
	this.initialize = function( action ) {
		this.settings = {"settings":[]};
		
		if ( action.match("save") ) {
			this.settings.settings.push({"title":"Neues Passwort", "text":"Das eingegebene Passwort wurde gespeichert.", "class": "notify"});
		}
		
		this.settings.settings.push({"title":"SKVD - App", "text":"Schalmeien- und Kulturverein Dudweiler e.V.<br/><a target=\"_blank\" href=\"https://www.Schalmeien-Dudweiler.de\">https://www.Schalmeien-Dudweiler.de</a>"});
		this.settings.settings.push({"title":"Autor", "text":"Uwe Caspari - <a href=\"mailto:UCas@UCasLife.de\">UCas@UCasLife.de</a> - <a target=\"_blank\" href=\"http://ucaslife.de\">UCasLife.de</a>", "onClick":""});
		this.settings.settings.push({"title":"Lizenz", "text":"<a target=\"_blank\" href=\"http://www.gnu.org/licenses/gpl-3.0.html\">GNU GPLv3</a>"});
		this.settings.settings.push({"title":"Version", "text":"2.2.0", "href":"#settings&version"});
		this.settings.settings.push({"title":"Synchronisieren", "text":"Die Daten sofort aktualisieren", "href":"#settings", "onClick":"SettingsView.btnSyncClick();"});
		this.settings.settings.push({"title":"SKVD Intern", "text":"Aktivierung des geschützten Bereichs", "href":"#settings&intern"});
		
		this.version_info = {"title":"Versionlog", "text": this.version_info_text }
	};

	this.render = function(action) {
		var source = null;
		var template = null;
		
		switch ( action ) {
			case "intern":
				source   = $("#settings-intern-view-tpl").html();
			    template = Handlebars.compile(source);
			    return template(this.settings_intern);
		    case "version":
				source   = $("#info-view-tpl").html();
			    template = Handlebars.compile(source);
			    return template(this.version_info);
		   	default:
   				source   = $("#settings-view-tpl").html();
			    template = Handlebars.compile(source);
			    return template(this.settings);	
		}
	};
};

SettingsView.btnInternPasswordSaveClick = function() {
	window.localStorage.setItem("key", $("#keyinput").val());
    this.data = new Data();
    this.data.initialize();
    window.location = "#settings&save";	
};

SettingsView.btnInternPasswordCancelClick = function() {
	window.location = "#settings";
};

SettingsView.btnSyncClick = function() {
    this.data = new Data();
    this.data.initialize();
};