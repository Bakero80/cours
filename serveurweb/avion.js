ajaxGet("http://localhost/my-site/javascript-web-srv/data/films.json", function (reponse) {
    // Transforme la réponse en tableau d'objets JSON
    var films = JSON.parse(reponse);
    // Affiche le titre de chaque film
    films.forEach(function (film) {
        console.log(film.titre);
    })
});
