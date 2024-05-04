// const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Seattle';
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': 'b8323e7b2emsh7d7b17cc550bed6p18484cjsn864ccb1086c4',
// 		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
// 	}
// };

// try {
// 	const response = await fetch(url, options);
// 	const result = await response.text();
// 	console.log(result);
// } catch (error) {
// 	console.error(error);
// }

// const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Delhi';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'b8323e7b2emsh7d7b17cc550bed6p18484cjsn864ccb1086c4',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

const getWeather=(city)=>{
cityname.innerHTML=city
 fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city,options)
 .then(response=>response.json())
 .then((response)=>{
	console.log(response)
	// cloud_pct.innerHTML=response.cloud_pct
	feels_like.innerHTML=response.feels_like
	humidity.innerHTML=response.humidity
	humidity2.innerHTML=response.humidity
	max_temp.innerHTML=response.max_temp
	min_temp.innerHTML=response.min_temp
	sunrise.innerHTML=response.sunrise
	sunset.innerHTML=response.sunset
	temp.innerHTML=response.temp
	temp2.innerHTML=response.temp
	wind_degrees.innerHTML=response.wind_degrees
	wind_speed.innerHTML=response.wind_speed
	wind2.innerHTML=response.wind_speed
	if(city==="New York"){
	nyfeels_like.innerHTML=response.feels_like
	nyhumidity.innerHTML=response.humidity
	nymax_temp.innerHTML=response.max_temp
	nymin_temp.innerHTML=response.min_temp
	nysunrise.innerHTML=response.sunrise
	nysunset.innerHTML=response.sunset
	nytemp.innerHTML=response.temp
	nycloud_pct.innerHTML=response.cloud_pct
	nywind_degrees.innerHTML=response.wind_degrees
	nywind_speed.innerHTML=response.wind_speed
	}
	if(city==="Moscow"){
	Moscowfeels_like.innerHTML=response.feels_like
	Moscowhumidity.innerHTML=response.humidity
	Moscowmax_temp.innerHTML=response.max_temp
	Moscowmin_temp.innerHTML=response.min_temp
	Moscowsunrise.innerHTML=response.sunrise
	Moscowsunset.innerHTML=response.sunset
	Moscowtemp.innerHTML=response.temp
	Moscowcloud_pct.innerHTML=response.cloud_pct
	Moscowwind_degrees.innerHTML=response.wind_degrees
	Moscowwind_speed.innerHTML=response.wind_speed
	}
	if(city==="Kolkata"){
	Kolkatafeels_like.innerHTML=response.feels_like
	Kolkatahumidity.innerHTML=response.humidity
	Kolkatamax_temp.innerHTML=response.max_temp
	Kolkatamin_temp.innerHTML=response.min_temp
	Kolkatasunrise.innerHTML=response.sunrise
	Kolkatasunset.innerHTML=response.sunset
	Kolkatatemp.innerHTML=response.temp
	Kolkatacloud_pct.innerHTML=response.cloud_pct
	Kolkatawind_degrees.innerHTML=response.wind_degrees
	Kolkatawind_speed.innerHTML=response.wind_speed
	}
	if(city==="Canberra"){
	Canberrafeels_like.innerHTML=response.feels_like
	Canberrahumidity.innerHTML=response.humidity
	Canberramax_temp.innerHTML=response.max_temp
	Canberramin_temp.innerHTML=response.min_temp
	Canberrasunrise.innerHTML=response.sunrise
	Canberrasunset.innerHTML=response.sunset
	Canberratemp.innerHTML=response.temp
	Canberracloud_pct.innerHTML=response.cloud_pct
	Canberrawind_degrees.innerHTML=response.wind_degrees
	Canberrawind_speed.innerHTML=response.wind_speed
	}
	if(city==="Tokyo"){
	Tokyofeels_like.innerHTML=response.feels_like
	Tokyohumidity.innerHTML=response.humidity
	Tokyomax_temp.innerHTML=response.max_temp
	Tokyomin_temp.innerHTML=response.min_temp
	Tokyosunrise.innerHTML=response.sunrise
	Tokyosunset.innerHTML=response.sunset
	Tokyotemp.innerHTML=response.temp
	Tokyocloud_pct.innerHTML=response.cloud_pct
	Tokyowind_degrees.innerHTML=response.wind_degrees
	Tokyowind_speed.innerHTML=response.wind_speed
	}
	if(city==="London"){
	Londonfeels_like.innerHTML=response.feels_like
	Londonhumidity.innerHTML=response.humidity
	Londonmax_temp.innerHTML=response.max_temp
	Londonmin_temp.innerHTML=response.min_temp
	Londonsunrise.innerHTML=response.sunrise
	Londonsunset.innerHTML=response.sunset
	Londontemp.innerHTML=response.temp
	Londoncloud_pct.innerHTML=response.cloud_pct
	Londonwind_degrees.innerHTML=response.wind_degrees
	Londonwind_speed.innerHTML=response.wind_speed
	}

 })
 .catch(err=>console.error(err))}
  submit.addEventListener("click",(e)=>{
	    e.preventDefault()
         getWeather(city.value)
  })
  getWeather('New York')
  getWeather('Moscow')
  getWeather('Kolkata')
  getWeather('Canberra')
  getWeather('Tokyo')
  getWeather('London')
  getWeather('Patna')
  
