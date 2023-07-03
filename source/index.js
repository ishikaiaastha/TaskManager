const express = require ("express");
const rateLimit = require("express-rate-limit");
const userRouter = require("./Routes/userRoutes");
const taskRouter = require("./Routes/taskRoutes");
const app = express();

const mongoose = require("mongoose");
const categoryRouter = require("./Routes/categoryRoutes");
const fileRouter = require("./Routes/fileRoutes");

app.use(express.json())

const limiter = rateLimit({
    windowMs: 1 * 60 * 1000,
    max: 10,
    message: " Too many requests, Don't create tasks, try after 1 minute. ",

})

app.use("/task", limiter)

app.use("/users", userRouter)
app.use("/task", taskRouter)
app.use("/category", categoryRouter)
app.use("/file", fileRouter )

mongoose.connect("mongodb+srv://admin:91HytN6nmd4DhBwh@cluster0.jhhduzr.mongodb.net/?retryWrites=true&w=majority")
.then(() =>{
    app.listen(3000, () => {
        console.log("server started at port no. 3000");
    })

})

.catch((error)=>{
    console.log(error)
})


