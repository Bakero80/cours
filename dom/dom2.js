function afficherEnfant(noeud, indice) {
    if (noeud.nodeType === document.ELEMENT_NODE) {
        if ((indice >= 0) && (indice < noeud.childNodes.length)) {
            console.log(noeud.childNodes[indice]);
        } else {
            console.error("Indice incorrect");
        }
    } else {
        console.error("Type de noeud incorrect");
    }
}

afficherEnfant(document.body, 3);
