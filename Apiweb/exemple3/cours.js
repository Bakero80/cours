ajaxGet("https://api.wunderground.com/weather/api/2a39dcdf9fae358a/conditions/q/France/Nantes.json", function(reponse)
{
  var meteo = JSON.parse(reponse);
  // Récupération de certains résultats
  var temperature = meteo.current_observation.temp_c;
  var humidite = meteo.current_observation.relative_humidity;
  var imageUrl = meteo.current_observation.icon_url;
  // Affichage des résultats
  var conditionsElt = document.createElement("div");
  conditionsElt.textContent = "Il fait actuellement " + temperature +
      "°C et l'humidité est de " + humidite;
  var imageElt = document.createElement("img");
  imageElt.src = imageUrl;
  var meteoElt = document.getElementById("meteo");
  meteoElt.appendChild(conditionsElt);
  meteoElt.appendChild(imageElt);
});
