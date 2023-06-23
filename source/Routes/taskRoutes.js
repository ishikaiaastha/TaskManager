const express = require ("express")
const { getTask, createTask, deleteTask, updateTask } = require("../Controllers/taskController")
const auth = require("../Middlewares/auth")
const taskRouter = express.Router()

taskRouter.get("/", auth, getTask)

taskRouter.post("/", auth, createTask)

taskRouter.delete("/:id", auth, deleteTask)

taskRouter.put("/:id", auth, updateTask)



module.exports = taskRouter;