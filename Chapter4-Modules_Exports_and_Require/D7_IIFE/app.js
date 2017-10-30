var firstname = 'Jane';

(function(lastname){
    var firstname = 'John';
    console.log(firstname + ' ' + lastname);

}('Doe'));

console.log(firstname);