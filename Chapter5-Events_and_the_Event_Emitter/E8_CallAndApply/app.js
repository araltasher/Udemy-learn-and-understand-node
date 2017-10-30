var obj = {
    name: 'John Doe',
    greet: function () {
        console.log(`Hello ${this.name}`);
    }
}

obj.greet();

// you can overwrite 'this' variable with the .call() function
obj.greet.call({name: 'Jane Doe'});
obj.greet.apply({name: 'Jane Doe'});