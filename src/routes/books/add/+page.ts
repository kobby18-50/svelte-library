// import type { BOOKS } from '../../../models/bookModel.js'

export const load = async (loadEvent) => {
   const { fetch } = loadEvent
   const response = await fetch('http://localhost:4000/api/v1/books')

   const books = await response.json()

   const categories =[...new Set(books.map((book) => book.genre))]

   // console.log(categories)

   const success = 'Book added sucessfully'
  

   return {
    categories, success, 
   }
}