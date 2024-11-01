const heroi = [{
    nome: "Spider-Man",
    vitorias: 70, 
    derrotas: 69
},{
 	nome: "Hulk",
 	vitorias: 80, 
 	derrotas: 60
  },{
  	nome:"Iron-Man",
  	vitorias: 100, 
  	derrotas: 50
},{
  	nome:"Black Phanter",
	vitorias: 105, 
    derrotas: 50
},{
	nome:"Black Widow",
	vitorias: 280, 
    derrotas: 100  
},{
  	nome:"Doctor Strange",
 	vitorias: 190, 
    derrotas: 100
},{
  	nome:"DeadPool",
 	vitorias: 200, 
    derrotas: 100
}];

function subtrair(vitorias, derrotas) {
  return vitorias - derrotas;
  }
  
for (let i = 0; i < heroi.length; i++) {
let nome = heroi[i].nome;  
let vitorias = heroi[i].vitorias;
let derrotas = heroi[i].derrotas;
let saldo = subtrair(vitorias,derrotas);
let nivel = "";

console.log("O Herói " + nome + " tem saldo de " + saldo + " está no nível " + nivel) 


if (saldo <= 10){
    console.log("Ferro");
} else if (saldo >=11 && saldo <=20){
    console.log("Bronze");
} else if (saldo >=21 && saldo <=50){
    console.log("Prata");
} else if (saldo >=51 && saldo <=80){
    console.log("Ouro");
} else if (saldo >=81 && saldo <=90){
    console.log("Diamante");
} else if (saldo >=90 && saldo <=100){
    console.log("Lendário");
} else {
    console.log("Imortal");
  }
}

/*
Instruções para entrega
 # 2️⃣ Calculadora de partidas Rankeadas
**O Que deve ser utilizado**

- Variáveis
- Operadores
- Laços de repetição
- Estruturas de decisões
- Funções

## Objetivo:

Crie uma função que recebe como parâmetro a quantidade de vitórias e derrotas de um jogador,
depois disso retorne o resultado para uma variável, o saldo de Rankeadas deve ser feito através do calculo (vitórias - derrotas)

Se vitórias for menor do que 10 = Ferro
Se vitórias for entre 11 e 20 = Bronze
Se vitórias for entre 21 e 50 = Prata
Se vitórias for entre 51 e 80 = Ouro
Se vitórias for entre 81 e 90 = Diamante
Se vitórias for entre 91 e 100= Lendário
Se vitórias for maior ou igual a 101 = Imortal

## Saída

Ao final deve se exibir uma mensagem:
"O Herói tem de saldo de **{saldoVitorias}** está no nível de **{nivel}**"
 */