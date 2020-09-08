var txt = "I can eat bananas all day";
var x = txt.slice(10,17);
console.log(x);


var txt = "Hello World";
txt = txt.replace("Hello", "Welcome")
console.log(txt);

console.log(txt.toUpperCase());

var cars = ["Volvo", "Jeep", "Mercedes"];
cars[0] = "Ford";
console.debug(cars);

var fruits = ["Apple", "Orange", "Banana"];
fruits.pop();

fruits.push("Kiwi");
console.debug(fruits);

fruits = ["Apple", "Orange", "Banana", "Kiwi"];
fruits.splice(1,2);
console.debug(fruits);

