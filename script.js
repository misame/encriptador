const BTN_ENCRIPTAR = document.getElementById('encriptar');
const BTN_DESENCRIPTAR = document.getElementById('desencriptar');
const TEXTO_ENTRADA = document.getElementById('texto');
const TEXTO_SALIDA = document.getElementById('salida');
const BTN_COPIAR = document.getElementById('copiar');
const IMAGEN = document.getElementById("imagenmuneco");
const TEXTO_NO_ENCONTRADO = document.getElementById("textonoencontrado");
const INGRESE_TEXTO = document.getElementById("ingresetexto");

TEXTO_ENTRADA.addEventListener('input', () => {
  TEXTO_ENTRADA.value = TEXTO_ENTRADA.value.toLowerCase().replace(/[^a-z\s]/g, '');
});

BTN_ENCRIPTAR.addEventListener('click', () => {
  const texto = TEXTO_ENTRADA.value;
  const textoEncriptado = encriptarTexto(texto);
  mostrarResultado(textoEncriptado);
  TEXTO_SALIDA.value = textoEncriptado;
});

BTN_DESENCRIPTAR.addEventListener('click', () =>{
  const textoEncriptado = TEXTO_ENTRADA.value;
  const textoDesencriptado = desencriptarTexto(textoEncriptado);
  TEXTO_SALIDA.value = textoDesencriptado;
});

BTN_COPIAR.addEventListener('click', () => {
  TEXTO_ENTRADA.value = TEXTO_SALIDA.value;
  TEXTO_SALIDA.value = "";
});

function encriptarTexto(texto){
  const encriptaciones = {
    'e' : 'enter',
    'i' : 'imes',
    'a' : 'ai',
    'o' : 'ober',
    'u' : 'ufat'
  };
  const textoEncriptado = texto.split('').map(char => encriptaciones[char] || char).join('');
  return textoEncriptado;
}

function desencriptarTexto(textoEncriptado){
  const desencriptado = {
    'enter': 'e',
    'imes': 'i',
    'ai': 'a',
    'ober': 'o',
    'ufat': 'u'
  };
  const palabrasEncriptadas = Object.keys(desencriptado);
  const palabrasDesencriptadas = Object.values(desencriptado);
  const palabrasRegex = new RegExp(palabrasEncriptadas.join('|'), 'g');
  const textoDesencriptado = textoEncriptado.replace(palabrasRegex, coincide => palabrasDesencriptadas[palabrasEncriptadas.indexOf(coincide)]);
  return textoDesencriptado;
}

function mostrarResultado(texto) {
  TEXTO_SALIDA.textContent = texto;
  TEXTO_SALIDA.style.display = "inline";
  BTN_COPIAR.style.display = "block";
  BTN_COPIAR.style.visibility = "visible";
  IMAGEN.style.display = "none";
  TEXTO_NO_ENCONTRADO.remove();
  INGRESE_TEXTO.remove();
}