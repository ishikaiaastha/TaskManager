const taskModel = require ("../Models/task")

const createTask = async (req, res) =>{
    const {taskname, description, taskduration, start_time, Status} = req.body;

    const newTask = new taskModel({
        taskname: taskname,
        description: description,
        taskduration: taskduration,
        start_time: start_time,
        userId : req.userId,
        categoryId: req.body.categoryId,
        Status: Status
    })

    try {
        await newTask.save();
        res.status(201).json(newTask)
    } 
    
    catch (error) {
        console.log(error)
        res.status(500).json({message: "Something went wrong"})
    }
    
}

const updateTask = async (req, res) =>{
    const id = req.params.id;
    const {taskname, description} = req.body;

    const newTask = {

        taskname: taskname,
        description: description,
        userId : req.userId 
    }

    try {
        await taskModel.findByIdAndUpdate(id, newTask, {new: true});
        res.status(200).json(newTask)
    } 
    catch (error) {
        console.log(error)
        res.status(500).json({message: "Something went wrong"})
    }
    
}

const deleteTask = async (req, res) =>{
    const id = req.params.id;
    try {
        const task = await taskModel.findByIdAndRemove(id);
        res.status(202).json(task)
    } 
    catch (error) {
        console.log(error)
        res.status(500).json({message: "Something went wrong"})
    }
    
}

const getTask = async (req, res) =>{
    try {
        const task = await taskModel.find({userId: req.userId})
        res.status(200).json(task)
    } 
    catch (error) {
        console.log(error)
        res.status(500).json({message: "Something went wrong"})
    }
    
}

const getTasksByStatus = async (req, res) =>{
    try{
       const tasksCountByStatus = await taskModel.aggregate([
            //{$match: {userId: req.userId}},
            {$group: { _id: '$Status', count: {$sum:1} }}
        ]) 

        res.send(tasksCountByStatus)
    }
    catch(error){
        console.log(error)
        res.status(500).json({message: "Something went wrong"}) 
    }

}

const getTasksByStatusAndCategory = async (req, res) =>{
    try{
       const tasksCountByStatusAndCategory = await taskModel.aggregate([
            //{$match: {userId: req.userId}},
            {$group: { _id: {status: '$Status', category: '$categoryId'}, count: {$sum:1} }}
        ]) 

        res.send(tasksCountByStatusAndCategory)
    }
    catch(error){
        console.log(error)
        res.status(500).json({message: "Something went wrong"}) 
    }

}

module.exports = {
    createTask,
    updateTask,
    deleteTask,
    getTask,
    getTasksByStatus,
    getTasksByStatusAndCategory
}