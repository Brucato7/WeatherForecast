"use strict";

function GeoLocation(autocompleteCallback){

	this.getLocationFromIP = function(callback){
		$.getJSON("http://ip-api.com/json/", function(data){
			callback(data.lat,data.lon);
		});
	}

	this.getLocationFromAddress = function(address, callback){
		var url = "https://maps.googleapis.com/maps/api/geocode/json?address="+ address + "&key=AIzaSyDhaReQhYmwgJkA32hSAFOcXZ7k5dL1qSY";
		console.log(url);
		$.getJSON(url, function(data){
			
			var lat = data.results[0].geometry.location.lat;
			var lon = data.results[0].geometry.location.lng;
			callback(lat,lon);
		});
	}

	// this.partialGetLocationFromAutofill = function(callback){
	// 	return function(autocomplete){
	// 		getLocationFromAutoFill(autocomplete, callback);
	// 	}
	// }

	var getLocationFromAutoFill = function(autocomplete, callback){
		var place = autocomplete.getPlace();
	    var lat = place.geometry.viewport.f.b;
	    var long = place.geometry.viewport.b.b;
	  	callback(lat,long);
	}

	google.maps.event.addDomListener(window, 'load', initialize);
	function initialize() {
	    var autocomplete = new google.maps.places.Autocomplete(document.getElementById("autocomplete"));

	    google.maps.event.addListener(autocomplete, 'place_changed', function () {
		    getLocationFromAutoFill(autocomplete, autocompleteCallback);
		});

	};

}







	

	
