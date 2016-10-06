var series = document.getElementById("series");

ajaxGet("http://api.tvmaze.com/shows/82", function(reponse){
var seriesTele = JSON.parse(reponse);
var serieName = document.createElement('h3');
serieName.textContent = seriesTele.name;
series.appendChild(serieName);
var serieResume = document.createElement('p');
serieResume.textContent = seriesTele.summary;
series.appendChild(serieResume);
var serieGenre = document.createElement('p');
serieGenre.textContent = seriesTele.genres;
series.appendChild(serieGenre);

})
