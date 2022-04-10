function ehIsomorfica(str1, str2) {
    const map1 = new Map();
    const map2 = new Map();

    for (let i = 0; i < str1.length; i++) {
        const letra1 = str1[i];
        const letra2 = str2[i];

        if (!map1.has(letra1) && !map2.has(letra2)) {
            map1.set(letra1, letra2);
            map2.set(letra2, letra1);
        } else {
            if (map1.get(letra1) !== letra2 || map2.get(letra2) !== letra1) {
                return false;
            }
        }
    }

    return true;
}




//a string pode vir vazia? ""
//a string pode ter apenas espacos?  "    " 
//a string pode ser null ou undefined?

//f === b - b === f
//o === a - a === o
//o === r? false

console.log(ehIsomorfica("foo", "bar")); //false

console.log(ehIsomorfica("fooa", "baaa")); //false

// f = 1 b = 1
// o = 2 a = 2
// o = 2 r = 3

console.log(ehIsomorfica("egg", "add")); //true

// e = 1 a = 1
// g = 2 d = 2
// g = 2 d = 2

console.log(ehIsomorfica("paper", "title")); //true


console.log(ehIsomorfica("bbbaaaba", "aaabbbba")) //false