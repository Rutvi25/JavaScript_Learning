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