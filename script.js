'use strict';

var number = 5;
var string = "Hello!";
var sym = Symbol();
var boolean = true;
null;
undefined;
var obj = {};

console.log(4/0);

let something = {
    name: "new",
    age: "infinity"
};
console.log(something.age);

let persone = {
    name: "John",
    age: 25,
    isMarried: false
};

//console.log(persone["name"]);

//let fruits = ["plum.png","apple.jpg","orange.bmp"];

//console.log(fruits[1]);

//alert("Hello world");

//let answer = confirm("Are you hungry?"); console.log(answer);
/*
let answer = +prompt("Are you hungry?", "Yes");

console.log(typeof(answer));

console.log("fruits" + "- object");
console.log(4 + " - object");*/

let incr = 10,
    decr = 10;

console.log(incr++);
console.log(decr--);

console.log(5%2);
console.log('2' === 2);

let isChecked = false,
    isClose = false;

console.log(isChecked || !isClose);
