export const load = async (loadEvent) => {
    const { fetch, params } = loadEvent
    const { bookID } = params
    const response = await fetch(`http://localhost:4000/api/v1/books/${bookID}`)
    const book = await response.json()

    return {
        book
    }
}