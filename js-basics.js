"use strict";

var msg="Hello Javascript-basic"
alert(msg)

console.log(msg)

/*Variable and types*/

var resultDiv = document.getElementById("results");
resultDiv.innerHTML = "This is from JS"

console.log("msg is" + typeof(msg));
console.log("resultDiv is" + typeof(resultDiv));

var none;
console.log("none is" + typeof(none));

var anum=10
console.log("anum is" + typeof(anum))

var truefalse = true
console.log("truefalse is" + typeof(truefalse));

// msgs ="shouldn't work"

/* Conditionals */

if (none == undefined){
    console.log ("none is undefined")
}

if (anum=="10"){
    console.log("10 is 10")
}

if (anum!="10"){
    console.log ("10 is not 10")
}

    /*for exact comparision */

if (anum===10){
    console.log("10 is 10")
}
if (anum!=="10"){
    console.log ("10 is not 10")
}

/* Functions */

function showmsg(msg, more){
    if (more){
        console.log("showmsg "+msg+more);
    } else{
        console.log("showmsg "+msg)
    }
}

showmsg("some info ");
showmsg("more info ", "and even more");

/* function as a variable*/

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

/* scopes */
var inGlobal = true;
function test(){
    console.log("test():"+inGlobal)

    var somemsg="Some Message";
    console.log("test(): "+somemsg)

    /* Closure */
    showthen("with closure", function(){
        show("test with closure(): "+somemsg);
    });
}
test();

/* Objects & Arrays*/
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

/* Looping */
for (var x=0; x<=array.length; x++){
    var array = array[x];
    if (array.score<4) break;
    console.log(array.name);
} 