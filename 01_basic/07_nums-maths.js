const score = 400

const balance = new Number (100)
console.log(balance);


console.log(balance.toString().length);
console.log(balance.toFixed(2));


const otherNumber = 235.7665
console.log(otherNumber.toPrecision(4));



const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN'));


////////***************************////////


console.log(Math);

console.log(Math.abs(-4));
console.log(Math.abs(4));
console.log(Math.round(4.6));
console.log(Math.ceil(4.1));
console.log(Math.floor(3.2));

console.log(Math.min(4,6,1,44,98));
console.log(Math.max(66,98,90,43));

console.log(Math.random()*10);


const min = 19
const max = 20 
console.log(Math.floor(Math.random()* ( max - min + 1)) + min);




