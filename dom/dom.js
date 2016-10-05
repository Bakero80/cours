var h = document.head;
console.log(h);

var b = document.body;
console.log(b);

if (document.body.nodeType === document.ELEMENT_NODE)
{
  console.log("Body est un noeud élément");
}
else {
  console.log("Body n'est pas un noeud élément");
}

console.log(document.body.childNodes[2]);

for(var ii = 0; ii < document.body.childNodes.length; ii++){
  console.log(document.body.childNodes[ii]);
}
var h1 = document.body.childNodes[1];
console.log(h1.parentNode);

console.log(document.parentNode);
