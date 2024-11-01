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

