function doppelNumber() {
    const number = parseInt(document.querySelector(".number").value);
    const result = number * 2;
    const form = document.querySelector(".form");
    form.innerHTML += `<p>${number} * 2 = ${result}</p>`;

    document.querySelector(".number").value += number;
}