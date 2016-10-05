
var req = new XMLHttpRequest();
// La requête est asynchrone lorsque le 3ème paramètre vaut true ou est absent
req.open("GET", "http://localhost/my-site/javascript-web-srv/data/films.json");
// Gestion de l'événement indiquant la fin de la requête
req.addEventListener("load", function () {
    // Affiche la réponse reçue pour la requête
    console.log(req.responseText);
    req.forEach(function (film) {
            console.log(film.titre);
        })
});


req.send(null);
