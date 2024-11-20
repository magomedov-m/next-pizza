import axios from 'axios';

export const axiosInstance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
})
console.log('API URL:', process.env.NEXT_PUBLIC_API_URL)