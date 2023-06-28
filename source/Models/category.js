const mongoose = require ("mongoose");

const categorySchema = mongoose.Schema({
    
    categoryname: {
        type: String,
        enum: ['Study', 'Sports', 'Leisure', 'Food', 'Entertainment'],
        required: true
    },

    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    }
},{timestamps: true })

module.exports = mongoose.model("Category", categorySchema)