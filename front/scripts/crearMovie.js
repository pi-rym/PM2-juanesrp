const axios = require("axios");

const title = document.getElementById("form-title");
const director = document.getElementById("form-director");
const year = document.getElementById("form-year");
const rate = document.getElementById("form-rate");
const duration = document.getElementById("form-duration");
const url = document.getElementById("form-poster");
const genres = document.querySelectorAll("input[name='genre']");

const postMovie = async (movie) => {
  await axios
    .post("http://localhost:3000/movies", movie)
    .then((res) => {
      console.log("Película creada correctamente");
    })
    .catch((error) => {
      console.log("error al crear pelicula");
    });
};

const validateGenres = () => {
  const genresArray = [];

  for (const item of genres) {
    if (item.checked) {
      genresArray.push(item.value);
    }
  }
  return genresArray;
};

const validates = ({ title, director, year, rate, duration, url, genre }) => {
  if (isNaN(year) || year > 2024 || year < 1890) {
    alert("Ingresa un año entre 1890 y el año actual");
  }

  if (rate < 1 || rate > 10) {
    alert("Ingresa una calificación entre 1 y 10");
  }
};

const handlerSendForm = (event) => {
  event.preventDefault();
  //Se traen los elementos para capturar sus valores
  const genre = validateGenres();
  if (
    ![
      title.value.trim(),
      director.value.trim(),
      year.value,
      rate.value,
      duration.value.trim(),
      url.value,
      genre,
    ].every(Boolean)
  ) {
    return alert("Por favor llenar todos los campos");
  }

  const movie = {
    title: title.value,
    year: year.value,
    director: director.value,
    duration: duration.value,
    rate: rate.value,
    poster: url.value,
    genre: genre,
  };

  validates(movie);

  postMovie(movie);
};

const handlerClearForm = (event) => {
  const form = document.getElementById("movie-form");

  form.reset();
};

const buttonSend = document.getElementById("btn-sendForm");

buttonSend.addEventListener("click", handlerSendForm);

const buttonClear = document.getElementById("btn-clearForm");

buttonClear.addEventListener("click", handlerClearForm);
