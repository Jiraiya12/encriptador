function copiarTexto() 
                {
                    // Seleccionar el texto a copiar y crear un elemento de texto temporal
                    let texto = document.getElementById("resultado").textContent;
                    let textoTemp = document.createElement("textarea");
                    textoTemp.value = texto;
                    document.body.appendChild(textoTemp);
              
                    // Seleccionar el texto temporal y copiarlo al portapapeles
                    textoTemp.select();
                    document.execCommand("copy");
              
                    // Eliminar el elemento temporal
                    document.body.removeChild(textoTemp);
                }