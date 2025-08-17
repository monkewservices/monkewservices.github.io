const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const closeBtn = document.querySelector('.close');

function openLightbox(img) {
  lightbox.classList.add('active');
  lightboxImg.src = img.src;
}

// Toggle zoom al hacer click en la imagen
lightboxImg.addEventListener('click', () => {
  if (lightboxImg.style.transform === 'scale(1.5)') {
    lightboxImg.style.transform = 'scale(1)';
    lightboxImg.style.cursor = 'zoom-in';
  } else {
    lightboxImg.style.transform = 'scale(1.5)';
    lightboxImg.style.cursor = 'zoom-out';
  }
});

// Cierra lightbox al hacer click fuera de la imagen o en el botón
function closeLightbox(e) {
  if (e.target === lightbox || e.target === closeBtn) {
    lightbox.classList.remove('active');
    lightboxImg.style.transform = 'scale(1)'; // reset zoom
    lightboxImg.style.cursor = 'zoom-in';
  }
}

lightbox.addEventListener('click', closeLightbox);
closeBtn.addEventListener('click', closeLightbox);


/* function openLightbox(img) {
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");

  lightbox.classList.add("active");
  lightboxImg.src = img.src;
}

function closeLightbox() {
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");

  lightbox.classList.remove("active");
  lightboxImg.src = ""; // limpia la imagen al cerrar
} */

