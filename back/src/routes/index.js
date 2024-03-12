const { Router } = require("express");
const testController = require("../controllers/index");
const moviesRouter = require("./moviesRouter");

const router = Router();

router.get("/", testController);

router.use("/movies", moviesRouter);

module.exports = router;
