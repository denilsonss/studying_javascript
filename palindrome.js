function ehPalindrome(str) {
  const strInvertida = str.split("").reverse().join("");
  return str === strInvertida;
}

console.log(ehPalindrome("arara"));
console.log(ehPalindrome("carro"));

// STRING
//str.trim() => remove espacos
//str.split(quebra): [] => quebra string

//ARRAY
//arr.reverse()
//arr.join(junta): "" => Ele junta todos itens do array pelo parametro