/**
 *  Fichier principal javascript
 */

// On utilise le mode strict par défaut pour ajouter de la robustesse à nos variables et à la syntaxe.
// DÉTAILS : https://www.w3schools.com/js/js_strict.asp
"use strict";
/* #################################################################################################*/



function clickBouton(e)
{   
    const cadran = document.getElementById("cadran");
    let bouton = e.target.id;
    switch (bouton){
        case "=":
        cadran.innerText = eval(cadran.innerText);
            break;
        case "AC":
            cadran.innerText = "";
            break;
        case "neg":
        cadran.innerText = "-" + cadran.innerText;
            break;            
        case "pourcent":
            cadran.innerText = eval(cadran.innerText)/100; 
            break;
        default:
            
            cadran.innerText = cadran.innerText + bouton;
              
    }   
    
        
    console.log("Le bouton " + bouton + " a été cliqué");

    return bouton;
}


function egalClick()
{
    //Compile l'équation qui a été écrite

    let cadran = document.getElementById("cadran");

    let equation = cadran.getElementsByTagName('span');
    let concatenation="";
    for(const entree of equation)
    {
        concatenation  =concatenation+entree.innerText;
        
    }
    console.log(eval(concatenation));
    cadran.innerText = eval(concatenation);
}

function acClick()
{

}


/**
 * Cette fonction est rattachée à l'événement "Load". C'est la première fonction qui va s'executer lorsque la page sera entièrement chargée.
 */
 function initialisation() {
   
    

    // Appel de la fonction utilitaire ajouterALaPage lorsqu'on veut ajouter un paragraphe à la suite du <body>
    let boutons = document.getElementsByTagName("button");
    for(const leBouton of boutons)
    leBouton.addEventListener("click",clickBouton,false); 
}

/**
 * Cet événement est responsable de surveiller lorsque la page web est complètement chargée et de déclancher
 * la fonction initialisation() dès que la page web est chargée. Cet événement permet de s'assurer que tout le DOM est disponible avant
 * de commencer à utiliser javascript
 * DOM : https://www.w3schools.com/js/js_htmldom.asp
 */
addEventListener("load", initialisation, false);