const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const QuizzSchema = new mongoose.Schema({
    title : {
        type: String,
        required: [true, 'title required !']
    },
    slug : {
        type: String,
        required: [true, 'slug required !']
    },
    image : String,
    category: {
        type: Schema.Types.ObjectId,
        ref: 'Category'
    },
    questions: Array
})

const Quizz = mongoose.model('Quizz', QuizzSchema);

module.exports = Quizz;