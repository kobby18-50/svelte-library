export const load = async (loadEvent) => {
    const recent = 'Recent books'
    const { fetch } = loadEvent
    const response = await fetch('http://localhost:4000/api/v1/books')
    const bookList = await response.json()
    const categories = ['all categories', ...new Set(bookList.map((book) => book.genre))]
    return {
        categories,
        recent,
        bookList
    }
}