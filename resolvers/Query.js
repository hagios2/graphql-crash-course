import { products, categories } from '../db.js'

export default {
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
    }
}