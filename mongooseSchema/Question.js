const mongoose  = require('mongoose')

const questionSchema  = new mongoose.Schema({
    "id": String,
    "problem": String,
    "subject": String,
    "answers": [{"index":Number, "description":String}],
    "correctIndex": Number
})

module.exports = mongoose.model("Question", questionSchema);
 