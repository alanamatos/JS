/*
Alana Matos de Oliveira tem 28 anos, pesa 65kg
tem 1.55 de altura e seu IMC é de 27,1
Alana Matos nasceu em 1995
*/
const nome = 'Alana Matos';
const sobrenome = 'Oliveira';
const idade = 28;
const peso = 65;
const alturaEmM = 1.55;
// imc é o peso / (altura*altura)
let imc = peso / (alturaEmM*alturaEmM);
let anoNascimento = 2023 - idade;

// template strings

console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso} kg`);
console.log(`tem ${alturaEmM} de altura e seu IMC é de ${imc}`);
console.log(`${nome} nasceu em ${anoNascimento}`);

