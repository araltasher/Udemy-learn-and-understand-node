// pass by value
function change(b) {
    b = 2;
}

var a = 1;
change(a);
// What happens in change function won't affect 'a'
console.log(a);

// pass by reference
function changeObj(d) {
    d.prop1 = function () { };
    d.prop2 = {};
}

var c = {};
c.prop1 = {};
changeObj(c);
// Whatever you do in changeObj will effect c, as they reference the same variable
console.log(c);