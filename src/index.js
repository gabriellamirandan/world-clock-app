function updateTime() {
    let losAngelesElement = document.querySelector("#los-angeles")
    let losAngelesDateElement = losAngelesElement.querySelector(".date")
    let losAngelesTimeElement = losAngelesElement.querySelector(".time")
    let losAngelesCurrentTime = moment().tz("America/Los_Angeles");

    losAngelesDateElement.innerHTML = losAngelesCurrentTime.format("MMMM Do, YYYY");
    losAngelesTimeElement.innerHTML = losAngelesCurrentTime.format("hh:mm:ss [<small>]A[</small>]");

    let rioElement = document.querySelector("#rio-de-janeiro")
    let rioDateElement = rioElement.querySelector(".date")
    let rioTimeElement = rioElement.querySelector(".time")
    let rioCurrentTime = moment().tz("Brazil/East");

    rioDateElement.innerHTML = rioCurrentTime.format("MMMM Do, YYYY");
    rioTimeElement.innerHTML = rioCurrentTime.format("hh:mm:ss [<small>]A[</small>]");
}

setInterval(updateTime, 1000)

