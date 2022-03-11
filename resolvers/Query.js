export default {
    products: () => {
        return products
    },

    product: (parent, args, { products} ) => {
        return products.find(p => p.id === args.id)
    },

    categories: () => {
        return categories
    },

    category: (parent, args, { categories } ) => {
        return categories.find(c => c.id === args.id)
    }
}