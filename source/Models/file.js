const mongoose = require('mongoose')

const FileSchema = mongoose.Schema({

    filename: {
        type: String
    },

    pathname: {
        type: String
    },

    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },

    logicalPath: {
        type: String
    }


},{timestamps: true})

module.exports = mongoose.model("File", FileSchema)