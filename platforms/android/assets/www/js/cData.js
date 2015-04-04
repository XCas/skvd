var Data = function() {
	
	this.url = "http://app.schalmeien-dudweiler.de/api/";
	this.key = "schalodris";
	
	this.initialize = function() {
	    var self = this;
	    this.getObjectFromWebService("events");
	    this.getObjectFromWebService("news");
	    this.getObjectFromWebService("numbers", this.key);
	}

	this.getObjectFromWebService = function( object, key ) {		
		$.ajax({
		    url: this.url,
		    dataType: 'text',
		    type: 'GET',
		    data: { get: object, key: key },
		    crossDomain: true,
		    success: function( data ) {
		    	data = data.trim();
		    	window.localStorage.setItem(object, data);
		    },
		    error: function (xhr, ajaxOptions, thrownError) {
		    	alert("errorstatus: " + xhr.status + " ajaxoptions: " + ajaxOptions + " throwError: " + thrownError); 
		    } 
		});
	};
};