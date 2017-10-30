function Person(firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;
}

Person.prototype.greet = function(){
    console.log('Hello, ' + this.firstName + ' ' + this.lastName);
}

var john = new Person('John', 'Doe');
john.greet();

var jane = new Person('Jane', 'Doe');
jane.greet();

// V8 Javascript engine functionality that allows you to see what the actual prototype object is
console.log(john.__proto__);
console.log(jane.__proto__);

//Check if both objects are using the same object constructor
console.log(john.__proto__ === jane.__proto__);