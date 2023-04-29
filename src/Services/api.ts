import axios from "axios"

export const api = axios.create({
    baseURL: "https://json-server-base-7f5f.onrender.com",
    timeout: 50000
})