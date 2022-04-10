// Nao falar nada => "Tudo bem. Que seja"
// Pergunta => "Certo" 
// Gritar (maiusculo) => "Calma mano"; 
// Gritar uma pergunta => "Relaxa, eu sei o que eu to fazendo." 
//Se nao forem esses casos => "Tanto faz."

//facil
function hey(mensagemProBob) {

    if (mensagemProBob !== null && mensagemProBob !== undefined) {
        if (mensagemProBob.trim() === "" || mensagemProBob.trim() === " ") {
            console.log("Tudo bem. Que seja");

        } else if (mensagemProBob[mensagemProBob.length - 1] === "?") {
            if (mensagemProBob === mensagemProBob.toUpperCase()) {
                console.log("Relaxa, eu sei o que eu to fazendo.");

            } else {
                console.log("Certo");

            }
        } else if (mensagemProBob === mensagemProBob.toUpperCase()) {
            console.log("Calma mano");
        
        } else {
            console.log("Tanto faz");
        
        }
    } else {
        console.log("Tudo bem. Que seja");
    
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