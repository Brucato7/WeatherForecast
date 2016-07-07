// $(document).ready(function() {
var getWeather = function(){
  $.getJSON('https://api.forecast.io/forecast/3d4e42eb142384fe31939a4b9b8c14df/43.088481,-88.03204', function(data){
  	console.log(data);

  });
}
// });

var fakeHighTemps = [62,83,99,77,12];