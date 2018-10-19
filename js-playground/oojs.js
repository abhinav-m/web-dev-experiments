/*  Making a constructor function in javascript */
function Person(name, age, profession) {
  this.name = name; // Assigning various properties
  this.age = age;
  this.profession = profession;
  this.speak = function() {
    console.log('Hello, how are you');
  };
}

//Adding a property to the prototype chain
Person.prototype.description = function() {
  console.log(
    `Hello my name is ${this.name},
     I am ${this.age} years old. I am a ${this.profession}`
  );
};

let abhinav = new Person('Abhinav', '25', 'programmer');
//Directly bound to "this" while instantiating person constructor
abhinav.speak();
abhinav.description();

//Inheriting from person in javascript

function Male(name, age, profession, gender) {
  Person.call(this, name, age, profession);
  this.gender = 'Male';
}

Male.prototype = Object.create(Person.prototype);
Male.prototype.greeting = function() {
  console.log('Namaste');
};

let abhinavInherited = new Male('Abhinav', 25, 'programmer');
abhinavInherited.greeting(); // In prototype chain of derived function.
abhinavInherited.description(); // Description inherited from base function.
abhinavInherited.speak(); // Speak function inherited from base function.
