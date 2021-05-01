function loadWeather () {

    const api = "1e3557c6cfb762e2fd0171356edf710e";  //API key

    //DOM elements to be changed 
    const iconImg = document.getElementById('weather-icon');
    const loc1 = document.querySelector('#location');
    const tempC = document.querySelector('.c');
    const tempF = document.querySelector('.f');
    const desc = document.querySelector('.desc');
    const sunriseDOM = document.querySelector('.sunrise');
    const sunsetDOM = document.querySelector('.sunset');

    //Sapienza coordinates
    let citycode = 3169071;
    let long = 12.51; //4115084657702
    let lat = 41.90; //3705747404736


    // API call
    const base = `https://api.openweathermap.org/data/2.5/weather?id=${citycode}&appid=${api}&units=metric`

    console.log(base);

    // Using fetch to get data
    fetch(base)
        .then((response) => {
            return response.json(); //converts the response to JSON object 
        })

        // destructuring the JSON object 
        .then((data) => {
            const { temp } = data.main;
            const place = data.name;
            const { description, icon } = data.weather[0];
            const { sunrise, sunset } = data.sys;

            const iconUrl = `http://openweathermap.org/img/wn/${icon}@2x.png`;
            const fahrenheit = (temp * 9) / 5 + 32;

            // Converting Epoch(Unix) time to GMT
            const sunriseGMT = new Date(sunrise * 1000);
            const sunsetGMT = new Date(sunset * 1000);


            //interacting with the DOM
            iconImg.src = iconUrl;
            loc1.textContent = `${place}`;
            desc.textContent = `${description}`;
            tempC.textContent = `${temp.toFixed(2)} °C`;
            tempF.textContent = `${fahrenheit.toFixed(2)} °F`;
            sunriseDOM.textContent = `${sunriseGMT.toLocaleDateString()}, ${sunriseGMT.toLocaleTimeString()}`;
            sunsetDOM.textContent = `${sunsetGMT.toLocaleDateString()}, ${sunsetGMT.toLocaleTimeString()}`;
        })
}