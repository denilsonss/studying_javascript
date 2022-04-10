//Facil
//EhPangram se tem todas as letras do alfabeto
function ehPangram(str) {
    const set = new Set(
        str.toLowerCase()
        .split(" ")
        .join("")
    );

    console.log(set.size === 26)
}

ehPangram('The quick brown fox jumps over the lazy dog');
ehPangram('The quick brown fox jumps over the laz dog');