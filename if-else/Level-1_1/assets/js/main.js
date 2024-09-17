function ageCheck() {
    const age = parseInt(document.querySelector("#age").value);
    const answer = document.querySelector("p");

    if (age > 18) {
        answer.innerText = "over 18";
    } else if (age === 18){
        answer.innerText = "ok, you pass";
    } else {
        answer.innerText = "under 18";
    }
}