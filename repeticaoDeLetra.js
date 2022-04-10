function repetirLetraXVezes(letra, vezes) {
    let count = 0;
    let letraRepitida = "";
    while(count < vezes){
        letraRepitida += letra;
        count++;
    }
    return letraRepitida;
}

function repetirLetraXVezes2(letra, vezes) {
    return letra.repeat(vezes);
}

console.log(repetirLetraXVezes('a', 4)) //aaaa
console.log(repetirLetraXVezes2('a', 4)) //aaaa
console.log(repetirLetraXVezes('d', 8)) //dddddddd
console.log(repetirLetraXVezes2('d', 8)) //dddddddd

//STRING
//str.repeat(x)