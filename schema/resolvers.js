const {QuestionList}  = require('../fakeData')
const _ = require('lodash')
const mongoose = require('mongoose');
const Question = require('../mongooseSchema/Question')


const resolvers = { 
    Query: {
        questions: (parent, args)=>{
            // console.log("question")
            // console.log(QuestionList)
            async function questionFindAll() {
                const questionObject = await Question.find()
                console.log(questionObject)
                return questionObject
            }
            
            
            return QuestionList;
        }
    },
    Mutation: {
        createQuestion: (parent,args)=>{
            console.log(args)
            async function createQuestion(){
                
            }
        }
    }
}

module.exports = {resolvers}