module.exports = {
  entry: {
    index: "./scripts/index.js",
    movie: "./scripts/crearMovie.js",
  },
  output: {
    path: __dirname + "/public",
    filename: "[name].js",
  },
};
