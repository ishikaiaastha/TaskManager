const taskModel = require ("../Models/task")
const categoryModel = require("../Models/category")

const createCategory = async (req,res) =>{

    const {categoryname} = req.body;

    const newCategory = new categoryModel({
        categoryname: categoryname,
        userId: req.userId
    })

    try {
       await newCategory.save();
       res.status(201).json({newCategory}) 
    } 
    catch (error) {
        console.log(error)
        res.status(500).json({message: "Something went wrong!"})
    }
}


const getCategory = async (req, res)=>{

    try{
        const category = await categoryModel.find({userId: req.userId})
        res.status(200).json(category)
    }
    catch(error){
        console.log(error)
        res.status(500).json({message: "Something went wrong"})
    }
}


const getTasksByCategory = async (req, res) =>{
    try{
        const tasksCountByCategory = await taskModel.aggregate([
            //{$match: {userId: req.userId}},
            {$group: { _id: '$categoryId', count: {$sum:1} }}
        ])

        res.send(tasksCountByCategory)
    }
    catch(error){
        console.log(error)
        res.status(500).json({message: "Something went wrong"})
    }

}

module.exports = {
    getTasksByCategory,
    getCategory,
    createCategory
}