// import express from "express";
// import {graphqlHTTP} from 'express-graphql'
// import schema from './schema.js';
import { ApolloServer, gql } from 'apollo-server'


const typeDefs = gql`
    type Query{
        name: String,
        test: String,
        aray: [Int],
        products: [Product!]!
    }

    type Product {
        name: String!,
        description: String!,
        quantity: Int!,
        price: Float!,
        onSale: Boolean!
    }
`

const resolvers = {
    Query: {
        name : () => {
            return 'Emmanuel'
        },

        test: () => {
            return 'Test of time'
        },

        aray: () => {
            return [12, 5, 2, 67]
        },

        products: () => {
            return [
                {
                    name: "Polo Shirt",
                    description: 'this is a polo shirt',
                    price: 300.00,
                    onSale: true,
                    quantity: 5
                }
            ]
        }
    }
}

const server = new ApolloServer({
    typeDefs,
    resolvers
})

// const app = express()

// app.use('/graphql', graphqlHTTP({
//     schema,
//     graphiql: true
// }))

// app.listen(5000, () => {
//     console.log('server running on port 5000...')
// })

server.listen().then(({url}) => {
    console.log('Server is ready at', url)
})