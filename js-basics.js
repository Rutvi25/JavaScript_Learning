"use strict";

var msg="Hello Javascript-basic"
alert(msg)
console.log(msg)

//Variable and types
var resultDiv = document.getElementById("results");
resultDiv.innerHTML = "This is from JS"
console.log("msg is" + typeof(msg));
console.log("resultDiv is" + typeof(resultDiv));
var none;
console.log("none is" + typeof(none));
var anum=10
console.log(String(anum))
console.log("anum is" + typeof(anum))
var truefalse = true
console.log("truefalse is" + typeof(truefalse));
//type conversion
let y = "John";
let a = + y;
console.log(y + " " + typeof y)
console.log(a + " " + typeof a)

// msgs ="shouldn't work"

// Conditionals 
if (none == undefined){
    console.log ("none is undefined")
}
if (anum=="10"){
    console.log("10 is 10")
}
if (anum!="10"){
    console.log ("10 is not 10")
}
    // for exact comparision 
if (anum===10){
    console.log("10 is 10")
}
if (anum!=="10"){
    console.log ("10 is not 10")
}

// Functions 
function showmsg(msg, more){
    if (more){
        console.log("showmsg "+msg+more);
    } else{
        console.log("showmsg "+msg)
    }
}
showmsg("some info ");
showmsg("more info ", "and even more");

// function as a variable
var show = function(msg){
    console.log(msg);
}
show("Some message");
function showthen (msg, callback){
    show(msg);
    callback();
}
showthen("showthen called", function (){
    console.log("callback called");
})

// scopes 
var inGlobal = true;
function test(){
    console.log("test():"+inGlobal)
    var somemsg="Some Message";
    console.log("test(): "+somemsg)
    // Closure 
    showthen("with closure", function(){
        show("test with closure(): "+somemsg);
    });
}
test();

// Objects & Arrays
var result = {
    name: "abc",
    language: "JavaScript",
    score: 4.5,
    showLog: function(){},
    owner:{
        login:"abc",
        id:123
    }    
};
result.phoneNumber="1234567890"
console.log(result.name);
console.log(result.phoneNumber);
console.log(result.owner.id)
var array = [{
    name: "abc",
    language: "javascript",
    score: 4.5,
    showLog: function(){},
    owner:{
        login:"abc",
        id:123
    }
}, {
    name: "pqr",
    language: "javascript",
    score: 3.5,
    showLog: function(){},
    owner:{
        login:"pqr",
        id:123
    },
}];

console.log(array.length);
console.log(array[0]);

// Sorting the array
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.sort();
fruits.reverse();
document.getElementById("array_demo").innerHTML = fruits;

//Numerical_Sort
const cars = [
    {type:"Volvo", year:2016},
    {type:"Saab", year:2001},
    {type:"BMW", year:2010}
];
cars.sort(function(a, b){return a.year - b.year});
displayCars();
function displayCars() {
    document.getElementById("numerical_sort").innerHTML =
    cars[0].type + " " + cars[0].year + "<br>" +
    cars[1].type + " " + cars[1].year + "<br>" +
    cars[2].type + " " + cars[2].year;
}

// array map()
const original_array = [1, 2, 3, 4, 5];
const new_array = original_array.map(multiply);
console.log(original_array)
console.log(new_array)
function multiply(value, index, array) {
  return value * 2;
}
const over3 = original_array.filter(above3);
function above3(value, index, array){
    return value > 3;
}
console.log(over3)

// Looping 
for (var x=0; x<=array.length; x++){
    var array = array[x];
    if (array.score<4) break;
    console.log(array.name);
} 

// for in loop
const numbers = [1, 2, 3, 4, 5];
let num = "";
for (let x in numbers) {
  num += numbers[x] + "<br>"; 
}
document.getElementById("for_in").innerHTML = num;

//while loop
let series="";
let i=0;
while (i < 5) {
    series += i + "<br>";
    i++;
}
document.getElementById("series").innerHTML = series;

// Switch
var day;
switch (new Date().getDay()) {
    case 0:
        day = "It's Sunday";
      break;
    case 6:
        day = "It's Saturday";
      break;
    default:
        day = "It's not the Weekend";
}
console.log(day)

//sets
const letters = new Set();
console.log(letters.size)
letters.add("a");
letters.add("b");
letters.add("c");
console.log(letters.size)
letters.delete("c");
console.log(letters.size)
console.log(letters)

//Regular Expression
let text = "Hey! I'm learning JavaScript"
const pattern = /learn/;
console.log(text.search(/l/i));
console.log(pattern.test(text));

//error handling
function error_handling() {
    const message = document.getElementById("display");
    message.innerHTML = "";
    let p = document.getElementById("input").value;
    try { 
        if(p == "")  throw "enter number";
        if(isNaN(p)) throw "is not a number";
        p = Number(p);
        if(p > 100)   throw "number is >100";
        if(p < 50)  throw "number is <50";
    }
    catch(err) {
        message.innerHTML = err;
    }
    finally {
        document.getElementById("input").value = "";
    }
}

// Arrow Functions
let arrow=(a,b)=>a+b;
console.log(arrow(100,200))
let hello = () => "Hello World";
console.log(hello())