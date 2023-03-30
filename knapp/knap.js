
let tal = 0


function plusClick(){
    tal = tal +1
    console.log("click")
    document.getElementById("svar").innerHTML = tal
    
    
}

const minusknapp = document.getElementById("minusclick")
minusknapp.addEventListener("click", minusclick)

function minusclick(){
    console.log("minnusclick")
    tal = tal -1
    document.getElementById ("svar").innerHTML = tal
}
