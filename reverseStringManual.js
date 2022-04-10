//Facil - Medio
function reverseStringManual(str) {
    let stringVazia = "";
   
    for (let i = str.length - 1; i >= 0; i--) {
        stringVazia += str[i];
    }

    return stringVazia;
}

console.log(reverseStringManual('Willian') === 'nailliW');
console.log(reverseStringManual('Dida') === 'adiD');

