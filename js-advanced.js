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