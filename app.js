function berechneBMI(){
    let gewicht = document.querySelector(".gewicht").value;
    let groesse = document.querySelector(".groesse").value;
    let alter = document.querySelector(".alter").value;

    const ergebnis = (gewicht / groesse ** 2).toFixed(2);
    //document.getElementById("show").innerHTML = `Ihr BMI: ${ergebnis}`
    document.getElementById("show").className = "screen";
    
    if (alter >= 18 && alter <= 34 && ergebnis <= 20) {
        document.getElementById(
          "show"
        ).innerHTML = `Dein BMI : ${ergebnis} Untergewicht`;
      } else if (alter >= 18 && alter <= 34 && ergebnis > 20 && ergebnis <= 26) {
        document.getElementById(
          "show"
        ).innerHTML = `Dein BMI : ${ergebnis} Normalgewicht`;
      } else if (alter >= 18 && alter <= 34 && ergebnis > 26 && ergebnis <= 31) {
        document.getElementById(
          "show"
        ).innerHTML = `Dein BMI : ${ergebnis} Übergewicht`;
      } else if (alter >= 18 && alter <= 34 && ergebnis > 31) {
        document.getElementById(
          "show"
        ).innerHTML = `Dein BMI : ${ergebnis} Adipositas`;
      } else if (alter >= 35 && alter <= 54 && ergebnis <= 21) {
        document.getElementById(
          "show"
        ).innerHTML = `Dein BMI : ${ergebnis}  Untergewicht`;
      } else if (alter >= 35 && alter <= 54 && ergebnis > 21 && ergebnis <= 28) {
        document.getElementById(
          "show"
        ).innerHTML = `Dein BMI : ${ergebnis} Normalgewicht`;
      } else if (alter >= 35 && alter <= 54 && ergebnis > 28 && ergebnis <= 32) {
        document.getElementById(
          "show"
        ).innerHTML = `Dein BMI : ${ergebnis}  Übergewicht`;
      } else if (alter >= 35 && alter <= 54 && ergebnis > 32) {
        document.getElementById(
          "show"
        ).innerHTML = `Dein BMI : ${ergebnis} Adipositas`;
      } else if (alter >= 35 && alter <= 54 && ergebnis <= 21) {
        document.getElementById(
          "show"
        ).innerHTML = `Dein BMI : ${ergebnis} Untergewicht`;
      } else if (alter >= 35 && alter <= 54 && ergebnis > 21 && ergebnis <= 28) {
        document.getElementById(
          "show"
        ).innerHTML = `Dein BMI : ${ergebnis} Normalgewicht`;
      } else if (alter >= 35 && alter <= 54 && ergebnis > 28 && ergebnis <= 32) {
        document.getElementById(
          "show"
        ).innerHTML = `Dein BMI : ${ergebnis} Übergewicht`;
      } else if (alter >= 35 && alter <= 54 && ergebnis > 32) {
        document.getElementById(
          "show"
        ).innerHTML = `Dein BMI : ${ergebnis}  Adipositas`;
      } else if (alter >= 55 && ergebnis <= 23) {
        document.getElementById(
          "show"
        ).innerHTML = `Dein BMI : ${ergebnis}  Untergewicht`;
      } else if (alter >= 55 && ergebnis > 23 && ergebnis <= 30) {
        document.getElementById(
          "show"
        ).innerHTML = `Dein BMI : ${ergebnis}  Normalgewicht`;
      } else if (alter >= 55 && ergebnis > 30 && ergebnis <= 35) {
        document.getElementById(
          "show"
        ).innerHTML = `Dein BMI : ${ergebnis}  Übergewicht`;
      } else if (alter >= 55 && ergebnis > 35) {
        document.getElementById(
          "show"
        ).innerHTML = `Dein BMI : ${ergebnis} Adipositas`;
      } else {
        document.getElementById("show").innerHTML = "Opppsss...";
      }
}

function reloadPage(){
    //let gewicht = document.querySelector(".agirlik").value = '';
    //let groesse = document.querySelector(".uzunluk").value = '';
    //let alter = document.querySelector(".alter").value = '';
    //ergebnis.classList.add("hidden");
    //document.getElementById('show').style.display = 'none';

  window.location.reload()

}
 