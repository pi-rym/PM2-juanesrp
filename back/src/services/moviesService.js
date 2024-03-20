const Movie = require("../models/Movie");

module.exports = {
  getMovies: async () => {
    const movies = await Movie.find();
    return movies;
  },

  postMovies: async (movie) => {
    try {
      const newMovie = await Movie.create(movie);
    } catch (error) {
      throw Error(error.message);
    }
  },
};
