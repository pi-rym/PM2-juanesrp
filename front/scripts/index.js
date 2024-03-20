const axios = require("axios");

const crearCard = require("./crearCard");

const renderCards = (data) => {
  const contenedor = document.querySelector(".container-peliculas");

  contenedor.innerHTML = "";

  const elementosHTML = data.map((elemento) => crearCard(elemento));

  elementosHTML.forEach((elemento) => {
    contenedor.appendChild(elemento);
  });
};

const fetchMovies = async () => {
  try {
    const { data } = await axios.get("http://localhost:3000/movies");
    renderCards(data);
  } catch (error) {
    console.log(error.mesagge);
  }
};

const handlerSendForm = (event) => {
  event.preventDefault();
  //Se traen los elementos para capturar sus valores
  const inputTitle = document.getElementById("form-title");
  const inputDirector = document.getElementById("form-director");
  const inputYear = document.getElementById("form-year");
  const inputRate = document.getElementById("form-rate");
  const inputDuration = document.getElementById("form-duration");
  const inputGenre = document.getElementById("form-genre");
  const inputUrl = document.getElementById("form-poster");

  //Se capturan los valores
  const title = inputTitle.value;
  const director = inputDirector.value;
  const year = inputYear.value;
  const rate = inputRate.value;
  const duration = inputDuration.value;
  const genre = inputGenre.value;
  const url = inputUrl.value;

  if (
    title === "" ||
    director === "" ||
    year === "" ||
    rate === "" ||
    duration === "" ||
    genre === "" ||
    url === ""
  ) {
    return alert("Por favor llenar todos los campos");
  }
};

const handlerClearForm = (event) => {
  event.preventDefault();
  const form = document.getElementById("movie-form");

  form.reset();
};

fetchMovies();

const buttonSend = document.getElementById("btn-sendForm");

buttonSend.addEventListener("click", handlerSendForm);

const buttonClear = document.getElementById("btn-clearForm");

buttonClear.addEventListener("click", handlerClearForm);
