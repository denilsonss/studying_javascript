function valorDefault(nome = "nome") {
  if (nome.trim() === "") {
    console.log(`Um pro nome, um para mim`);
  } else {
    console.log(`Um pro ${nome}, um pra mim`);
  }
}

valorDefault("Willian"); //Um pro Willian, um pra mim.
valorDefault("Denilson"); //Um pro Denilson, um pra mim.
valorDefault(); //Um pro nome, um pra mim. //undefined
valorDefault(""); //Um pro nome, um pra mim. // ""
valorDefault(" "); //Um pro nome, um pra mim.
valorDefault("        "); //Um pro nome, um pra mim.
valorDefault("                      "); //Um pro nome, um pra mim.



// Valor automatico: Quando nada eh passado pra funcao, um valor automatico entra no lugar.
// Eliminar espacos do comeco e final da string: variavel.trim();

//