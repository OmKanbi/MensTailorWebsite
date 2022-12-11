

//----------------------------- Modal -----------------------------//

function loadcoupon(){
    document.getElementById('coupon-content').style.visibility = "visible";
}

function closecoupon(){
    document.getElementById('coupon-content').style.visibility = "hidden";
}

//----------------------------- Dark mode -----------------------------//

function darkmode(){
    document.body.classList.toggle('darkmode');
    document.getElementById('navigation').classList.toggle('navbar-dark');
    document.getElementById('offcanvasNavbar').classList.toggle('text-bg-dark');
    document.getElementById('Toggler').classList.toggle('navbar-toggler-white');
    document.getElementById('navbar-icon').classList.toggle('navbar-toggler-white');
    document.getElementById('Toggler-close').classList.toggle('btn-close-white');
    document.getElementById('dropdown-list').classList.toggle('dropdown-menu-dark');
}

//----------------------------- Geolocation -----------------------------//

    let x = document.getElementById('out');
    let y = document.getElementById('weather');

    function geolocation(){
        if(navigator.geolocation){
            navigator.geolocation.getCurrentPosition(showPosition)
        }else{
            x.innerText = "Geo Not Supported"
        }
    }

    function showPosition(data){
        console.log(data);
        let lat = data.coords.latitude;
        let long = data.coords.longitude;
        const url = `https://api.openweathermap.org/data/2.5/forecast/daily?lat=${lat}&lon=${long}&mode=json&units=metric&cnt=5&appid=fbf712a5a83d7305c3cda4ca8fe7ef29`
        fetch(url,{method: 'GET'})
        .then((res) => res.json())
        .then((data) => {
            console.log(data)
            let city = data.city.name
            let temp = data.list[0].temp.day
            y.innerText = `${city} ( ${temp} °C )`
        })
    }