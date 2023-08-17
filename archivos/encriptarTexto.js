function encriptarTexto() {
    let texto = document.getElementById("texto").value;
  
    // Validar que el texto solo contenga letras minúsculas
    if (/[^a-z\s\ñ]/.test(texto)) {
      alert("El texto debe contener solo letras minúsculas");
      return;
    }
  
    // Si el texto es válido, continuar con la encriptación
    texto = texto.replace(/e/g, "enter");
    texto = texto.replace(/i/g, "imes");
    texto = texto.replace(/a/g, "ai");
    texto = texto.replace(/o/g, "ober");
    texto = texto.replace(/u/g, "ufat");
    document.getElementById("resultado").textContent = texto;
}
  
