var Data = function() {

	this.url = "https://app.schalmeien-dudweiler.de/api/";
	this.key = window.localStorage.getItem("key");

	this.initialize = function() {
	    var self = this;
	    this.getObjectFromWebService("events", this.key);
	    this.getObjectFromWebService("news");
	    this.getObjectFromWebService("numbers", this.key);
	    this.getObjectFromWebService("notevault", this.key);
	}

	this.getObjectFromWebService = function( object, key ) {
		$.ajax({
		    url: this.url,
		    dataType: 'text',
		    type: 'GET',
	        async: false,
	        data: { get: object, key: key },
		    crossDomain: true,
		    success: function( data ) {
		    	data = data.trim();
		    	window.localStorage.setItem(object, data);
		    },
		    error: function (xhr, ajaxOptions, thrownError) {
		    	//alert("Folgender Fehler ist aufgetreten: " + JSON.stringify(xhr) + " ; " + JSON.stringify(ajaxOptions) + " ; " + JSON.stringify(thrownError));
		    } 
		});
	};
};
