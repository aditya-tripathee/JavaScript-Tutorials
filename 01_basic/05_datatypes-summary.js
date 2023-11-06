// Primitive 
// 7 types : String , Number , Boolean , Null , Undefined , Symbol , BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail= undefined

const id = Symbol('123')
const anotherId = Symbol("12345")

console.log(id === anotherId);

// const bigNumber = 234676468598765432n





// Reference (Non- Primitive)
// Array , Objects , Functions 

const heros = ["shaktiman" , "karn" , "arjun"]
let myObj = {
    name: "aditya",
    age: 22,

}

const myFunction = function(){
    console.log("Hello World");
}

console.log(typeof bigNumber);
console.log(typeof outsideTemp);
console.log( typeof isLoggedIn );
console.log(typeof myFunction);
console.log(typeof anotherId);


//*************************************//

// Stack(Primitive) , Heap(Non - Primitive) 

let myYoutubeName = "aditya tripathii"
let anotherName = myYoutubeName
anotherName = "adiixyz"

console.log(myYoutubeName);
console.log(anotherName);


let userOne = {
    email: "aditya@gmail.com",
    upi: "aditya@paytm"
}

let userTwo = userOne

userTwo.email ="adii@gmail.com"
console.log(userOne.email);
console.log(userTwo.email);










