const {gql} = require('apollo-server')

const typeDefs = gql`
    type Question {
        id: Int!
        problem: String!
        subject: Subject!
        answers: [Answer]
        correctIndex: Int
    }
    type Answer {
        index: Int
        description: String
    }



    enum Subject {
        MATH
        ENGLISH
        SCIENCE

    }
    type Query {
        questions: [Question]
    }
    type Mutation {
        createQuestion(input: CreateQuestionInput!): Question
        createQuiz(input:CreateQuizInput!): Quiz
    }
    input CreateQuizInput {
        problem: [Quiz]        
    }
    type Quiz {
        totalScore: Int
        quizItems: [QuizItem]
        
    }
    type QuizItem {
        questionId: String
        correctIndex: Int
        inputIndex: Int
    }

    input CreateQuestionInput{
        problem: String
        subject: Subject = ENGLISH
        correctIndex: Int
        answers: [AnswerInput]
    }
    input AnswerInput {
        index: Int
        description:String
        
    }


`

module.exports = {typeDefs}