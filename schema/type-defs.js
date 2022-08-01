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
    }
    input CreateQuestionInput{
        problem: String!
        subject: Subject!
        correctIndex: Int
    }


`

module.exports = {typeDefs}