function transporString(str1, str2) {
    const maior = str1.length > str2.length ? str1.length : str2.length;

    for (let i = 0; i < maior; i++) {

        const letra1 = str1[i] !== undefined ? str1[i] : "";
        const letra2 = str2[i] !== undefined ? str2[i] : "";

        console.log(letra1 + letra2);
    }

}

function transporString2(str1, str2) {
    let count = 0;
    let letra1 = str1[count];
    let letra2 = str2[count];

    while (letra1 !== undefined || letra2 !== undefined) {
        console.log((letra1 !== undefined ? letra1 : "") + (letra2 !== undefined ? letra2 : ""));
        count++;
        letra1 = str1[count]
        letra2 = str2[count]
    }
}

// ternario

// transporString("ABC", "DEF"); // AD -> BE -> CF
transporString2("ABC", "DE"); // AD -> BE -> C
transporString("BA", "DEF"); // AD -> BE -> F
// transporString("WILLIAN", "DENILSON"); // WD -> IE -> LN -> LI ...


// let letra1;

// if (str1[i] !== undefined) {
//     letra1 = str1[i];
// } else {
//     letra1 = "";
// }


// let letra1 = str1[i] !== undefined ? str1[i] : "";
