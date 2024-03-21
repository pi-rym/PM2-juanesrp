const axios = require("axios");

const postMovie = async (movie) => {
  try {
    await axios.post("http://localhost:3000/movies", movie);
    alert("La película ha sido creada");
  } catch (error) {
    console.log("error al crear pelicula");
  }
};

const validateGenres = () => {
  const genres = document.querySelectorAll("input[name='genre']");
  const genresArray = [];

  for (const item of genres) {
    if (item.checked) {
      genresArray.push(item.value);
    }
  }
  return genresArray;
};

const validates = ({
  title,
  director,
  year,
  rate,
  duration,
  poster,
  genre,
}) => {
  if (
    ![
      title.trim(),
      director.trim(),
      year,
      rate,
      duration.trim(),
      poster,
      genre,
    ].every(Boolean)
  ) {
    alert("Por favor llenar todos los campos");
    return false;
  }

  if (isNaN(year) || year > 2024 || year < 1890) {
    alert("Ingresa un año entre 1890 y el año actual");
    return false;
  }

  if (rate < 1 || rate > 10) {
    alert("Ingresa una calificación entre 1 y 10");
    return false;
  }
  return true;
};

const handlerSendForm = (event) => {
  event.preventDefault();
  //Se traen los elementos para capturar sus valores
  const title = document.getElementById("form-title");
  const director = document.getElementById("form-director");
  const year = document.getElementById("form-year");
  const rate = document.getElementById("form-rate");
  const duration = document.getElementById("form-duration");
  const url = document.getElementById("form-poster");
  const genre = validateGenres();

  const movie = {
    title: title.value,
    year: year.value,
    director: director.value,
    duration: duration.value,
    rate: rate.value,
    poster: url.value,
    genre: genre,
  };

  if (!validates(movie)) {
    return;
  }

  postMovie(movie);
};

const handlerClearForm = () => {
  const form = document.getElementById("movie-form");

  form.reset();
};

const buttonSend = document.getElementById("btn-sendForm");

buttonSend.addEventListener("click", handlerSendForm);

const buttonClear = document.getElementById("btn-clearForm");

buttonClear.addEventListener("click", handlerClearForm);
