// O comando for é usado em JavaScript para criar loops, permitindo repetir blocos de código enquanto uma condição é verdadeira

//Estrutura básica do for

// for (inicialização; condição; incremento) {
//     // Código a ser executado
// }

//Inicialização: Define uma variável e seu valor inicial (geralmente usada como contador).
//Condição: Determina até quando o loop será executado.
//Incremento: Atualiza o valor da variável de controle após cada iteração.


//Exemplo básico: Contar de 1 a 5

for (let i = 1; i <= 5; i++) {
    console.log("Contando:", i);
}

//O que acontece aqui?

//Inicializa i = 1.
//Verifica se i <= 5. Se for verdadeiro, executa o bloco dentro do for.
//Incrementa i em 1 após cada iteração.

//Iterar sobre arrays

const frutas = ["Maçã", "Banana", "Laranja"];

for (let i = 0; i < frutas.length; i++) {
    console.log(`Fruta ${i + 1}: ${frutas[i]}`);
}

//Como funciona:

//i começa em 0 (primeiro índice do array).
//O loop continua enquanto i < frutas.length.
//A cada iteração, acessa o elemento no índice i e imprime no console.


//Usando for com objetos (com for...in)

const pessoa = {
    nome: "Kelvin",
    idade: 30,
    profissão: "QA"
};

for (let chave in pessoa) {
    console.log(`${chave}: ${pessoa[chave]}`);
}

//Como funciona:

//O for...in percorre todas as propriedades do objeto.
//chave é o nome da propriedade atual, e pessoa[chave] acessa seu valor.

//Usando for com valores (com for...of)

const numeros = [10, 20, 30];

for (let numero of numeros) {
    console.log("Número:", numero);
}

//Como funciona:

//O for...of percorre os valores diretamente (sem precisar usar índices).
//numero é o valor atual do array na iteração.



//Exemplo prático: Tabuada

const numero = 5;

for (let i = 1; i <= 10; i++) {
    console.log(`${numero} x ${i} = ${numero * i}`);
}
