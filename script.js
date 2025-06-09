// Carrusel de imágenes
const imagenes = [
  "images/cortina1.jpg",
  "images/cortina2.jpg",
  "images/cortina3.jpg"
];

let indice = 0;

function mostrarImagen() {
  const imagen = document.getElementById("carousel-image");
  imagen.src = imagenes[indice];
}

function siguienteImagen() {
  indice = (indice + 1) % imagenes.length;
  mostrarImagen();
}

function anteriorImagen() {
  indice = (indice - 1 + imagenes.length) % imagenes.length;
  mostrarImagen();
}

setInterval(siguienteImagen, 5000); // Cambia cada 5 segundos
