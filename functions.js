// 3 formas de escrever funções

// 1) DECLARAÇÃO DE FUNÇÃO
// Declara função
//                  string
function printText(texto) {
    console.log(texto);
}

// Executa 1 ou + vezes
printText("HI!");
printText("Hello!");

// 2) 
function soma() {
    return 2 + 2;
}

console.log("O resultado é " + soma());

// 1 função dentro de outra função
printText(soma());