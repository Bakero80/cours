function Vehicle(licensePlate, tankSize) {
    this.engineStarted = false; // Notre véhicule est-il démarré ?
    this.licensePlate = licensePlate; // La plaque d'immatriculation de notre véhicule.
    this.tankSize = tankSize; // La taille de notre réservoir en litres.
}

// Permet de démarrer notre véhicule.
Vehicle.prototype.start = function() {
    this.engineStarted = true;
};

// Permet d'arrêter notre véhicule.
Vehicle.prototype.stop = function() {
    this.engineStarted = false;
};

function Car(licensePlate, tankSize, trunkSize) {
    Vehicle.call(this, licensePlate, tankSize);
    this.trunkOpened = false; // Notre coffre est-il ouvert ?
    this.trunkSize = trunkSize; // La taille de notre coffre en mètres cube.
}
Car.prototype = Object.create(Vehicle.prototype, {
    constructor: {
        value: Car,
        enumerable: false,
        writable: true,
        configurable: true
    }
});

Car.prototype.openTrunk = function() {
    this.trunkOpened = true;
};

Car.prototype.closeTrunk = function() {
    this.trunkOpened = false;
};

var myCar = new Car('AA-555-AA', 70, 2.5);

function Truck(licensePlate, tankSize, trailersNumber) {
    Vehicle.call(this, licensePlate, tankSize);

    this.trailersNumber = trailersNumber; // Le nombre de remorques attachées à notre camion.
}

Truck.prototype = Object.create(Vehicle.prototype, {
    constructor: {
        value: Truck,
        enumerable: false,
        writable: true,
        configurable: true
    }
});

Truck.prototype.addTrailer = function() {
    this.trailersNumber++;
};

Truck.prototype.removeTrailer = function() {
    this.trailersNumber--;
};

var myTruck = new Truck('BB-980-BB',150, 5);
addTrailer();
