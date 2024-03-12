function crearCard({ title, year, director, duration, genre, rate, poster }) {
  //Extraer sus propiedades en variables utilizando destructuring.
  //Crear los elementos HTML que formarán parte de la tarjeta. Ej: <h3> para el título, <p> para la descripción, <img> para la imagen.
  const titulo = document.createElement("h3");
  const ano = document.createElement("p");
  const directorPeli = document.createElement("p");
  const duracion = document.createElement("p");
  const genero = document.createElement("p");
  const calificacion = document.createElement("p");
  const imagen = document.createElement("img");
  const overlay = document.createElement("div");
  //Asignar los valores a las propiedades correspondientes a cada uno de los elementos. Ej: a la propiedad innerHTML del elemento del título, asignar el valor correspondiente. A la propiedad src del elemento de la imagen, asignar el valor correspondiente.
  titulo.innerHTML = title;
  ano.innerHTML = `Año: ${year}`;
  directorPeli.innerHTML = director;
  duracion.innerHTML = `Duración: ${duration}`;
  genero.innerHTML = genre;
  calificacion.innerHTML = rate;
  imagen.setAttribute("src", poster);

  //Agregar a los elementos las clases CSS correspondientes que hayas implementado para darles estilos.

  //Crear un elemento <div> que será la tarjeta donde incluiremos todos los demás elementos.
  const contenedor = document.createElement("div");

  //“Appendear” al nuevo <div> los elementos creados anteriormente .
  contenedor.appendChild(titulo);
  contenedor.appendChild(imagen);
  contenedor.appendChild(overlay);
  overlay.appendChild(directorPeli);
  overlay.appendChild(genero);
  overlay.appendChild(calificacion);
  overlay.appendChild(ano);
  overlay.appendChild(duracion);

  //Asignar al <div> la clase CSS que tengas implementada para darle estilos.
  contenedor.classList.add("card", "col-3", "p-0", "mx-4", "border-0");
  imagen.classList.add("card-img-top");
  titulo.classList.add("card-title", "fs-4", "fs-sm-6", "fs-md-5");
  overlay.classList.add(
    "card-img-overlay",
    "text-dark",
    "d-flex",
    "flex-column",
    "justify-content-center",
    "p-0",
    "mt-auto"
  );
  calificacion.classList.add("card-text", "d-none", "calificacion-peli");
  ano.classList.add("card-text", "d-none");
  directorPeli.classList.add("card-text", "d-none");
  duracion.classList.add("card-text", "d-none");
  genero.classList.add("card-text", "d-none");
  //Retornar el <div> finalizado con todos los elementos correspondientes dentro.
  // Agregar un manejador de eventos al contenedor de actividades para delegar el clic a las tarjetas

  const calificaciones = document.querySelectorAll(".calificacion-peli");

  // Iterar sobre cada calificación para asignar la clase correspondiente
  const valor = parseFloat(calificacion.textContent);
  if (valor > 8) {
    calificacion.classList.add("verde");
  } else if (valor > 6) {
    calificacion.classList.add("amarillo");
  } else {
    calificacion.classList.add("rojo");
  }

  return contenedor;
}

module.exports = crearCard;
