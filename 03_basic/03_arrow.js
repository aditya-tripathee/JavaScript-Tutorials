
const user = {
    username: "Aditya",
    price: 999,

    welcomeMessage : function(){
        console.log(`${this.username}, welcome to the website`);
        console.log(this);
    
    }
       

}

user.welcomeMessage()
user.username =  "adii"
user.welcomeMessage()

// console.log(this);


// function chai (){
//     let username = "aditya"
//     console.log(this.username);
// }
// chai()



const chai = () => {
 let username = "aditya"
 console.log(this.username);

}

// chai()

// const addTwo = (num1 , num2) => {
//     return num1 + num2
// }
// const addTwo = (num1, num2) => (num1 + num2)

const addTwo = (num1 , num2) => ({username: "aditya"})

console.log(addTwo(3,4));


