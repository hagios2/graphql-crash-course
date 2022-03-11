export default {
    products: () => {
        return products
    },

    product: (parent, { id }, { products} ) => {
        return products.find(p => p.id === id)
    },

    categories: () => {
        return categories
    },

    category: (parent, { id }, { categories } ) => {
        return categories.find(c => c.id === id)
    }
}