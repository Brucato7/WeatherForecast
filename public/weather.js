"use strict";

function WeatherForecast(){
	this.getWeather = function(latitude,longitude, callback){
  		$.getJSON('/weather?latitude='+latitude+'&longitude='+longitude, function(data){
  			// console.log("Temp Max should be 77.66: ");
  			// console.log(data.daily.data[0].temperatureMax);
  			// console.log("Temp Min should be 58.19: ");
  			// console.log(data.daily.data[0].temperatureMin);
  			// console.log("Precip% should be .5: ");
  			// console.log(data.daily.data[0].precipProbability);
  			// console.log("Sumary should be Light rain...: ");
  			// console.log(data.daily.data[0].summary);
  			callback(data);
  		});
	}

	this.partiallyApplyGetWeather = function(callback){
		return (latitude,longitude) => {
			this.getWeather(latitude,longitude,callback);
		};
	}

	this.displayForecast = function(data){
		var date = new Date();
		var weekdays = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday","Monday","Tuesday","Wednesday"];
		var maxTemp;
		var minTemp;
		var precipChance;
		var summary;
		var forecastHTML = "<div class='row' id='fiveDayForecast'>";
		for (var i = 0; i < 5; i++){
			maxTemp = Math.round(data.daily.data[i].temperatureMax);
			minTemp = Math.round(data.daily.data[i].temperatureMin);
			precipChance = (data.daily.data[i].precipProbability) * 100;
			summary = data.daily.data[i].summary
			forecastHTML += "<div class='col-sm-4 col-md-2";
			if(i == 0){
				forecastHTML += " col-md-offset-1'>";
			} else if(i == 3){
				forecastHTML += " col-sm-offset-2 col-md-offset-0'>";
			} else {
				forecastHTML += "'>";
			}
			forecastHTML +=	"<div class='col-xs-12 weatherReport'>" +
						"<h2 class='dayOfWeek'>"+weekdays[(date.getDay() + i)]+"</h2>" +
						"<h1 class='text-right'>"+maxTemp+"&deg/<span class='tempMin'>"+minTemp+"&deg</span></h1>" +
						"<h4 class='text-left'><span class='precip'>Precip. </span>"+precipChance+"%</h4><hr>" +
						"<p class='text-center forecastSummary'>"+summary+"</p>" +
						"</div></div>";

		}
		forecastHTML += "</div>";
		$("#locationQueryContainer").hide();
		$("#siteContentContainer").append(forecastHTML);
	}
}