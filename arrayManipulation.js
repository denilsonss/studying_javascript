function adicionaItemNoFimArray(arr, item) {
  arr.push(item);
}

const arr = [];

adicionaItemNoFimArray(arr, "Willian");
adicionaItemNoFimArray(arr, "Denilson");
adicionaItemNoFimArray(arr, "Gustavo");

function adicionaItemNoInicioArray(arr, item) {
  arr.unshift(item);
}

adicionaItemNoInicioArray(arr, "Matheus")

console.log(arr);

function removeUltimoItemDoArray(arr) {
  const itemRemovido = arr.pop()
  console.log(itemRemovido);
}

removeUltimoItemDoArray(arr)

console.log(arr);

function removePrimeiroItemDoArray(arr) {
  const itemRemovido = arr.shift()
  console.log(itemRemovido);
}

removePrimeiroItemDoArray(arr)

console.log(arr);

//ARRAY
// push -> adiciona item no fim do array
// unshift -> adiciona item no comeco do array
// pop -> remove e retorna ultimo item do array
// shift -> remove e retorna primeiro item do array