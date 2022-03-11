export default {
    products: ( { id }, { filter }, { products }) => {
        if (filter) {
            return products.filter(p => p.onSale === filter.onSale && p.categoryId === id)
        }
        return products.filter(p => p.categoryId === id)
    }
}
