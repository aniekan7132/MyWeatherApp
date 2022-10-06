'use script';

 /*let weather = {
  apikey: "abb24502769bd5f5d86016c94304a140",
  fetchWeather: function (city) {
   fetch(
     "https://api.openweathermap.org/data/2.5/weather?q="
     + city 
     + "&units=metric&appid=" 
     + this.apikey
   )
   .then((response) => response.json())
   .then((data) => this.displayWeather(data));
   //.catch((err) => alert("Wrong city name"));
  },
  displayWeather: function (data) {
   const { name } = data;
   const { temp, humidity } = data.main; 
   const { icon, description } = data.weather[0];
   const { speed } = data.wind;
   console.log(name, temp, icon, description, humidity, speed);

   let timeStamp = Date.now();
   let date = new Date(timeStamp);
   let dayOfWeek = date.toString().substring(0, 3);
   let dayOfMonth = date.toString().substring(8, 10);
   let month = date.toString().substring(4, 7).padStart(2, 0);

   document.querySelector(".city").innerHTML = "Weather in " + name;
   document.querySelector(".date").innerHTML = `On ${dayOfWeek} ${dayOfMonth} ${month}`;
   document.querySelector(".temp").innerHTML = temp + "&#176;C";
   document.querySelector(".icon").src ="https://openweathermap.org/img/wn/"+ icon +".png";
   document.querySelector(".description").innerHTML = description;
   document.querySelector(".humidity").innerHTML = "Humidity: " + humidity + "%";
   document.querySelector(".wind").innerHTML = "Wind speed: " + speed + "km/h";
  },
  search: function () {
   this.fetchWeather(document.querySelector(".search-bar").value);
  }
 }

 document.querySelector(".search-container button").addEventListener("click", function () {
  weather.search();
  document.querySelector(".search-bar").value = "";
 });

 document.querySelector(".search-bar").addEventListener("keyup", function (e) {
  if(e.key === "Enter") {
   weather.search();
   document.querySelector(".search-bar").value = "";
  }
 });

 weather.fetchWeather("Calabar");*/