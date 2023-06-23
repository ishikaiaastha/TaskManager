const mongoose = require ('mongoose')

const TaskSchema = mongoose.Schema({
    taskname: {
        type: String,
        required: true

    },

    description: {
        type: String,
        required: true
    },

    taskduration: {
        type: Number,
        required: true
    },

    start_time: {
        type: Date,
        default: Date.now
    },

    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    }
    
    

    

},{timestamps: true })

module.exports = mongoose.model("Task", TaskSchema)