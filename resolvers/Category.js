import { products } from '../db.js'

export default {
    products: (parent, args, context) => {
        return products.filter(p => p.categoryId === parent.id)
    }
}
