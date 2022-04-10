//Dificil
function achatarArray(arr) { 
  const arrNovo = [];

  for (const item of arr) {

    if (Array.isArray(item)) {
        arrNovo = arrNovo.concat(achatarArray(item));
    } else {
      arrNovo.push(item);
    }

  }
  return arrNovo;
} 


//Recursividade
//Precisa de um freio pra nao dar stackoverflow (estourar a pilha)
//Funcao que chama funcao
  


console.log(achatarArray([1, 2, [3, 4], 5]) === [1, 2, 3, 4, 5])

console.log(achatarArray([1, [2, [3, [4, 5]]]]) === [1, 2, 3, 4, 5])

//Array
//.slice
//.map
//.filter
//.isArray
//.concat => concatena um array com outro. ele nao modifica, ele gera um novo
//arr1 = [1,2]
//arr2 = [3]
//arr1.concat(arr2) => [1,2,3]










//isNaN