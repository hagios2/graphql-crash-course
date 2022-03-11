import { categories } from '../db.js'

export default {
    category: (parent, args, context) => {
        return categories.find(c => c.id === parent.categoryId)
    }
}