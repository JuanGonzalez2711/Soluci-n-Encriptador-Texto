// Selecciona los elementos necesarios
const inputText = document.getElementById('inputText');
const outputText = document.getElementById('outputText');
const encryptBtn = document.getElementById('encryptBtn');
const decryptBtn = document.getElementById('decryptBtn');
const copyBtn = document.getElementById('copyBtn');

// Función para encriptar
function encrypt(text) {
    return text
        .replace(/e/g, 'enter')
        .replace(/i/g, 'imes')
        .replace(/a/g, 'ai')
        .replace(/o/g, 'ober')
        .replace(/u/g, 'ufat');
}

// Función para desencriptar
function decrypt(text) {
    return text
        .replace(/enter/g, 'e')
        .replace(/imes/g, 'i')
        .replace(/ai/g, 'a')
        .replace(/ober/g, 'o')
        .replace(/ufat/g, 'u');
}

// Función para procesar el texto ingresado
function processText() {
    const text = inputText.value;
    const encryptedText = encrypt(text);
    const decryptedText = decrypt(encryptedText);
    outputText.textContent = decryptedText; // Mostrar el texto desencriptado en la salida
}

// Evento que se dispara cuando se ingresa texto
inputText.addEventListener('input', processText);

// Evento para encriptar el texto
encryptBtn.addEventListener('click', () => {
    const text = inputText.value;
    const encryptedText = encrypt(text);
    outputText.textContent = encryptedText;
});

// Evento para desencriptar el texto
decryptBtn.addEventListener('click', () => {
    const encryptedText = outputText.textContent;
    const decryptedText = decrypt(encryptedText);
    outputText.textContent = decryptedText;
});

// Evento para copiar el texto encriptado/desencriptado
copyBtn.addEventListener('click', () => {
    const text = outputText.textContent;
    navigator.clipboard.writeText(text).then(() => {
        alert('Texto copiado al portapapeles');
    });
});

// Procesar el texto al cargar la página
window.addEventListener('load', processText);
