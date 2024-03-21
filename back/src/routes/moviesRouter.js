const { Router } = require("express");
const moviesController = require("../controllers/moviesController");
const validateDataMiddleware = require("../middlewares/moviesMiddlewares");
const moviesRouter = Router();

moviesRouter.get("/", moviesController.getAllMovies);
moviesRouter.post("/", validateDataMiddleware, moviesController.createMovie);

module.exports = moviesRouter;
