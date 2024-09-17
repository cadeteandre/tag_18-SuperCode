function ageCalculator() {
    const birthYear = parseInt(document.querySelector("#year").value);
    const form = document.querySelector(".form");
    const toDayDate = new Date();
    const currentYear = toDayDate.getFullYear();
    const result = currentYear - birthYear;

    document.querySelector("p").innerText = result;
}