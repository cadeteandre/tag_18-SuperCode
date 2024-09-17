function checkAirQuality() {
    const body = document.querySelector("body");
    const airQuality = parseInt(document.querySelector("#range").value);
    const concern = document.querySelector(".concern");
    const effect = document.querySelector(".effect");

    if (airQuality <= 50) {
        body.style.backgroundColor = "green";
        concern.innerText = "Level of health concern: Good."
        effect.innerText = "Level of health effect: Little or no risk."
    } else if (airQuality > 50 && airQuality < 100) {
        body.style.backgroundColor = "yellow";
        concern.innerText = "Level of health concern: Moderate."
        effect.innerText = "Level of health effect: Acceptable quality."
    } if (airQuality > 100 && airQuality < 150) {
        body.style.backgroundColor = "orange";
        concern.innerText = "Level of health concern: Unhealthy for sensitive groups."
        effect.innerText = "Level of health effect: Generable publics not likely affected."
    }

}