import { GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLSchema, GraphQLList, GraphQLNonNull } from "graphql";

const customers = [
    {id: '1', name: 'John Doe', email: 'joedoe@gmail.com', age: 34},
    {id: '2', name: 'Mercy Doe', email: 'joedoe@gmail.com', age: 14},
    {id: '3', name: 'Prince Me', email: 'joedoe@gmail.com', age: 33},
    {id: '4', name: 'Bruce Wayne', email: 'joedoe@gmail.com', age: 24}
]

//defining customer type
const CustomerType = {
    name: 'Customer',
    fields: () => ({
        id: {type: GraphQLString},
        name: {type: GraphQLString},
        email: {type: GraphQLString},
        age: {type: GraphQLInt}
    })
}
//root query
const rootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
            customer:{
                type: CustomerType,
                args: {
                    id: {type: GraphQLString},
                },
                resolve(parentValue, args) {
                    for (let i = 0; i < customers.length; i++) {
                        if (customers[i].id === args.id) {
                            return customers[i]
                        }
                    }
                }
            }, 
            customers: {
                type: new GraphQLList(CustomerType),
                resolve(parentValue, args) {
                    return customers;
                }
            }
        }
    }
)
export default new GraphQLSchema({
    query: rootQuery
})