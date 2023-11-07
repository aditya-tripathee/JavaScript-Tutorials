//Dates 

let myDate = new Date ()
console.log(myDate);

console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleString());
console.log(typeof myDate);


let myCreatedDate = new Date(2023, 0, 23)
console.log(myCreatedDate);
console.log(myCreatedDate.toString());
console.log(myCreatedDate.getFullYear());


let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
console.log(Math.floor(Date.now()/1000));


let newDate = new Date()
console.log(newDate);
console.log(newDate.getFullYear());
console.log(newDate.getDay());


// `${newDate.getDay()} and the time `

newDate.toLocaleString ('default',{
    weekday: "long"
})




