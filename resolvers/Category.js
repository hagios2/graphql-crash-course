export default {
    products: (parent, args, { products }) => {
        return products.filter(p => p.categoryId === parent.id)
    }
}
