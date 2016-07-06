$(document).ready(function() {
  $.getJSON('https://api.forecast.io/forecast/3d4e42eb142384fe31939a4b9b8c14df/43.088481,-88.03204', function(data){
  	var weather = data.daily.data.temperatureMax;
  });
});

var fakeHighTemps = [62,83,99,77,12];