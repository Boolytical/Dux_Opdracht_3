

// Global variables
var cityInformation = document.getElementById("cityInformation")

// Define buttons
/* addCity.addEventListener('click', function (e) {
    if (document.getElementsByName("City1").value == undefined) {
        document.getElementsByName("City1").innerHTML = document.getElementById("cityName").value;
    } else if (document.getElementsByName("City2").value == undefined &&
                document.getElementsByName("City1").value != document.getElementById("cityName").value) {
        document.getElementsByName("City2").innerHTML = document.getElementById("cityName").value;
    } else if (document.getElementsByName("City3").value == undefined && 
                document.getElementsByName("City1").value != document.getElementById("cityName").value && 
                document.getElementsByName("City2").value != document.getElementById("cityName").value) {
        document.getElementsByName("City3").innerHTML = document.getElementById("cityName").value;
    }
}) */

cityInformation.addEventListener('click', function (e) {
    var cityName = document.getElementById("cityName").value; //Change to pressed City
    if (cityName != "") {
        // API call
        const url = 'https://open-weather13.p.rapidapi.com/city/' + cityName + '/EN';
        const options = {
            method: 'GET',
            headers: {
                'x-rapidapi-key': '3e8f1e1ca8msh21615931e81d67bp1ada44jsn20a6ca9473b8',
                'x-rapidapi-host': 'open-weather13.p.rapidapi.com'
            }
        };

    fetch(url, options)

        // Convert response string to json object
        .then(response => response.json())
        .then(response => {
            // Display whole API response in browser console (take a look at it!)
            console.log(response);

            // Copy one element of response to our HTML paragraph
            document.getElementById("location").innerHTML = cityName + ", " + response.sys.country;
            var d = new Date();
            // d.setSeconds(d.getSeconds() + response.timezone);
            document.getElementById("time").innerHTML = "Time: " + d.toLocaleTimeString(response.timezone, { hour: "2-digit", minute: "2-digit" });
            document.getElementById("temperature").innerHTML = Math.round((response.main.temp - 32) * (5 / 9)) + " °C";
            document.getElementById("description").innerHTML = response.weather[0].main;
            document.getElementById("humidity").innerHTML = "Humidity: " + response.main.humidity + "%";
            document.getElementById("wind").innerHTML = "Wind: " + Math.round(response.wind.speed * 3.6) + " km/h";
            document.getElementById("precipitation").innerHTML = "Precipitation: " + response.rain + " mm";
            document.getElementById("image").src = "https://openweathermap.org/img/wn/" + response.weather[0].icon + "@2x.png";
        })
        .catch(err => {
            // Display errors in console
            console.log(err);
        });
    }
})