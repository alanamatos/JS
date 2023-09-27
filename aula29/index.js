// Arrays
//Indices        0       1        2    (elementos separados por vírgula)
const alunos = ['Luiz', 'Maria', 'João']; //Boas práticas de programação: fazer listas só com um tipo de dado


//Elementos que são ARRAY usam os colchcetes sempre


//Para exibir apenas os indices que quiser:
//console.log(alunos.slice(0,2));      //obs - o indice dois não entra, apenas o 0 e o 1
//Seguindo a mesma lógica, dá para exibir os que quiser usando números negativos
//console.log(alunos.slice(0, -2));      //obs - os ultimos dois indices são eliminados da exibição

//console.log(alunos[59]);  //Ao acessar um indice que não existe, não dá erro, dá undefined.


//Para deletar e deixar o espaço do indice "vazio", pode usar o delete:
//delete alunos[1];
//console.log(alunos[1]);


//console.log(alunos.length); //acessando a quantidade de indices do array



//alunos[0] = 'Eduardo';  //substituindo o nome do indice 0
//alunos[3] = 'Luiza'; //adicionando um elemento ao final do array

//Outro jeito de adicionar alunos a lista sem consultar o indice:
//alunos[alunos.length] = 'Luiza';
//alunos[alunos.length] = 'Fabio';
//alunos[alunos.length] = 'Luana';


//console.log(typeof alunos); //mostra que o array é um objeto
//console.log(alunos instanceof Array);  //retorna falso ou verdadeiro caso seja um array ou não




//FUNÇÕES:

//FUNÇÃO que adiciona ao final:
//alunos.push('Otavio');
//alunos.push('Fábio');

//FUNÇÃO que adiciona os nomes no começo do array
//alunos.unshift('Luiza'); 

//FUNÇÃO que remove o ultimo indice do array
//alunos.pop();

//FUNÇÃO que remove o primeiro indice do array
//alunos.shift();

//Para deixar salvo os nomes removidos, basta fazer uma variável com a função. Exemplo:
//const removido = alunos.pop()




//console.log(alunos[1]); //acessando o indice 1 do array
//console.log(alunos); //acessando o array completo
