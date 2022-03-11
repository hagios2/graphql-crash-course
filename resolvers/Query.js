export default {
    products: (parent, { filter }, { products }) => {
        if (filter) {
            return products.filter(p => p.onSale === filter.onSale)
        }
        return products
    },
    product: (parent, { id }, { products } ) => {
        return products.find(p => p.id === id)
    },
    categories: (parent, args, context) => {
        return categories
    },
    category: (parent, { id }, { categories } ) => {
        return categories.find(c => c.id === id)
    }
}