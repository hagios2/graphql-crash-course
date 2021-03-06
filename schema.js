// import { GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLSchema, GraphQLList, GraphQLNonNull } from "graphql";
// import axios from "axios";

import { gql } from 'apollo-server'
// //defining customer type
// const CustomerType = {
//     name: 'Customer',
//     fields: () => ({
//         id: {type: GraphQLString},
//         name: {type: GraphQLString},
//         email: {type: GraphQLString},
//         age: {type: GraphQLInt}
//     })
// }
// //root query
// const RootQuery= new GraphQLObjectType({
//     name:'RootQueryType',
//     fields:{
//         customer:{
//             type:CustomerType,
//             args:{
//                 id:{type:GraphQLString}
//             },
//             resolve(parentValue, args){
//                 /*
//                 for(let i = 0;i < customers.length;i++){
//                     if(customers[i].id == args.id){
//                         return customers[i];
//                     }
//                 }
//                 */
//                 return axios.get('http://localhost:3000/customers/'+ args.id)
//                     .then(res => res.data);

//             }
//         },
//         customers:{
//             type: new GraphQLList(CustomerType),
//             resolve(parentValue, args){
//                 return axios.get('http://localhost:3000/customers')
//                     .then(res => res.data);
//             }
//         }
//     }
// })

// // Mutations
// const mutation = new GraphQLObjectType({
//     name:'Mutation',
//     fields:{
//         addCustomer:{
//             type:CustomerType,
//             args:{
//                 name: {type: new GraphQLNonNull(GraphQLString)},
//                 email: {type: new GraphQLNonNull(GraphQLString)},
//                 age: {type: new GraphQLNonNull(GraphQLInt)}
//             },
//             resolve(parentValue, args){
//                 return axios.post('http://localhost:3000/customers', {
//                     name:args.name,
//                     email: args.email,
//                     age:args.age
//                 })
//                 .then(res => res.data);
//             }
//         },
//         deleteCustomer:{
//             type:CustomerType,
//             args:{
//                 id:{type: new GraphQLNonNull(GraphQLString)}
//             },
//             resolve(parentValue, args){
//                 return axios.delete('http://localhost:3000/customers/'+args.id)
//                 .then(res => res.data);
//             }
//         },
//         editCustomer:{
//             type:CustomerType,
//             args:{
//                 id:{type: new GraphQLNonNull(GraphQLString)},
//                 name: {type: GraphQLString},
//                 email: {type: GraphQLString},
//                 age: {type: GraphQLInt}
//             },
//             resolve(parentValue, args){
//                 return axios.patch('http://localhost:3000/customers/'+args.id, args)
//                 .then(res => res.data);
//             }
//         },
//     }
// })


// export default new GraphQLSchema({
//     query: rootQuery
// })

const typeDefs = gql`
    type Query{
        name: String,
        test: String,
        aray: [Int],
        products(filter: ProductFilterInput): [Product!]!,
        product(id: ID!): Product,
        categories: [Category],
        category(id: ID): Category,
    }

    type Product {
        id: String!,
        name: String!,
        description: String!,
        quantity: Int!,
        price: Float!,
        image: String!
        onSale: Boolean!,
        category: Category,
        reviews: [Review!]
    }

    type Category {
        id: String!,
        name: String!,
        products(filter: ProductFilterInput): [Product!]
    }

    type Review {
        id: String!,
        title: String!,
        date: String!,
        rating: Int!
        comment: String!,
        productId: String!
    },

    type Mutation {
        addCategory(input: AddCategoryInput!): Category!
    }

    input ProductFilterInput {
        onSale: Boolean
    },

    input AddCategoryInput {
        name: String!
    }
`

export default typeDefs