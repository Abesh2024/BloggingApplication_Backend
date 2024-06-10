const mongoose = require("mongoose");

const postingSchema = new mongoose.Schema({
    title: {
        type: String,
        require: true
    },
    description: {
        type: String,
        require: true
    },
    tag: {
        type: String,
        require: true
    },
    userId: {
        type: mongoose.Types.ObjectId,
        ref: "user",
    },
    comments: [
        {
            comment: {
                type: String,
            },
            userId: {
                type: mongoose.Types.ObjectId,
            }
        }
    ]
})

const postingModel = mongoose.model("postings", postingSchema)
module.exports = postingModel;