let nom=document.getElementById("nom")
let send=document.getElementById("submet")
let accepter=document.getElementById("accepter")
let listRadiox=document.querySelectorAll('input[name="couleur"]')
/*send.addEventListener( "click", ()=>{
    sowName=nom.value;
    console.log(sowName)
    nom.value=""
})*/
console.log(nom.value)
nom.addEventListener( "change", ()=>{
    sowName=nom.value;
    console.log(sowName)
    nom.value=""
})
//console.log(nom.value)
accepterCheck=accepter.checked;
//console.log(accepterCheck);
console.log(listRadiox);
let couleur="";
/*
* listRadiox.forEach(radio => {
    radio.addEventListener("change", (event) => {
        console.log(event.target.value);
    });
});*/
for(let i=0 ;i<listRadiox.length ; i++){
    listRadiox[i].addEventListener("change", (event)=>{
       console.log(event.target.value)
    });
}
/*for (let i = 0; i< listRadiox.length; i++) {
    console.log(listRadiox[i].checked)
    if (listRadiox[i].checked) {
        couleur = listRadiox[i].value
       // console.log(listRadiox[i])
    }
}*/

console.log(couleur)