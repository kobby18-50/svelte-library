import axios from 'axios'

export const fetchData = async () => {
    const response = await axios.get('http://localhost:4000/api/v1/books')
    return response
}