// Maior ou Menor

const Number1 = 5;
const Number2 = 10;

if(Number1 > Number2){
    print("O primeiro número é maior que o segundo")
} else{
    print("O segundo número é maior que o primeiro")
} 

// Impar ou Par

let num = 4

if(num % 2 === 0){
    console.log("Par");
} else {
    console.log("Impar");
} 

// Postivo, Negativo ou Zero

const num2 = 0;

if (num > 0) {
    console.log("Postivo");
}

else if (num < 0) {
    console.log("Negativo");
}

else {
    console.log("O número é 0");
} 

// Múltiplos de 3 0 - 100:

for(i = 0; i <= 100; i++) {
    if(i % 3 === 0){
        console.log(i)
    }
}

// Menu interativo

const opção = 8;

switch(opção) {
    case 1:
        console.log("Abrir Login");
    break;

    case 2:
        console.log("Abrir Registrar");
    break;

    case 3:
        console.log("Fechar página");
    break;
    default:
        console.log("Número inválido! Tente novamente")
}