function desencriptarTexto() {
    let texto = document.getElementById("texto").value;
  
    // Validar que el texto solo contenga letras minúsculas
    if (/[^a-z\s\ñ]/.test(texto)) {
      alert("El texto debe contener solo letras minúsculas");
      return;
    }
  
    // Si el texto es válido, continuar con la desencriptación
    texto = texto.replace(/enter/g, "e");
    texto = texto.replace(/imes/g, "i");
    texto = texto.replace(/ai/g, "a");
    texto = texto.replace(/ober/g, "o");
    texto = texto.replace(/ufat/g, "u");
    document.getElementById("resultado").textContent = texto;
}