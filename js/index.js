document.addEventListener("DOMContentLoaded", function () {
    const modal = document.getElementById("modalImagen");
    const modalImg = document.getElementById("imagenAmpliada");
    const cerrar = document.querySelector(".cerrar");
    const imagenes = document.querySelectorAll(".img-galeria");
  
    imagenes.forEach(img => {
      img.addEventListener("click", function () {
        modal.style.display = "block";
        modalImg.src = this.src;
      });
    });
  
    cerrar.addEventListener("click", function () {
      modal.style.display = "none";
    });
  
    // También cerrar al hacer clic fuera de la imagen
    modal.addEventListener("click", function (e) {
      if (e.target === modal) {
        modal.style.display = "none";
      }
    });
  });