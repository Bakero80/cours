// Création d'un objet représentant un film
var film = {
    titre: "Les fantasmes d'une milliardaire",
    annee: "2001",
    realisateur: "Madison Monroe"
};
// Envoi de l'objet au serveur
ajaxPost("http://localhost/my-site/javascript-web-srv/post_json.php", film,
    function (reponse) {
        // Le film est affiché dans la console en cas de succès
        console.log("Le film " + JSON.stringify(film) + " a été envoyé au serveur");
    },
    true // Valeur du paramètre isJson
);
