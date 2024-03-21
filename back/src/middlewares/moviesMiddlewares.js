const validateDataMiddleware = (req, res, next) => {
  const { title, director, year, rate, duration, poster, genre } = req.body;

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
    return res.status(400).json({ error: "Todos los campos son obligatorios" });
  }
  const currentYear = new Date().getFullYear;

  if (isNaN(year) || year > currentYear || year < 1890) {
    return res.status(400).json({
      error: "El año se debe de encontrar entre 1890 y el año actual",
    });
  }

  if (rate < 1 || rate > 10) {
    return res
      .status(400)
      .json({ error: "La calificación se debe de encontrar entre 1 y 10" });
  }
  next();
};

module.exports = validateDataMiddleware;
