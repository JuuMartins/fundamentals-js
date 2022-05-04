//Parameters of functions

function soma(number1, number2) {
    return number1 + number2;
}

console.log(soma(4, 5));

function nomeIdade(name, age) {
    return `My name is ${name}, I have ${age} years old`;
}

console.log(nomeIdade("Juliana", 30))
console.log(nomeIdade(30, "Juliana"));;

function multiplication(number1 = 1, number2 = 1) {
    return number1 * number2;
}

console.log(multiplication(4, 5));
console.log(multiplication(soma(2, 2), 5));
console.log(multiplication(soma(2, 2), soma(2, 3)));
console.log(multiplication(soma(2, 2))); // NaN - missing a parameter

function comParametro(param) {
    console.log(param)
}
comParametro()