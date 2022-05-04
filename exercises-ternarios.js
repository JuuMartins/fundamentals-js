const name = "Ana";
const age = "20";
const drink1 = "beer";
const drink2 = "juice";
const order = `${name} say: "Please, I wanna a ${age >= 18 ? drink1 : drink2}"`;

console.log(order);

// Como é escrito um operador ternário, com o qual fazemos uma comparação entre valores digitando um ?, 
// seguido da possibilidade true, um : e a possibilidade false, ou seja, comparação ? true : false.