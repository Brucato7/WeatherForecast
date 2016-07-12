"use strict";

function WeatherForecast(){
	this.getWeather = function(latitude,longitude, callback){
  		$.getJSON('/weather?latitude='+latitude+'&longitude='+longitude, function(data){
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
			maxTemp = data.rows[i].max_temp;
			minTemp = data.rows[i].min_temp;
			precipChance = Math.round(data.rows[i].precip_chance * 100);
			summary = data.rows[i].summary
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