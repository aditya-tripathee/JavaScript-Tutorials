
// const tinderUser = new Object()
const tinderUser = {}

 tinderUser.id = "123abc"
tinderUser.name = "Aditya"
tinderUser.isLoggedIn = false

console.log(tinderUser);



const regularUser = {
    email: "adii@gmail.com",
    fullname: {
        userfullname:{
            firstname: "aditya",
            lastname: "tripathi"
        }
    }
}
console.log(regularUser.fullname.userfullname.lastname);


const obj1 ={1:"a", 2: "b"}
const obj2 ={3:"a", 4: "b"}
const obj3 ={5:"ab",6: "bc"} 
const obj4 ={7: "qw" , 8: "xyz"}

// const obj3 ={obj1, obj2}
// const obj_final = Object.assign ({},obj1, obj2,obj3,obj4)

const obj_final = {...obj1,...obj2,...obj3,...obj4}
console.log(obj_final);



const user =[
{   
    id: 1 ,
    email:"adii@gmail.com"
},
{
    user: "adii",
    email:"qwe@gmail.com"
},
{
    user:"vbnn",
    id: "08788"
}
]


user[1].email

console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'));



const course = {
    course: "Js in hindi",
    price: "1000",
    courseInstructor: "aditya"
}

const{courseInstructor} =course

console.log(courseInstructor);



// {
//     "name": "aditya",
//     "coursename": "Js in hindi",
//     "price": "free"
// }









