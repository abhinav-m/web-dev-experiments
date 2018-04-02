class Vehicle {
  constructor(type, model) {
    this.type = type;
    this.model = model;
  }

  drive() {
    console.log(`${this.type} vrooms`);
  }
}

let bugati = new Vehicle('car', 'bugati');
//Has only two properties available to the instance,type and model.
console.log(bugati);
//drive property is NOT bound directly to instance , but to the prototype.
console.log(Object.getPrototypeOf(Vehicle));
bugati.drive();

class Truck extends Vehicle {
  constructor(...args) {
    super(...args);
  }
}

let truck = new Truck('Truck', 'Ford');
//Instance is created through super.
console.log(truck);

//Looks up through the prototype chain for this property.
console.log(Object.getPrototypeOf(Truck));

truck.drive();
