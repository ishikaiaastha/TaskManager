const express = require ("express")
const { getTask, createTask, deleteTask, updateTask, getTasksByStatus, getTasksByStatusAndCategory } = require("../Controllers/taskController")
const auth = require("../Middlewares/auth")
const taskRouter = express.Router()

taskRouter.get("/", auth, getTask)

taskRouter.post("/", auth, createTask)

taskRouter.delete("/:id", auth, deleteTask)

taskRouter.put("/:id", auth, updateTask)

taskRouter.get("/Status", auth, getTasksByStatus)

taskRouter.get("/StatusAndCategory", auth, getTasksByStatusAndCategory)

module.exports = taskRouter;