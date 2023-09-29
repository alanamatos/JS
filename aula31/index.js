// Funções (aprendendo o básico)


//Exemplo simples para mostrar como a função funciona
function saudacao(nome) {
    return `Bom dia ${nome}!`;
} 

const variavel = saudacao('Luiz');
console.log(variavel);






//Função que faz a soma entre dois valores:
function soma(x, y) {
    const resultado = x + y;
    return resultado;
}

console.log(soma(2, 2));
console.log(soma(50, 488));
console.log(soma(156, 4155));
console.log(soma('Luiz', ' Otávio'))

const resultado = soma(2, 2);
console.log(resultado);


//Outros jeitos de somar:
function soma2(x = 1, y = 1) {
    const resultado = x + y;
    return resultado;
}

console.log(soma2(4));





//Função anônima
const raiz = function (n) {
    return n ** 0.5;
};

console.log(raiz(9));
console.log(raiz(16));
console.log(raiz(25));

//Arrow function 
const raiz2 = (n) => n ** 0.5;

console.log(raiz2(9));