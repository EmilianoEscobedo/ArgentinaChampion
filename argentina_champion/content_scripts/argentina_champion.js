(function() {
    /**
     * Revisa e inicializa una variable de guardia.
     * Si este script de contenido es insertado más de una vez
     * en la misma página, dejará de ejecutarse.
     */
    if (window.hasRun) {
      return;
    }
    window.hasRun = true;
  
  /**
  * Recibe la URL de la imagen, remueve las que se hayan agregado antes,
  * crea un nodo IMG que apunt hacia la imagen
  * e inserta ese nodo en el documento.
  */
    function insertStars(beastURL) {
        removeExistingStars();
      let starImage = document.createElement("img");
      starImage.setAttribute("src", championURL);
      starImage.style.height = "100vh";
      starImage.className = "argentina_champion-image";
      document.body.appendChild(starImage);
    }
  
    /**
     * Remueve todas las bestias de la página.
     */
    function removeExistingStars() {
      let existingStars = document.querySelectorAll(".argentina_champion-image");
      for (let star of existingStars) {
        star.remove();
      }
    }
  
    /**
     * Atiende mensajes del script de segundo plano.
     * Llama a "argentina_champion()" o "reset()".
    */
    browser.runtime.onMessage.addListener((message) => {
      if (message.command === "argentina_champion") {
        insertStars(message.championURL);
      } else if (message.command === "reset") {
        removeExistingStars();
      }
    });
  
  })();