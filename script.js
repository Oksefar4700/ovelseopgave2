// script.js

//Vi opretter array til at gemme opgaverne.
let opgaver = [];

//Vi opretter en funktion der lader os tilføje en opgave til vores array.
function tilføjOpgave() {
    //Her opretter vi en constant til at gemme dataen fra inputfeltet.
    const opgaveInput = document.getElementById("opgave");
    //Her får vi værdien fra inputfeltet og fjern evt. mellemrum.
    const opgaveTekst = opgaveInput.value.trim();

    // Vi tjekker om opgaveteksten er tom, hvis den er vises beskeden for brugeren og funktionen bliver afsluttet.
    if(opgaveTekst === "") {
        alert("Du skal indste din opgave")
        return;
    }

    // Vi tilføjer opgave teksten til vores array.
    opgaver.push(opgaveTekst);
    opgaveInput.value = "";
    // vi kalder funktionen til, at vise opgaverne.
    visOpgaver();

    // Her er vores funktion der viser opgaverne i en liste.
    function visOpgaver() {
        //Opretter constant til, at få fat i elementet med id'et opgaveliste fra vores HTML.
        const opgaveListe = document.getElementById("opgaveListe");
        opgaveListe.innerHTML = "";
    //Vi gennemgår hvert element i arrayet, og opretter en "li" for hvert element
        for(let i = 0; i < opgaver.length; i++) {
            const opgave = opgaver[i];
            const listOpgave = document.createElement("li");
            //Her tager vi opgaveteksten og placerer den inde i hvert li element.
            listOpgave.textContent = opgave;
            //Her tilføjer vi listen til listOpgave elementet.
            opgaveListe.appendChild(listOpgave);
        }
    }
}
