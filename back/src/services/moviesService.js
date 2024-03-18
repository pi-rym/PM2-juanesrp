const movie = require("../models/Movie");

module.exports = {
  getMovies: async () => {
    const movies = await movie.find();
    return movies;
  },
};
