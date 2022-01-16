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




 