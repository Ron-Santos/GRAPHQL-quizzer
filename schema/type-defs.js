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


`

module.exports = {typeDefs}