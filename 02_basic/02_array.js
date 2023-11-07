
const marvel_heros = ["thor", "Ironman" , "superman"]
const indian_heros = ["shaktiman" , "krishh" , "MR.X"]

// marvel_heros.push(indian_heros)

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);


// const all_heros = marvel_heros.concat(indian_heros);
// console.log(all_heros);


const all_new_heros = [...marvel_heros, ...indian_heros]

// console.log(all_new_heros);

const another_array = [1,2,3, [4,5,6],7,[6,7,[4,5]]]

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);




console.log(Array.isArray("Aditya "));
console.log(Array.from("Aditya"));
console.log(Array.from({name:"aditya"}));     // interesting 
  

let score = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score , score2, score3));









