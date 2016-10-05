var pElement = document.querySelector("p");
pElement.style.color = "purple";
pElement.style.margin = "50px";

var paragraphesElts = document.getElementsByTagName("p");
console.log(paragraphesElts[0].style.color);
console.log(paragraphesElts[1].style.color);
console.log(paragraphesElts[2].style.color);

var stylePara = getComputedStyle(document.getElementById("para"));
console.log(stylePara.fontStyle);
console.log(stylePara.color);
