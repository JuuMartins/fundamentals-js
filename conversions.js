// data type - booleans

//implicit conversion

const number = 456;
const text = "456";
const text1 = "456a"

console.log(number === text)
console.log(number == text)
console.log(number + text) //concatenation

//explicit conversion

console.log(number + Number(text)) // add
console.log(number + Number(text1)) // NaN