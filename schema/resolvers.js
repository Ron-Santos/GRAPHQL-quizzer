const {QuestionList}  = require('../fakeData')
const _ = require('lodash')
const resolvers = { 
    Query: {
        questions: (parent, args)=>{
            // console.log("question")
            // console.log(QuestionList)
            return QuestionList;
        }

        



    }
}

module.exports = {resolvers}