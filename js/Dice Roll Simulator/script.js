//la declation des variables global
let roll=document.querySelector(".roll");
let btnRoll=document.getElementById("btnRoll");
//let rollAffiche=document.getElementById('roll-affiche');
let contentRollAffiche=document.querySelector('.content-rollAffiche');
let i=1; //le nobre d'affichages des rolls
let tableauRoll=["&#9856;","&#9857;","&#9858;","&#9859;","&#9860;","&#9861;"];// tableau qui contient les roll

//console.log(roll);
function creatRoll(){

};
function radom(){// fonction radom qui permet de choisi aleatoir
    let rolls=Math.round(Math.random() * (tableauRoll.length -1)); // incrementation de -1 pour eviter le underfund
    roll.innerHTML=tableauRoll[rolls]
    console.log(tableauRoll[rolls])
    //console.log(rolls)
    //console.log(roll.value)
    let rollAffiche=document.createElement("div")
    let h3=document.createElement("h3");
    let span=document.createElement('span');
    let div=document.createElement("div");
    contentRollAffiche.appendChild(rollAffiche)
    span.innerHTML=tableauRoll[rolls];
    h3.innerText=`Roll ${i} :`;
    rollAffiche.appendChild(h3);
    rollAffiche.appendChild(span);
    rollAffiche.classList.add("roll-affiche",)
    i++;
}
btnRoll.addEventListener('click', () => {
    roll.classList.add("roll_Click");

    // Supprime la classe après l’animation pour pouvoir la rejouer au prochain clic
    setTimeout(() => {
        roll.classList.remove("roll_Click");
    }, 2000); // durée = 2s comme l’animation
});
btnRoll.addEventListener('click' , radom)