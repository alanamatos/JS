/*
Valores primitivos e Valores de referência

Primitivos (imutáveis) - String, number, boolean, undefined, null, bigint e symbol

Referência (mutáveis) - array, object, function

*/



//primitivos (valores são copiados ao utilizar o sinal de atribuição)
let t = 'T';
let y = t; //cópia
console.log(t, y);

t = 'Outra coisa';
console.log(t, y); 


//referência (valores são passados por referência ao utilizar o sinal de atribuição - apontam pro mesmo valor na memória)
let a = [1, 2, 3];
let b = a;
let c = b;

console.log(a, b);

a.push(4);
console.log(a, b);

b.pop();
console.log(a, b);

a.push('Luiz');
console.log(c);

//com objetos:
const d = {
    nome: 'Luiz',
    sobrenome: 'Otavio'
};

const e = d;

d.nome = 'João';

console.log(e);

//OBS- caso se deseje fazer uma cópia na referência, usa-se, por exemplo, acima faríamos "const e ={...d};"



