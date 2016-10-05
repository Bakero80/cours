var titresElements = document.getElementsByTagName("h2");
console.log(titresElements[2]);

var merveillesElements = document.getElementsByClassName('merveilles');
for (var ii = 0; ii < merveillesElements.length; ii++ ){
  console.log(merveillesElements[ii]);
}

console.log(document.getElementById("antiques"));

console.log(document.querySelectorAll(".existe").length);

console.log(document.querySelectorAll("#antiques > .existe").length);

console.log(document.querySelector("h2"));

console.log(document.getElementById("contenu").textContent);

console.log(document.querySelector("a").href);

if (document.querySelector("a").hasAttribute("href")) {
    console.log("Le premier lien possède l'attribut href");
} else {
    console.log("Le premier lien ne possède pas l'attribut href");
}

if (document.getElementById("antiques").classList.contains("merveille")) {
    console.log("L'élément identifié par antiques possède la classe merveille");
} else {
    console.log("L'élément identifié par antiques ne possède pas la classe merveille");
}
