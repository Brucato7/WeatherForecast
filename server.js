var express = require("express");
var app = express();
var database = require("./db-manager.js")

app.use(express.static("public"));
app.listen(3000,function(){
	console.log("Listening on port ", 3000);
});

var https = require("https");

function getJSON(url, callback) {
 https.get(url, (response) => {
   var body = '';
   response.on('data', function(d) {
       body += d;
   });
   response.on('end', function() {
     callback(null, JSON.parse(body));
   });
 }).on('error', function(e) {
   callback(e);
 });
}

app.get("/weather", function(request, response){
	var url = 'https://api.forecast.io/forecast/3d4e42eb142384fe31939a4b9b8c14df/'+request.query.latitude+','+request.query.longitude;
	getJSON(url, function(error, data){
		database.saveLocationQuery(request.query.latitude, request.query.longitude,"07/11/2016", function(locationId){
			for(var i = 0;i<5;i++){
				database.saveForecastDay(Math.round(data.daily.data[i].temperatureMax),
											Math.round(data.daily.data[i].temperatureMin),
											data.daily.data[i].summary,
											data.daily.data[i].precipProbability,
											locationId);
			}
		});		
		response.send(JSON.stringify(data));

		
	})
	
})


									