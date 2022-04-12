// Nao falar nada => "Tudo bem. Que seja"
// Pergunta => "Certo" 
// Gritar (maiusculo) => "Calma mano"; 
// Gritar uma pergunta => "Relaxa, eu sei o que eu to fazendo." 
//Se nao forem esses casos => "Tanto faz."

//facil
function hey(mensagemProBob) {
    if (mensagemProBob === null || mensagemProBob === undefined || mensagemProBob.trim() === "") {
        console.log("Tudo bem. Que seja");
    } else {
        const ehMaiusculo = mensagemProBob === mensagemProBob.toUpperCase();
        const ehPergunta = mensagemProBob[mensagemProBob.length - 1] === "?";

        if (ehPergunta) {
            if (ehMaiusculo) {
                console.log("Relaxa, eu sei o que eu to fazendo.");
            } else {
                console.log("Certo");
            }
        } else if (ehMaiusculo) {
            console.log("Calma mano");
        } else {
            console.log("Tanto faz");
        }
    }
}





//if(naoFalouNada){
// return "Tudo bem. Que seja"
// }
//...
//...
//...
//...
//
hey('') //Tudo bem. Que seja
hey(null) //Tudo bem. Que seja
hey(undefined) //Tudo bem. Que seja
hey('             ') //Tudo bem. Que seja
hey(' ') //Tudo bem. Que seja

hey('Ta tudo bem?') //Certo

hey('VEM CA') //Calma mano

hey('VOCE PODE VIR AQUI?') //Relaxa, eu sei o que eu to fazendo.

hey('Meu nome eh Willian') //Tanto faz