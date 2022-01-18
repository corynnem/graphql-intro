require('dotenv').config()
const express = require('express')

const app = express()
const { graphqlHTTP } = require('express-graphql');
const typeDefs = require('./schemas/typeDefs');
const resolvers = require('./resolvers/resolvers')
const { ApolloServer } = require('apollo-server-express');


app.use(express.json())



const server = new ApolloServer({typeDefs, resolvers})



// app.use('/graphql', graphqlHTTP({
//     schema, 
//     graphiql: true
// }))



app.listen(process.env.PORT, () => {
    console.log(`app listening on ${process.env.PORT}`)

})


    // server.listen().then(({url}) => {
    //     console.log(`🚀  Server ready at ${url}`)
    // })
    console.log(server)
    