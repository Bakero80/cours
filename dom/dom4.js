document.getElementById("langages").innerHTML += '<li id="c">C</li>';

document.querySelector("h1").textContent += " de programmation";

var titreElement = document.querySelector("h1");
titreElement.classList.remove("debut");
titreElement.classList.add("titre");
console.log(titreElement);

var pythonElement = document.createElement("li");
pythonElement.id = "python";
pythonElement.textContent = "Pyhton";
document.getElementById("langages").appendChild(pythonElement);
