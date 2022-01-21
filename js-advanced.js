// scope
var a = "hello world!";
function scope() {
  var a = "hello js!";
  function f(a) {
    a = "javascript";
    javascript = "advanced_js";
  }
  f();
}
console.log(scope());
console.log(a);
console.log(javascript);

// Eval keyword
var x = "eval";
function func(str) {
  eval(str);
  console.log(eval);
}
func("var eval=100");

//with keyword
var obj = {
  p: 20,
  q: 30,
};
obj.p = obj.p + obj.q;
with (obj) {
  p = p + q;
  r = 4;
}
console.log(obj.r);
console.log(r);

//IIFE pattern
var iife = "iife";
(function () {
  var iife = "iife_func";
  console.log(iife);
})();
console.log(iife);

//Hoisting: Recursion
console.log(m(1));
function m(hoist) {
  if (hoist > 20) return hoist;
  return n(hoist + 2);
}
function n(hoist) {
  return o(hoist) + 1;
}
function o(hoist) {
  return m(hoist * 2);
}

//This Keyword
var person = {
  firstname: "Rutvi",
  lastname: "Patel",
  name: function () {
    return this.firstname + " " + this.lastname;
  },
};
console.log(person.name());
let y = this; //here, this refers to a window object
console.log(y);

//Explicit Binding
function bind() {
  console.log(this.fruit);
}
var fruit = "apple";
var obj = { fruit: "mango" };
bind();
bind.call(obj);

// New keyword
function car(make, model) {
  this.make = make;
  this.model = model;
}
let car1 = new car("Tata", "Nano");
console.log(car1.model);

// Closure
function closure() {
  var clsr = "clsr";
  function closure1() {
    console.log(">>> clsr", clsr);
  }
  closure2(closure1);
  closure1();
}
function closure2(closure1) {
  closure1();
}
closure();
closure2(closure);

// closure: shared scope
function shared() {
  var a = 0;
  setTimeout(function () {
    console.log(a++);
  }, 300);
  setTimeout(function () {
    console.log(a++);
  }, 200);
  setTimeout(function () {
    console.log(a++);
  }, 1000);
}
shared();

//closure: nested scope
function nested() {
  var b = 0;
  setTimeout(function () {
    var c = 1;
    console.log(++b);

    setTimeout(function () {
      console.log(b + c);
    }, 200);
  }, 100);
}
nested();

//closure: loops
// it will only give one final value of i at the end.
for (var i = 1; i < 5; i++) {
  setTimeout(function () {
    console.log("i: " + i);
  }, i * 10);
}
// To get the different value of i for every iteration, IIFE pattern should be applied.
for (var j = 1; j <= 5; j++) {
  (function (j) {
    setTimeout(function () {
      console.log("j: " + j);
    }, j * 1000);
  })(j);
}
// instead of using IIFE pattern, the same thing can be achieved by using the block scope.
// it will re-bind the i for each iteration of the for-loop.
for (let i = 1; i < 5; i++) {
  setTimeout(function () {
    console.log("i: " + i);
  }, i * 1000);
}

// Module Pattern
//classic module pattern
var module = (function () {
  var o = { mdl: "mdl" };
  return {
    mdl: function () {
      console.log(">>> Module Pattern ", o.mdl);
    },
  };
})();
module.mdl();

//modified module pattern
var modified = (function () {
  var pubAPI = {
    modi: function () {
      pubAPI.pub();
    },
    pub: function () {
      console.log("public api");
    },
  };
  return pubAPI;
})();
modified.modi();

// Object oriented
//Prototype
function Person(first, last, age) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
}
Person.prototype.name = function () {
  return this.firstName + " " + this.lastName;
};
const self = new Person("Rutvi", "Patel", 21);
console.log(">>> Prototype", self.name());

// Prototype: Objects linked
function Proto(who) {
  this.me = who;
}
Proto.prototype.identity = function () {
  return "I'm " + this.me;
};
function Name(who) {
  Proto.call(this, who);
}
Name.prototype = Object.create(Proto.prototype);
Name.prototype.speak = function () {
  alert("Hello, " + this.identity());
};
var root = new Name("Root");
root.speak();

// Callbacks
function answer(ans) {
  console.log(">>>callback: " + ans);
}
function Calculate(num1, num2, callback) {
  let sum = num1 + num2;
  callback(sum);
}
Calculate(5, 5, answer);
// here, answer is a function and calculate is an argument.

//nested callbacks
function getData(d, cb) {
  setTimeout(function () {
    cb(d);
  }, 1000);
}
getData(10, function (no1) {
  var x = 1 + no1;
  getData(20, function (no2) {
    var y = 1 + no2;
    getData(">>>nested callback: " + (x + y), function (ans) {
      console.log(ans);
    });
  });
});
// generators
function* gen() {
  console.log(">>> Generator: Hello");
  yield null;
  /*yield is a two way message passing mechanism,
  we can pass messages into generator and 
  receive messages back from a generator.*/
  console.log(">>> Generator: world");
}
var it = gen();
it.next();
it.next();
//Promises
const promise = new Promise((resolve, reject) => {
  if (true) {
    resolve(">>> Promise: stuff worked");
  } else {
    reject(">>> Promise: Error, it broke")
  }
})
const promise2 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, ">>>Promise: Hello")
})
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 1000, ">>>Promise: World!")
})
const promise4 = new Promise((resolve, reject) => {
  setTimeout(resolve, 5000, ">>> Promise: It's the promise in JS!")
})
Promise.all([promise, promise2, promise3, promise4])
  .then(values => {
    console.log(values);
  })
promise
  .then(result => result + "i")
  .then(result2 => result2 + "?")
  .catch(() => console.log('error!'))
  .then(result3 => {
    console.log(result3 + "i");
  })

const urls = [
  "https://jsonplaceholder.typicode.com/users",
  "https://jsonplaceholder.typicode.com/posts",
  "https://jsonplaceholder.typicode.com/albums",
];
Promise.all(
  urls.map((url) => {
    return fetch(url).then((resp) => resp.json());
  })
).then((results) => {
  console.log("users", results[0]);
  console.log("posts", results[1]);
  console.log("albums", results[2]);
}).catch(() => console.log("error"));
//Async/Await
async function fetchUser(){
  const resp = await fetch("https://jsonplaceholder.typicode.com/users")
  const data = await resp.json();
  console.log(">>> o/p from async/await fetchUser()",data);
}
fetchUser();

const getDatas = async function(){
  try{
    const [ users, posts, albums ] = await Promise.all(urls.map(url =>
      fetch(url).then(resp => resp.json())
    ))
    console.log(">>> users from async/await", users)
    console.log(">>> posts from async/await", posts)
    console.log(">>> albums from async/await", albums)
  } catch (err){
    console.log(">>>error from async/await", err)
  }
}
getDatas();
//Object Spread Operator
const animals = {
  tiger: 20,
  lion: 15,
  monkey:10,
  bird:5
}
function objectSpread(p1, p2, p3){
  console.log(">>> Object spread operator")
  console.log(p1)
  console.log(p2)
  console.log(p3)
}
const { tiger, lion, ...rest} = animals;
objectSpread(tiger, lion, rest);

