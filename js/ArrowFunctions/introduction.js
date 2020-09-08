
// Arrow functions allow us to write shorter function syntax:



hello_before = function() {
    return "Hello World";
};
console.log(hello_before());


hello_after = () => {
    return "Hello New World";
};
console.log(hello_after());



// It get's shorter! You can remove the brackets and return statement because
// Arrow Functions Return Value by Default:

hello_short = () => "Hello New World";
console.log(hello_short());

// Note: This works only if the function has only one statement.


hello_with_var = user => "Hello " + user;
console.log(hello_with_var("Jimmy"));



// With arrow functions there are no binding of *this*.
//the this keyword always represents the object that defined the arrow function.
