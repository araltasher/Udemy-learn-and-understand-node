var fs = require('fs');

var greet = fs.readFileSync(__dirname + '/greet.txt', 'utf8');
console.log(greet);

var greet2 = fs.readFile(__dirname + '/greet.txt', 'utf8', function (err, data) {
    console.log(data);
});

//  Done will print before the second greet is printed
//  Because greet2 is asynchronous
console.log("Done!");