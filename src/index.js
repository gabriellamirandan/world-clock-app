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
}

function updateCity(event) {
    let cityTimeZone = event.target.value;
    let cityName = cityTimeZone.replace("_", " ").split("/")[1];
    let cityTime = moment().tz(cityTimeZone);
    let citiesElement = document.querySelector("#cities");
    citiesElement.innerHTML = `<div class="city">
                <div>
                    <h2>${cityName}</h2>
                    <div class="date">${cityTime.format("MMMM Do, YYYY")}</div>
                </div>
                <div class="time">${cityTime.format("hh:mm:ss [<small>]A[</small>]")}</div>
            </div>`
}

updateTime();
setInterval(updateTime, 1000);

let citiesSelectElement = document.querySelector("#city-selected");
citiesSelectElement.addEventListener("change", updateCity);

