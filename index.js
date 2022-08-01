const {ApolloServer} = require('apollo-server');
const {typeDefs} = require('./schema/type-defs')
const {resolvers} = require('./schema/resolvers')

// Mongoose dependencies
const mongoose = require('mongoose');
const Question = require('./mongooseSchema/Question')
mongoose.connect("mongodb://localhost/graphqltest",()=>{
    console.log('connected')},
    (e)=>console.error(e)
)







const server = new ApolloServer({typeDefs, resolvers})





server.listen().then(({url}) =>{
    console.log(`API is running at port ${url}`)

})