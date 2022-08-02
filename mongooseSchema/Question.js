const mongoose  = require('mongoose')

const questionSchema  = new mongoose.Schema({
    _id: String,
    problem: String,
    subject: String,
    answers: [{"index":Number, "description":String}],
    correctIndex: Number
})

module.exports = mongoose.model("Question", questionSchema);
 