const moviesService = require("../services/moviesService");

module.exports = {
  getAllMovies: async (req, res) => {
    try {
      const movies = await moviesService.getMovies();
      res.status(200).json(movies);
    } catch (error) {
      res.status(500).json({ error: "Error interno del servidor " });
    }
  },

  createMovie: async (req, res) => {
    try {
      await moviesService.postMovies(req.body);
      res.status(201).json("Película creada exitosamente");
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },
};
