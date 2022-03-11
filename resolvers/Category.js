export default {
    products: ( { id: categoryId }, args, { products }) => {
        return products.filter(p => p.categoryId === categoryId)
    }
}
