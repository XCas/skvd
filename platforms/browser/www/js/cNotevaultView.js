var NotevaultView = function() {
	this.notevault = null;

	this.initialize = function() {
		try {
		    notevault = JSON.parse(window.localStorage.getItem("notevault"));
		    key = window.localStorage.getItem("key");
		} catch (e) {
			notevault = null;
		}
		
		if ( notevault !== null ) {
			if ( notevault["notevault"] !== null ) {

				var folders = notevault["notevault"];
				for (var count_folders=0; count_folders<folders.length; count_folders++) {
					var folder_name = notevault["notevault"][count_folders]["name"];
					notevault["notevault"][count_folders]["path"] = count_folders;
					
					var songs = folders[count_folders]["songs"];
					for (var count_songs=0; count_songs<songs.length; count_songs++) {
						var song_name = notevault["notevault"][count_folders]["songs"][count_songs]["name"];
						notevault["notevault"][count_folders]["songs"][count_songs]["path"] = count_folders + "&" + count_songs;
						
							var voices = songs[count_songs]["voices"];
							
							for (var count_voices=0; count_voices<voices.length; count_voices++) {
								var voice_name = notevault["notevault"][count_folders]["songs"][count_songs]["voices"][count_voices]["name"];
								notevault["notevault"][count_folders]["songs"][count_songs]["voices"][count_voices]["path"] = count_folders + "&" + count_songs + "&" + count_voices;
							
								var files = voices[count_voices]["files"];
								for (var count_files=0; count_files<files.length; count_files++) {
									notevault["notevault"][count_folders]["songs"][count_songs]["voices"][count_voices]["files"][count_files]["key"] = key;
									//var downloadname = songs[count_songs]["name"] + " - " + files[count_files]["name"];
									//notevault["notevault"][count_folders]["songs"][count_songs]["voices"][count_voices]["files"][count_files]["downloadname"] = downloadname;
									if ( notevault["notevault"][count_folders]["songs"][count_songs]["voices"][count_voices]["files"][count_files]["name"].match("mp3") ) {
										notevault["notevault"][count_folders]["songs"][count_songs]["voices"][count_voices]["files"][count_files]["audio"] = true;
									} else {
										notevault["notevault"][count_folders]["songs"][count_songs]["voices"][count_voices]["files"][count_files]["audio"] = false;
									}
								}
							}
					}
				}
			}
		}
		
    	this.notevault = notevault;
	};
	
	this.render = function( count, folder, song, voice ) {
		var source = null;
		var template = null;
		var list = [];
		
		if ( ( this.notevault === null ) || ( this.notevault["notevault"] === null ) ) {
		    source   = $("#error-view-tpl").html();
		    template = Handlebars.compile(source);
		    return template();
		}
		else if ( count == 1 ) {
		    source   = $("#notevault-view-tpl").html();
		    template = Handlebars.compile(source);
		    list["notevault"] = this.notevault["notevault"];
		    return template(list);			
		}
		else if ( count == 2 ) {
		    source   = $("#notevault-view-tpl").html();
		    template = Handlebars.compile(source);
		    list["notevault"] = this.notevault["notevault"][folder]["songs"];
		    return template(list);			
		}
		else if ( count == 3 ) {
		    source   = $("#notevault-view-tpl").html();
		    template = Handlebars.compile(source);
		    list["notevault"] = this.notevault["notevault"][folder]["songs"][song]["voices"];
		    return template(list);			
		}
		else if ( count == 4 ) {
		    source   = $("#notevault-voice-view-tpl").html();
		    template = Handlebars.compile(source);
		    list["notevault"] = this.notevault["notevault"][folder]["songs"][song]["voices"][voice]["files"];
		    return template(list);
		}
	};

};












