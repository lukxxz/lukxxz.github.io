const svar_div = document.getElementById("svar_div")
const antal_vinster = document.getElementById("input_antal_vinster")
const vinster = [
    "TREN",
    "Testo",
    "protein powder",
    "Pwo",
    "100 dosor snus",
    "moppe",
    "atom bomb",
    "en käft smäll från mor din",
    "bältad av farsan",
    "en fight med connor mc gregor",
    "blind för resten av livet",
    "odödlig",
    "mcdonalds",
    "INSTA KILL!!",
    "FORRE BATTLE PASS",
    "csgo headshot scripts",
    "free yt prem",
    "snapchat prem 10 years",

]

function slumpclick() {

    //console.log(`click ${antal_vinster.value} `) 
    let vinst = `<h3>Dina vinster </h3>`
    let antalv = antal_vinster.value
    let int_antalv = parseInt(antalv)

    for (i = 0; i < int_antalv; i++) {

        let slumptal = Math.floor(Math.random() * 17)

        let t_vinst = vinster[slumptal]

        vinst += `<p> ${t_vinst} </p>`
    }

    svar_div.innerHTML = vinst


}

