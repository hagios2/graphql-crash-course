export default {
    products: ( { id }, args, { products }) => {
        return products.filter(p => p.categoryId === id)
    }
}
