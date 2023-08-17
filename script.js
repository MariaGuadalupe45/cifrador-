const alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","ñ","o","p","q","r","s","t","u","v","w","x","y","z"];

function shiftLetter(letter, offsetAmount) {
    const index = alphabet.indexOf(letter);
    
    if (index === -1) {
        return letter;
    } else {
        const newIndex = (index + offsetAmount) % alphabet.length;
        return alphabet[newIndex];
    }
}

function cifrar() {
    const mensajeInput = document.getElementById('mensaje').value.toLowerCase();
    const offsetAmount = parseInt(document.getElementById('offsetAmount').value);
    const resultadoOutput = document.getElementById('resultado');
    
    const mensajeCifrado = mensajeInput.split('').map(letter => shiftLetter(letter, offsetAmount)).join('');
    
    resultadoOutput.value = mensajeCifrado;
}

function descifrar() {
    const mensajeInput = document.getElementById('menci').value.toLowerCase();
    const offsetAmount = parseInt(document.getElementById('offsetAmount2').value);
    const resultadoOutput = document.getElementById('res');
    
    const mensajeOriginal = mensajeInput.split('').map(letter => shiftLetter(letter, -offsetAmount + alphabet.length)).join('');
    
    resultadoOutput.value = mensajeOriginal;
}
