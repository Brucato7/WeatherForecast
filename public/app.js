"use strict";


var facebook = new Facebook();
var urWthr45 = new WeatherForecast();
var geoLoc = new GeoLocation(urWthr45.partiallyApplyGetWeather(urWthr45.displayForecast));

$("#typeItIn").append("<form role='form'>" +
  						"<div class='form-group'>" +
  						"<label for='autocomplete'>Enter your Address:</label><br>" +
  						"<input id='autocomplete' placeholder='Enter your address' type='text'></input>"+
  						"</div></form>");

$("#geoLocate").append("<button type='button' class='btn btn-primary' id='geoLocationBtn'"+
						"onclick=geoLoc.getLocationFromIP(urWthr45.partiallyApplyGetWeather(urWthr45.displayForecast))>Get My Forecast!</button>");



  //$("#facebookDiv").append("<button type='button' class='btn btn-primary' id='facebookBtn' onclick='checkLoginState()' scope='user_location'>Get My Forecast!</button>");
$("#facebookDiv").append("<fb:login-button scope='user_location' id='fbLogin' onlogin=checkLoginState></fb:login-button>");
$("#facebookDiv").append("<button type='button' class='btn btn-primary' id='facebookForecastBtn' onclick='facebook.getAddress(geoLoc.getLocationFromAddress, urWthr45.partiallyApplyGetWeather(urWthr45.displayForecast))'>Get My Forecast!</button><br>");



//urWthr45.displayForecast();













// Steps to get weather to appear
// 1. Retrieve location
// 2. convert location to lat and long if needed
// 3. pass lat and long to get weather
// 4. sift through weather data to retrieve needed data
// 5. hide location inputs
// 6. display weather data nicely for user