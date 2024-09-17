function alterDifferenz() {
    const alter1 = parseInt(document.querySelector("#alter-1").value);
    const alter2 = parseInt(document.querySelector("#alter-2").value);
    const antwort = document.querySelector("p");

    const ergebnis = alter1 - alter2;

    antwort.innerText = `Die Differenz ist: ${ergebnis}`;
    
}