var API_KEY = "cf34bca80069de8474eef005d3f251c2"
	$(function(){
		var loc;
		
		$.getJSON('https://ipinfo.io', function(d){
  console.log("assigning the data...")
  loc= d.loc.split(",");
  console.log(loc);
  $.getJSON('http://api.openweathermap.org/data/2.5/weather?units=imperial&lat=' 
    + loc[0] + '&lon=' + loc[1] +'&APPID=' + API_KEY, function(wd){
	   console.log("get the data,",wd);
	   var currentLocation = wd.name;
	   var currentWeather = wd.weather[0].description;
	   var currentTemp = wd.main.temp;
	   var high = wd.main.temp_max;
	   var low = wd.main.temp_min;
	   $('#location').html(currentLocation);
	   $('#temperature').html(currentTemp);
	   $('#weather').html(currentWeather);
	   $('#high-low').html(high + "/" +low);

})
			})
			})