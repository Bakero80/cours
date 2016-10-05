function Gold(name,age,signe,attack1,attack2,vitesse) {
  this.name = name,
  this.age = age,
  this.signe = signe,
  this.attack1 = attack1,
  this.attack2 = attack2,
  this.vitesse = vitesse
};

var saga = new Gold('Saga',20,'Gémeau','Galaxian explosion', 'Genmaroken', 'Lumière');
console.log(saga);

console.log(saga.name+ " est le chevalier d'or du signe du " + saga.signe +
", ses attaques principales sont " +saga.attack1+ " et "+saga.attack2+ ", il atteint la vitesse de la "+saga.vitesse+".");

var camus = new Gold('Camus',18,'Verseau','Aurora Execution','Diamond dust', 'Lumière');
console.log(camus);
console.log(camus.name+ " est le chevalier d'or du signe du " + camus.signe +
", ses attaques principales sont " +camus.attack1+ " et "+camus.attack2+ ", il atteint la vitesse de la "+camus.vitesse+".");


var shaka = new Gold('Shaka',18,'Vierge','Tenma Kofuku', 'Tenbu Horin', 'Lumière');
console.log(shaka);
console.log(shaka.name+ " est le chevalier d'or du signe de la " + shaka.signe +
", ses attaques principales sont " +shaka.attack1+ " et "+shaka.attack2+ ", il atteint la vitesse de la "+shaka.vitesse+".");

function Gw(name,age,signe,attack1,attack2,vitesse,force){
  Gold.call(this, name,age,signe,attack1,attack2,vitesse);
  this.force = force;
}

Gw.prototype = Object.create(Gold.prototype)
var syd = new Gw('Syd',18,'zeta','Viking Tiger Claw','Blue Impulse','Lumière','Force égale aux golds');

function Marina(name,age,signe,attack1,attack2,vitesse, force, bemol){
  Gold.call(this, name,age,signe,attack1,attack2,vitesse, force, bemol);
  this.force = force;
  this.bemol = bemol;
}
Marina.prototype = Object.create(Gold.prototype)
var sorrento = new Marina('Sorrento',19,'sirène','Dead end Symfony','Dead End Climax','Lumière','Force égale aux golds','quid sans sa flûte ?');
