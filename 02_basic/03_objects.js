
// singleton

// object literals

// Object.create

const mySym = Symbol("key1")


const JsUser = {
    name: "Aditya",
    "full name": "Aditya Tripathi",
    [mySym]: "myKey1",
    age: 20,
    location: "Gorakhpur",
    email: "adityatripathiee@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday" ,  "Saturday"]
}

console.log(JsUser.age);
console.log(JsUser.email);
console.log(JsUser.lastLoginDays);
console.log(JsUser["full name"]);
console.log(JsUser[mySym]);



JsUser.email ="adii@gmail.comm"
// Object.freeze(JsUser)
JsUser.email = "adityatripathee@chatgpt.com"
console.log(JsUser);



JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greeting2 = function(){
    console.log((`Hello JS user, ${this.name}`));
}

console.log(JsUser.greeting());
console.log(JsUser.greeting2());





