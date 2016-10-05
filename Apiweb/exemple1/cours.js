var articlesElt = document.getElementById("articles");

ajaxGet("https://oc-jswebsrv.herokuapp.com/api/articles", function (reponse) {
      var articles = JSON.parse(reponse);
      articles.forEach(function (article) {
        // Ajout du titre et du contenu de chaque article
        var titreElt = document.createElement("h2");
        titreElt.textContent = article.titre;
        var contenuElt = document.createElement("p");
        contenuElt.textContent = article.contenu;
        articlesElt.appendChild(titreElt);
        articlesElt.appendChild(contenuElt);
    });
});
