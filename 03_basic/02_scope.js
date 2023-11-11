

// var c = 300
var a = 200
if (true) {
    let a = 10     // block scope
    let b = 20 
    var c = 30 
    console.log("INNER:", a);
    function addNum(){

    }
}



console.log(a);
// console.log(b);
// console.log(c);



function one(){
     const username = "aditya"


      function two (){
        const website = "youtube"
        console.log(username);
      } 
            // console.log(website);

             two()   

        }


one()



if (true) {
  const username ="aditya"  
  if (username=== "aditya") {
    const website = "youtube"    
     console.log(username + website);

} 
// console.log(website);
}

// console.log(username);



// ***********Interesting***********//

console.log(addOne(5));

function addOne(num){
    return num + 1

}


console.log(addTwo(5));
const addTwo = function(num){
    return num + 2
}


