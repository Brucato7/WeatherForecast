$(document).ready(function() {
  $.getJSON('https://api.forecast.io/forecast/3d4e42eb142384fe31939a4b9b8c14df/37.8267,-122.423', function(data){
  	console.log(data);
  });
});