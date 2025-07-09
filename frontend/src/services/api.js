import axios from "axios"

// https://petshop-back.onrender.com
// http://localhost:8000

const api = axios.create({
    baseURL: "http://127.0.0.1:8000/api"
})

export default api