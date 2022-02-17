import express from "express";
import {graphqlHTTP} from 'express-graphql'
import schema from './schema.js';

const app = express()

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}))

app.listen(5000, () => {
    console.log('server running on port 5000...')
})