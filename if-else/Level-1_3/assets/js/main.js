function ageCheck() {
    event.preventDefault();
    const age = parseInt(document.querySelector("#age").value);
    const answer = document.querySelector(".answer");

    if (age >= 18) {
        answer.innerText = "Ja. Du kannst Shisha rauchen.";
    } else {
        answer.innerText = "Nein. Du darfst keine Shisha  rauchen.";
    }
}