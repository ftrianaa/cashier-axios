import axios from 'axios'

const apiJson = axios.create({
    baseURL: 'https://dummyjson.com',
})
export default apiJson