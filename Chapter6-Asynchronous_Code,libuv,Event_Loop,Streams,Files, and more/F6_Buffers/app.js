var buff = new Buffer('Hello', 'utf8');

console.log(buff);
console.log(buff.toString());
console.log(buff.toJSON());
console.log(buff[2]);

buff.write('wo');
console.log(buff.toString());