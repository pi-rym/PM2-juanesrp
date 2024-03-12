const axios = require("axios");

const crearCard = require("./crearCard");

const renderCards = () => {};

const fetchMovies = async () => {
  try {
    const data = await axios.get("https://students-api.up.railway.app/movies");
    const contenedor = document.querySelector(".container-peliculas");

    contenedor.innerHTML = "";

    const elementosHTML = data.data.map((elemento) => crearCard(elemento));

    elementosHTML.forEach((elemento) => {
      contenedor.appendChild(elemento);
    });
  } catch (error) {
    console.log(error.mesagge);
  }
};

fetchMovies();
