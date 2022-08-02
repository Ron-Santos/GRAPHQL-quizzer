const {QuestionList}  = require('../fakeData')
const _ = require('lodash')
const mongoose = require('mongoose');
const Question = require('../mongooseSchema/Question')
const { v4: uuidv4 } = require('uuid');


const resolvers = { 
    Query: {
        questions: (parent, args)=>{
            // console.log("question")
            // console.log(QuestionList)
            let output = Question.find()
            // async function questionFindAll() {
            //     const questionObject = await Question.find()
            //     console.log(questionObject)
            //     return questionObject
            // }
            console.log(output)
            return QuestionList;
        }
    },
    Mutation: {
        createQuestion: (parent,args)=>{
            const question ={}
            console.log(uuidv4())            
            question._id = uuidv4();

            question.problem = args.input.problem;
            question.subject = args.input.subject;
            question.correctIndex = args.input.correctIndex;
            question.answers= args.input.answers
            console.log(args.input.answers)
            console.log(question)
            let newQuestion = new Question(question);

            return question            
        }
    }
}

module.exports = {resolvers}