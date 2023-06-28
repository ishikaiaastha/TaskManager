const express = require ("express");
const { getTasksByCategory, createCategory, getCategory } = require("../Controllers/categoryController");
const auth = require("../Middlewares/auth");

const categoryRouter = express.Router();

categoryRouter.post("/", auth ,createCategory)
categoryRouter.get("/", auth, getCategory)
categoryRouter.get("/taskByCategory",auth, getTasksByCategory)


//categoryRouter.get("/StatusAndCategory", auth, {async function})

module.exports = categoryRouter;