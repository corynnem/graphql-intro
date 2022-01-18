const { gql } = require('apollo-server-express');



const typeDefs = gql`
    type User {
        id: Int
        firstName: String
        lastName: String
        email: String
        password: String
    }

    type Ingredients {
        name: String
    }

    type Recipe {
        id: Int
        name: String
        directions: String
        timeNeeded: Int
    }

    type Query {
        users: [User]
        recipes: [Recipe]
    }
    
    type Mutation {
        createUser(firstName: String, lastName: String, email: String, password: String): User
        createRecipe(name: String, directions: String, timeNeeded: Int): Recipe
    }

    type Resolvers {
        resolvers: Mutation
    }
`


module.exports = typeDefs;