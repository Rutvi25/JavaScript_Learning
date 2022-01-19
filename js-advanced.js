// scope
var a = "hello world!"
function scope(){
    var a = "hello js!";
    function f(a){
        a="javascript";
        javascript="advanced_js";
    }
    f();
}
console.log(scope());
console.log(a);
console.log(javascript);

// Eval keyword
var x="eval";
function func(str){
    eval(str);
    console.log(eval);
}
func("var eval=100")

//with keyword
var obj={
    p:20,
    q:30,
};
obj.p=obj.p+obj.q
with (obj){
    p=p+q;
    r=4;
}
console.log(obj.r);
console.log(r);

//IIFE pattern
var iife="iife";
(function(){
    var iife="iife_func";
    console.log(iife);
})();
console.log(iife);

//Hoisting: Recursion
console.log(m(1));
function m(hoist){
    if (hoist>20) return hoist;
    return n(hoist+2);
}
function n(hoist){
    return o(hoist)+1;
}
function o(hoist){
    return m(hoist*2);
}

//This Keyword
var person = {
    firstname: "Rutvi",
    lastname: "Patel",
    name: function(){
        return this.firstname+" "+this.lastname;
    }
}
console.log(person.name());
let y = this;  //here, this refers to a window object
console.log(y)

//Explicit Binding
function bind(){
    console.log(this.fruit);
}
var fruit = "apple";
var obj = {fruit:"mango"};
bind();
bind.call(obj);

// New keyword
function car(make, model){
    this.make = make;
    this.model = model;
}
let car1 = new car("Tata", "Nano");
console.log(car1.model);

// Closure
function closure(){  
    var clsr="clsr"
    function closure1(){
        console.log(">>> clsr", clsr)
    }
    closure2(closure1);
    closure1();
}
function closure2(closure1){
    closure1();
}
closure();
closure2(closure);

// closure: shared scope
function shared(){
    var a=0;
    setTimeout(function(){
        console.log(a++);
    },300);
    setTimeout(function(){
        console.log(a++)
    },200);
    setTimeout(function(){
        console.log(a++)
    },1000);
}
shared();

//closure: nested scope
function nested(){
    var b = 0;  
    setTimeout(function(){
        var c=1;
        console.log(++b);

        setTimeout(function(){
            console.log(b+c);
        },200);
    },100);
}
nested();

//closure: loops
   // it will only give one final value of i at the end.
for (var i=1; i<5; i++){
    setTimeout(function(){
        console.log("i: "+i);
    }, i*10);
}
    // To get the different value of i for every iteration, IIFE pattern should be applied.
for (var j=1; j<=5; j++){
    (function(j){setTimeout(function(){
        console.log("j: "+j);
    }, j*1000);})(j);
}
    // instead of using IIFE pattern, the same thing can be achieved by using the block scope.
    // it will re-bind the i for each iteration of the for-loop.
for (let i=1; i<5; i++){
    setTimeout(function(){
        console.log("i: "+i);
    },i*1000);
}

// Module Pattern
//classic module pattern
var module = (function(){
    var o = {mdl: "mdl"};

    return{
        mdl: function(){
            console.log(">>> Module Pattern ",o.mdl);
        }
    };
})();
module.mdl();

//modified module pattern
var modified = (function(){
    var pubAPI = {
        modi: function(){
            pubAPI.pub();
        },
        pub: function(){
            console.log("pub");
        }
    };
    return pubAPI;
})();
modified.modi();

