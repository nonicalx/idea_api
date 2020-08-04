const mongoose = require('mongoose')


const Schema = mongoose.Schema;

const ideaSchema = new Schema({
    text:{
        type: String,
        required: true,
        trim: true
    },
    title:{
        type: String,
        trim: true
    },
    time:{
        type: Date,
        required: true
    }
}, {
    timestamps: true
});


const Idea = mongoose.model("Idea", ideaSchema);

module.exports = Idea;