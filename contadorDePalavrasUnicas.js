/*
  Nao retorna nada,
  mas imprime as palavras 1 vez
  palavra
*/
function contadorDePalavrasUnicas(str) {
  const arr = str.split(" ");
  const set = new Set(['W', 'A', 'S']);

  for (const palavraUnica of set) {
    console.log(palavraUnica);
  }

}

//contadorDePalavrasUnicas("nos somos os desbravadores")
//contadorDePalavrasUnicas("nos desbravadores somos os desbravadores nos somos")
contadorDePalavrasUnicas("eu vídeo sei vídeo fico vídeo com o vídeo")


// Set => chave
// Map => chave, valor
// Array => index, valor
//Voce vai usar o Set, e nao o Map