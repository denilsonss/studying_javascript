function stringEhValida(str) {

  if (str.length % 2 !== 0) {
    return false;
  }

  const arr = str.split("");
  while (arr.length > 0) {
    let char1 = arr.shift(); // [
    let char2 = arr.pop(); // ]

    if (char1 === "[" && char2 !== "]") {
      return false;
    } else if (char1 === "(" && char2 !== ")") {
      return false;
    } else if (char1 === "{" && char2 !== "}") {
      return false;
    }
  }
  return true;
}

console.log(stringEhValida("[()]")); //true
console.log(stringEhValida("[({})]")); //true
console.log(stringEhValida("[{()}]")); //true
console.log(stringEhValida("[{)}]")); //false
console.log(stringEhValida("[{()}")); //false


//Array => Array, Fila, Pilha

//Fila - Queue
//Primeiro que entra, Primeiro que sai
//FIFO -> First in, First Out
// push -> adiciona item no fim do array
// pop -> remove e retorna ultimo item do array


//Stack - Pilha
//Ultimo que entra, primeiro que sai
//LIFO -> Last in, first out
// unshift -> adiciona item no comeco do array
// shift -> remove e retorna primeiro item do array
