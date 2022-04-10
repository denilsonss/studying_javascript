function decodificarString(str) { //2[a3[bc]]
    const arr = str.split("");
 
    const arrNumeroDeRepeticoes = [3];
    const arrLetras = [a];
    let resultado = "";

    for (const char of arr) { //char = ""
        if (isNaN(char)) {
            if (char === '[') {
                arrLetras.push("");
                continue;
            } else if (char === ']') {
                const ultimoInseridoLetras = arrLetras.pop(); 
                const ultimoInseridoNumeros = arrNumeroDeRepeticoes.pop(); //2

                if (arrLetras.length === 0) {
                    resultado = ultimoInseridoLetras.repeat(ultimoInseridoNumeros); //abcbcbcabcbcbc
                } else {
                    arrLetras[arrLetras.length - 1] += ultimoInseridoLetras.repeat(ultimoInseridoNumeros);
                }
            } else {
                arrLetras[arrLetras.length - 1] += char;
            }
        } else {
            arrNumeroDeRepeticoes.push(Number(char));
        }
    }
    return resultado;
}

console.log(decodificarString("3[a]") === "aaa");
console.log(decodificarString("2[cd]") === "cdcd");
console.log(decodificarString("3[a2[b]]") === "abbabbabb");
console.log(decodificarString("3[a2[b1[c]]]") === "abcbcabcbcabcbc");
console.log(decodificarString("2[a3[bc]]") === "abcbcbcabcbcbc");

//Number(variavel)
//Test unitario: 
//Test manual:

//numeroDeRepeticoes: [] => numeros
//letras: [] => string


//str.slice(i) =>
//.split()
//.repeat()
//fila
//array
//Number(str)
//isNaN(variavel) => NaN == Not a number
//for of