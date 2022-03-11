// import express from "express";
// import {graphqlHTTP} from 'express-graphql'
import typeDefs from './schema.js';
import { ApolloServer, gql } from 'apollo-server'
// import { products, reviews, categories} from './db.js'
import Product from './resolvers/Product.js'
import Category from './resolvers/Category.js'
import Query from './resolvers/Query.js'



const server = new ApolloServer({
    typeDefs,
    resolvers: {
        Product,
        Query,
        Category
    } 
})


server.listen().then(({url}) => {
    console.log('Server is ready at', url)
})