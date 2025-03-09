function updateTime() {
    let losAngelesElement = document.querySelector("#los-angeles")
    if (losAngelesElement) {
        let losAngelesDateElement = losAngelesElement.querySelector(".date")
        let losAngelesTimeElement = losAngelesElement.querySelector(".time")
        let losAngelesCurrentTime = moment().tz("America/Los_Angeles");

        losAngelesDateElement.innerHTML = losAngelesCurrentTime.format("MMMM Do, YYYY");
        losAngelesTimeElement.innerHTML = losAngelesCurrentTime.format("hh:mm:ss [<small>]A[</small>]");
    }
    let rioElement = document.querySelector("#rio-de-janeiro")
    if (rioElement) {
        let rioDateElement = rioElement.querySelector(".date")
        let rioTimeElement = rioElement.querySelector(".time")
        let rioCurrentTime = moment().tz("Brazil/East");

        rioDateElement.innerHTML = rioCurrentTime.format("MMMM Do, YYYY");
        rioTimeElement.innerHTML = rioCurrentTime.format("hh:mm:ss [<small>]A[</small>]");
    }
    let lisbonElement = document.querySelector("#lisbon")
    if (lisbonElement) {
        let lisbonDateElement = lisbonElement.querySelector(".date")
        let lisbonTimeElement = lisbonElement.querySelector(".time")
        let lisbonCurrentTime = moment().tz("Europe/Lisbon");

        lisbonDateElement.innerHTML = lisbonCurrentTime.format("MMMM Do, YYYY");
        lisbonTimeElement.innerHTML = lisbonCurrentTime.format("hh:mm:ss [<small>]A[</small>]");
    }
}

function updateCity(event) {
    let cityTimeZone = event.target.value;
    if (cityTimeZone === "current"){
        cityTimeZone = moment.tz.guess();
    }
    let cityName = cityTimeZone.replace("_", " ").split("/")[1];
    let cityTime = moment().tz(cityTimeZone);
    let citiesElement = document.querySelector("#cities");
    citiesElement.innerHTML = `<div class="city">
                <div>
                    <h2>${cityName}</h2>
                    <div class="date">${cityTime.format("MMMM Do, YYYY")}</div>
                </div>
                <div class="time">${cityTime.format("hh:mm:ss [<small>]A[</small>]")}</div>
            </div>
            <form action="/" class="form-button">
    <input type="submit" value="🏠 Home" class="homepage-button"/>
</form>`
}

updateTime();
setInterval(updateTime, 1000);

let citiesSelectElement = document.querySelector("#city-selected");
citiesSelectElement.addEventListener("change", updateCity);

