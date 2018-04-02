function Vehicle(type, model) {
  this.type = type;
  this.model = model;

  //This is the OWN property of the objects intantiated via this constructor functions.
  this.drive = function() {
    console.log(`${this.type} vrooms`);
  };
}

//bugati will have drive as ITS OWN property.
let bugati = new Vehicle('car', 'bugati');

//By running this statement, i add a property called vrooms
//to Vehicle.prototype, this property will be added to THE PROTOTYPE and
//Not to the instance of the object (this) itself.
Vehicle.prototype.vrooms = function() {
  console.log(`${this.model} vrooms`);
};

//Call an instance method of an object
bugati.drive();
//Look up through prototype chain and call the method.
bugati.vrooms();
//Will show it's own properties (type, drive and model)
console.log(bugati);
//Will show constructor function and vrooms
console.log(Object.getPrototypeOf(bugati));

//Calling the constructor function with context of this
function Truck(...args) {
  Vehicle.call(this, ...args);
}

//Assigning prototype to 'extend the Vehicle constructor function'
Truck.prototype = Object.create(Vehicle.prototype);

let truck = new Truck('truck', 'ford');
truck.vrooms();
truck.drive();
