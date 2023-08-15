function cifrar() {
    const alfabeto = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","ñ","o","p","q","r","s","t","u","v","w","x","y","z"];
    var mensaje = document.getElementById("mensaje");
    var resultado = document.getElementById("resultado");
    let mensaje_original = mensaje.value;
    for (let i = 0; i < mensaje_original.length; i++) {
        let letra = mensaje_original[i];
        let index = alfabeto.indexOf(letra);
        let newletter = alfabeto[index + 5];
        mensaje_original = mensaje_original.replaceAll(letra, newletter);
    }
    resultado.value = mensaje_original;
}

function decifrar() {
    const alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","ñ","o","p","q","r","s","t","u","v","w","x","y","z"];
    var menci = document.getElementById("menci");
    var res = document.getElementById("res");
    let originalMessage = menci.value;
    for (let i = 0; i < originalMessage.length; i++) {
        let letter = originalMessage[i];
        let index = alphabet.indexOf(letter);
        let newletter = alphabet[index - 5];
        originalMessage = originalMessage.replaceAll(letter, newletter);
    }
    res.value = originalMessage;
}
