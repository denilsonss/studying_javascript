function decodificarString(str) {
  const arr = str.split(" "); // "['3', '[' , 'a', ']' ]"
  const numero = arr.shift(); // Eu tirei o numero,   

  if (arr.length === 3) {
      const letra = arr[1];
      return letra.repeat(numero);
  } else {
      let letraConcatenada = "";
      for (let i = 1; i < arr.length - 1; i++) {
          letraConcatenada += arr[i];
      }
      return letraConcatenada.repeat(numero);
  }
}
