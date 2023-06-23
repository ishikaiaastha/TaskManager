const express = require ("express");
const userRouter = require("./Routes/userRoutes");
const taskRouter = require("./Routes/taskRoutes");
const app = express();

const mongoose = require("mongoose")

app.use(express.json())

/*app.use((req, res, next) => {
    console.log("HTTP method -" + req.method + ", URL - " + req.url)
    next();
}) */

app.use("/users", userRouter)
app.use("/task", taskRouter)

mongoose.connect("mongodb+srv://admin:91HytN6nmd4DhBwh@cluster0.jhhduzr.mongodb.net/?retryWrites=true&w=majority")
.then(() =>{
    app.listen(3000, () => {
        console.log("server started at port no. 3000");
    });

})

.catch((error)=>{
    console.log(error)
})


