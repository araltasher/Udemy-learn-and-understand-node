var person = {
    firstName: 'John',
    lastName: 'Doe',
    greet: function(){
        console.log('Hello, ' + this.firstName + ' ' + this.lastName);
    }
}

person.greet();

//  Alternative way to access object properties
console.log(person['firstName']);