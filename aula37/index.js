/*
Operadores de comparação
1) > maior que
2) >= maior ou igual a que
3) < menor que
4) <= menor ou igual a que
5) == igualdade (é diferente de atribuição -> =) - ele checa VALOR    -    EVITAR UTILIZAR
6) === igualdade estrita - checa VALOR e TIPO 
7) != diferente - ele checa VALOR     -    EVITAR UTILIZAR
8) !== diferente estrito - checa VALOR e TIPO
*/

//1
console.log(10 > 5); //a resposta sempre será um valor boolean (true ou farse)

const comparacao1 = 10 > 5;
console.log(comparacao1);

//2
const comparacao2 = 10 >= 5;
console.log(comparacao2);

//3
const comparacao3 = 10 < 11;
console.log(comparacao3);

const num1 = 10
const num2 = 11
const comparacao4 = num1 < num2;
console.log(comparacao4);

//4 
const comparacao5 = 10 <= 11;
console.log(comparacao5);

//5
const num3 = 10; //number
const num4 = '10'; //string
const comparacao6 = num4 == num3;
console.log(comparacao6); //coerção de tipos deduzida pela linguagem. Melhor evitar.

//6
const num6 = 10; //number
const num7 = '10'; //string
const comparacao8 = num6 === num7;
console.log(comparacao8); 

//7
const num8 = 10; //number
const num9 = '10'; //string
const comparacao9 = num4 != num3;
console.log(comparacao9); //coerção de tipos deduzida pela linguagem. Melhor evitar.

//8
const num10 = 10; //number
const num11 = '10'; //string
const comparacao10 = num6 !== num7;
console.log(comparacao10); 


