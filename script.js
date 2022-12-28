function encriptarboton() {
  let textoentrada = document.getElementById("texto").value.trim();
  let textocadena = textoentrada.split(" ");
  let palabracadena;
  let cadenafinal = [];
  let textosalida;
  if (!contieneMayusculas(textoentrada) && !contieneAcentos(textoentrada)) {
    for (let i = 0; i < textocadena.length; i++) {
      palabracadena = textocadena[i];
      if (palabracadena.includes("e") && !palabracadena.includes("enter")) {
        palabracadena = palabracadena.replace(/e/g, "enter");
      }
      if (palabracadena.includes("i") && !palabracadena.includes("imes")) {
        palabracadena = palabracadena.replace(/i/g, "imes");
      }
      if (palabracadena.includes("a") && !palabracadena.includes("ai")) {
        palabracadena = palabracadena.replace(/a/g, "ai");
      }
      if (palabracadena.includes("o") && !palabracadena.includes("ober")) {
        palabracadena = palabracadena.replace(/o/g, "ober");
      }
      if (palabracadena.includes("u") && !palabracadena.includes("ufat")) {
        palabracadena = palabracadena.replace(/u/g, "ufat");
      }
      cadenafinal.push(palabracadena);
    }
    textosalida = cadenafinal.join(" ");
    if (textosalida != null && textosalida != " ") {
      const visible = document.getElementById("copiar").style.visibility;
      if (visible === "visible") {
        document.getElementById("salida").value = textosalida;
      } else {
        document.getElementById("salida").style.display = "inline";
        document.getElementById("copiar").style.visibility = "visible";
        document.getElementById("imagenmuneco").style.display = "none";
        document.getElementById("textonoencontrado").remove();
        document.getElementById("ingresetexto").remove();
        document.getElementById("salida").value = textosalida;
      }
    }
  } else {
    alert("Escriba en minusculas y sin acentos");
  }
}

function descencriptarboton() {
  let textoentrada = document.getElementById("texto").value;
  let textocadena = textoentrada.split(" ");
  let palabracadena;
  let cadenafinal = [];
  let textosalida;

  for (let i = 0; i < textocadena.length; i++) {
    palabracadena = textocadena[i];
    palabracadena = palabracadena.replace(/enter/g, "e");
    palabracadena = palabracadena.replace(/imes/g, "i");
    palabracadena = palabracadena.replace(/ai/g, "a");
    palabracadena = palabracadena.replace(/ober/g, "o");
    palabracadena = palabracadena.replace(/ufat/g, "u");
    cadenafinal.push(palabracadena);
  }
  textosalida = cadenafinal.join(" ");

  if (textosalida != null && textosalida != " ") {
    document.getElementById("salida").style.display = "inline";
    document.getElementById("copiar").style.visibility = "visible";
    document.getElementById("salida").value = textosalida;
  }
}

function copiarboton() {
  document.getElementById("texto").value =
    document.getElementById("salida").value;
  document.getElementById("salida").value = "";
}

function contieneMayusculas(texto) {
  for (let i = 0; i < texto.length; i++) {
    if (texto[i] === texto[i].toUpperCase().trim()) {
      return true;
    }
  }
  return false;
}

function contieneAcentos(texto) {
  let acentos = texto.match(/[áéíóú]/gi);
  if (acentos && acentos.length > 0) {
    return true;
  }
  return false;
}

document.getElementById("encriptar").onclick = encriptarboton;
document.getElementById("desencriptar").onclick = descencriptarboton;
document.getElementById("copiar").onclick = copiarboton;
