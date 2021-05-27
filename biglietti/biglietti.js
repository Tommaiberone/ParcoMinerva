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
    // https://api.openweathermap.org/data/2.5/weather?id=3169071&appid=1e3557c6cfb762e2fd0171356edf710e&units=metric

    console.log(base);

    // Using fetch to get data
    fetch(base)
        .then((response) => {
            return response.json(); //converts the response to JSON object 
        })

        // accessing the JSON object 
        .then((data) => {
            console.log(data);

            const { temp } = data.main; // { xxx } = object destructuring 
            // è uguale a const temp = data.main.temp
            const place = data.name;
            const { description, icon } = data.weather[0]; // { xxx } = object destructuring 
            // è uguale a const description = data.weather[0].description;
            //            const icon = data.weather[0].icon;

            const { sunrise, sunset } = data.sys; // { xxx } = object destructuring 

            const iconUrl = `http://openweathermap.org/img/wn/${icon}@2x.png`;
            const fahrenheit = (temp * 9) / 5 + 32;

            // Converting Epoch(Unix) time to GMT
            const sunriseGMT = new Date(sunrise * 1000);
            const sunsetGMT = new Date(sunset * 1000);


            //interacting with the DOM
            iconImg.src = iconUrl;
            loc1.textContent = place; // per l'interpolazione di stringhe: `${}`
            desc.textContent = description;
            tempC.textContent = `${temp.toFixed(2)} °C`;
            tempF.textContent = `${fahrenheit.toFixed(2)} °F`;
            sunriseDOM.textContent = `${sunriseGMT.toLocaleDateString()}, ${sunriseGMT.toLocaleTimeString()}`;
            sunsetDOM.textContent = `${sunsetGMT.toLocaleDateString()}, ${sunsetGMT.toLocaleTimeString()}`;
        })
}

function Bump_on_click () {
    window.scroll(0,870);
    $('#go-login').css({'animation' : 'pop 0.3s ease-in-out', 'animation-delay': '0.6s', 'animation-duration': '0.6s'} );
    setTimeout(reset_bump, 1200);
}

function reset_bump () {
    $('#go-login').css({'animation' : 'none'});
}

//stessa funzione del global.js ma cambia anche la scritta "Devi effettuare l'accesso per poter comprare un biglietto!" e il bottone accedi in fondo al div biglietti
function login_signup_hide1 () {
    if (localStorage.getItem("email") || sessionStorage.getItem("email")) {
        $("#login").css("display","none");
        $("#signup").css("display","none");
        $("#logout").css("display","inline");
        $("#acquista_top").css("display","inline");
        $("#compra").html(" <u> Clicca qui sotto per comprare il tuo biglietto! </u> ");
        $("#accediBTN").html("<b> Compra </b>");
    }
}




