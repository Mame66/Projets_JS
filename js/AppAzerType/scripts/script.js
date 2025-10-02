/*********************************************************************************
 *
 * Ce fichier contient toutes les fonctions nécessaires au fonctionnement du jeu.
 *
 *********************************************************************************/
/**
 * Cette fonction affiche dans la console le score de l'utilisateur
 * @param {number} score : le score de l'utilisateur
 * @param {number} i : le nombre de mots/phrase proposés à l'utilisateur
 * @param {number} lose : le nombre de mots perdue par l'utilisateur
 */
                /********** Fontion pour afficher les resultat ********/
function afficherResultat(score,i,){
    let zoneScore =document.querySelector(".zoneScore span") // cibler la zone de score
   // console.log(zoneScore)
    let zoneScoreResult=`${score}/${i}`      // declarer un evairable qui contient le resultat
    zoneScore.innerText=zoneScoreResult             //changer la valeur sur le HTML
    //console.log(zoneScoreResult)                    // regarder si on a bien le resultat attendu
}

/**function**/
// Fonction pour détecter le choix
function choisirTableau() {
    const choix = document.querySelector('input[name="optionSource"]:checked').value; //on selectionne tout ls input don input name=optionSource
    // on met une condition pour savoir le choix de l'utilisateur pour afficher la liste de proposition phrases/mots
    if (choix === "1") {
        listeMotss = listeMots
        afficherProposition(listeMots[0])
    } else {
        listeMotss = listePhrases
        afficherProposition(listePhrases[0])
    }
    //console.log(listeMotss)
}
// Quand l’utilisateur change le choix
const radios = document.querySelectorAll('input[name="optionSource"]');

for (let i = 0; i < radios.length; i++) {
    radios[i].addEventListener("change", choisirTableau);
}
// Exécuter au départ
choisirTableau();
// Fonction pour afficher sur la zone de proposition les phrases/mots a ecrire par l'utilisateur
function afficherProposition(motProposition){
    let  zoneProposition=document.querySelector(".zoneProposition")
    zoneProposition.innerText=motProposition
}
// fontion pour lancer le jeux
function lancerJeu(){
    /**inizialisation**/
    let score= 0
    let  lose=0
    let resultat
    let nbMotsPropose=0
    let btnValiderMot=document.getElementById("btnValiderMot")
    let inputEcriture=document.getElementById("inputEcriture")
    let zoneProposition=document.querySelector(".zoneProposition")
    let listInputRadio=document.querySelectorAll("input")
    let i=0
    /**AddEvent**/

    //afficherProposition(listeMotss[i])
    //Even qui gere la validation des mots
    btnValiderMot.addEventListener('click' ,() =>{
        if(inputEcriture.value===listeMotss[i]){            // quand la valeur proposer= celui de l'utilisateur on augmente le score
            score++
        }
        i++                                                 //on increment la valeur de i pour afficher le mot suivent dans le tableau
        afficherResultat(score,i)
        afficherProposition(listeMotss[i])
        //console.log(inputEcriture.value)
        inputEcriture.value=''                                // remetre le champ a vide
        if(listeMotss[i]===undefined){                          // si la liste des mot es fini afficue le jeux est fini
            afficherProposition('le jeux est fini')
            btnValiderMot.disabled=true                         //on desactive le btn clique
        }
    })
    afficherResultat(score,i)
}
