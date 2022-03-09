// import express from "express";
// import {graphqlHTTP} from 'express-graphql'
// import schema from './schema.js';
import { ApolloServer, gql } from 'apollo-server'
import { products, reviews, categories} from './db.js'

const typeDefs = gql`
    type Query{
        name: String,
        test: String,
        aray: [Int],
        products: [Product!]!,
        product(id: ID!): Product,
        categories: [Category],
        category(id: ID): Category,
        categoryProduct(id: ID): CategoryProduct
    }

    type Product {
        id: String!,
        name: String!,
        description: String!,
        quantity: Int!,
        price: Float!,
        image: String!
        onSale: Boolean!
    }

    type Category {
        id: String!,
        name: String!
    }

    type CategoryProduct {
        id: String!,
        name: String!,
        description: String!,
        quantity: Int!,
        price: Float!,
        image: String!
        onSale: Boolean!
        categoryId: String!
    }
`

const resolvers = {
    Query: {
        products: () => {
            return products
        },

        product: (parent, args, context ) => {
            return products.find(p => p.id === args.id)
        },

        categories: () => {
            return categories
        },

        category: (parent, args, context ) => {
            return categories.find(c => c.id === args.id)
        },

        categoryProduct: (parent, args, context ) => {
            return categoryProduct.find(p => p.categoryId === args.id)
        },
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