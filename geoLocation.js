$(document).ready(function(){
	$.getJSON("http://ip-api.com/json/", function(data){
		console.log(data);
	});
	$.getJSON("https://maps.googleapis.com/maps/api/geocode/json?address=9509+W+Melvina,+Milwaukee,+WI&key=AIzaSyD7E4Xw55LaZLnZFFGMoCqlOP8YY05OLrM", function(data){
		console.log(data);
	});

})