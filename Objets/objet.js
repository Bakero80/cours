// Definition de l'objet Person via un constructeur
function Person(nick, age, sex, parent, work, friends) {
    this.nick = nick;
    this.age = age;
    this.sex = sex;
    this.parent = parent;
    this.work = work;
    this.friends = friends;

}

Person.prototype.addFriend = function(nick, age, sex, parent, work, friends) {
    this.friends.push(new Person(nick, age, sex, parent, work, friends));
}

// On crée des variables qui vont contenir des instances de l'objet Person :
var rachid = new Person('Rachid', 23, 'm', 'aîné', 'JavaScripteur', []);
var sonia = new Person('Sonia', 19, 'f', 'soeur', 'Sous-officier', []);

rachid.addFriend('Johann', 19, 'm', 'aîné', 'JavaScripteur aussi', []);
sonia.addFriend('Samir', 35, 'm', 'aîné', 'amoureux', ['biba']);
