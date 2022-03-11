export default {
    category: ( { categoryId } , args, { categories }) => {
        return categories.find(c => c.id === categoryId)
    }
}