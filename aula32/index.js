//Objetos (aprendendo o básico)
//Mexendo dentro dos valores do array
const array = [1, 2, 3];
array.push(4);
array[0] = 'Luiz';

console.log(array);



//Criando um objeto (literal)
const pessoa1 = {
    nome: 'Luiz', 
    sobrenome: 'Miranda',
    idade: 25
};

console.log(pessoa1.nome);
console.log(pessoa1.sobrenome);
console.log(pessoa1.idade);

const pessoa2 = {
    nome: 'Maria', 
    sobrenome: 'Oliveira',
    idade: 55
};

console.log(pessoa2.nome);
console.log(pessoa2.sobrenome);
console.log(pessoa2.idade);



//Simplificando o código acima com uma função => Facture (ela cria objetos)

function criaPessoa (nome, sobrenome, idade) {
    return {
        nome, sobrenome, idade
    }
}

const pessoa4 = criaPessoa ('Luiz', 'Otávio', 26);
const pessoa5 = criaPessoa ('Maria', 'Oliveira', 10);
const pessoa6 = criaPessoa ('Lara', 'Rita', 65);
const pessoa7 = criaPessoa ('Katia', 'Silva', 86);

console.log(pessoa5.nome, pessoa7.nome);


//outro exemplo usando método

const pessoa10 = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 25,

    fala() {
        console.log(`a minha idade atual é ${this.idade}.`)
        //console.log(`${this.nome} ${this.sobrenome} está falando oi...`);
    },

    incrementaIdade() {
        ++this.idade; //pré incremento, =>this.idade++ seria pós incremento

    }
};

pessoa10.fala();
pessoa10.incrementaIdade();
pessoa10.fala();
pessoa10.incrementaIdade();
pessoa10.fala();
pessoa10.incrementaIdade();
pessoa10.fala();