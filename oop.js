//These are literals
//function sayHello(person1) {
//console.log(`Hello! my name is ${person1}`);
//}
//sayHello('James');

//function sayHello(person2) {
//console.log(`Hello! my name is ${person2}`);
//}
//sayHello('Chad');

//function sayHello(person3) {
//console.log(`Hello! my name is ${person3}`);
//}
//sayHello('Chan');

//function sayHello(person4) {
//  console.log(`Hello! my name is ${person4}`);
//}
//sayHello('Cynthia');

//function sayHello(person5) {
//console.log(`Hello! my name is ${person5}`);
//}
//sayHello('Greg');

//These are Pseudo Classes

//function Person(name, city, age) {
//this.age = age
//this.name = name
//this.city = city
//}

//Person.prototype.sayHello = function() {
//alert('Hey! My name is' + this.name + 'I am' + this.age + 'years old and live in' + this.city + 'and its amazing')
//}
//Person.prototype.sayHello = function() {
//alert('Hey! My name is' + this.name + 'I am' + this.age + 'years old and live in' + this.city + 'and its amazing')
//}

//ES6 Syntax
//class Person {
//constructor(name, city, age) {
//this.age = age
//this.name = name
//this.city = city
//}
//sayHello() {
//alert(`Hey!My name is ${this.name} I am ${this.age} years old and live in ${this.city} and its amazing`);
//}

//}

//let p1 = new Person('James ', 'Birmingham', 42);
//let p2 = new Person('Chad ', 'Atlanta', 28);
//let p3 = new Person('Chan ', 'Texas', 26);
//let p4 = new Person('Cynthia ', 'Chicago', 34);
//let p5 = new Person('Greg ', 'Florida', 45);


//p1.sayHello();
//p2.sayHello();
//p3.sayHello();
//p4.sayHello();
//p5.sayHello();

//Inheritance section

class Vehicle {
    constructor(make, model, year) {
        this.make = make
        this.model = model
        this.year = year
    }
}