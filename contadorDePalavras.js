/*
  Nao retorna nada,
  mas imprime a quantidade de cada palavra que apareceu na string
  palavra: quantidade
*/
function contadorDePalavras(str) {
  const arr = str.split(" "); //[ 'eu', 'não', 'ligo', 'pra', 'nada', 'não' ]  

  const map = new Map();

  for (const palavra of arr) { // palavra: não
    if (map.has(palavra)) {
      map.set(palavra, map.get(palavra) + 1);
    } else {
      map.set(palavra, 1);
    }
  }

  for (const [chave, valor] of map) { //chave: 'eu' , valor: 1
    console.log(`${chave}: ${valor}`);
  }
}

contadorDePalavras("eu não ligo pra nada não")
contadorDePalavras("meu nome não faz sentido")
contadorDePalavras("Rato Rato Rato Rato Rato")

//Map (chave => valor)
//const map = new Map()
//has(chave) => se existe essa chave
//get(chave) => retorna o valor
//set(chave, valor) => cria uma entrada
//set(chave, novoValor)

//map.set("nome", "willian")
//map.set("nome", "denilson")
//map.set(numero, string)
//map.set(string, numero)
//map.set(numero, numero)
//map.set(string, string)

//console.log(map.get("nome")) => denilson

//Array
//arr.map(function (item){
// return item.slice(3);
//}) => mapeia cada item pro resultado da funcao passada como parametro;
//
//arr.filter(function (item ){
//    if(item === undefined) return false;
//    return true;
//}); => 