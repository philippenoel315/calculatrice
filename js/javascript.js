/**
 *  Fichier principal javascript
 */

// On utilise le mode strict par défaut pour ajouter de la robustesse à nos variables et à la syntaxe.
// DÉTAILS : https://www.w3schools.com/js/js_strict.asp
"use strict";
/* #################################################################################################*/






/**
 * Cette fonction est rattachée à l'événement "Load". C'est la première fonction qui va s'executer lorsque la page sera entièrement chargée.
 */
 function initialisation() {
   
    alert("La page web est chargée, les scripts peuvent commencer");

    // Appel de la fonction utilitaire ajouterALaPage lorsqu'on veut ajouter un paragraphe à la suite du <body>
    ajouterALaPage("Ceci est un paragraphe ajouté avec la fonction ajouterALaPage");  
}

/**
 * Cet événement est responsable de surveiller lorsque la page web est complètement chargée et de déclancher
 * la fonction initialisation() dès que la page web est chargée. Cet événement permet de s'assurer que tout le DOM est disponible avant
 * de commencer à utiliser javascript
 * DOM : https://www.w3schools.com/js/js_htmldom.asp
 */
addEventListener("load", initialisation, false);