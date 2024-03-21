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

fetchMovies();
