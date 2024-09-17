function weather() {
    const degree = parseInt(document.querySelector("#degree").value);
    const response = document.querySelector("p");

    if(degree >= 8) {
        response.innerText = "Die Wetter Qualität ist: super"
    } else if (degree >= 6) {
        response.innerText = "Die Wetter Qualität ist: gut"
    } else if (degree >= 3) {
        response.innerText = "Die Wetter Qualität ist: ok"
    } else {
        response.innerText = "Die Wetter Qualität ist: schlecht"
    }
}