import axios from 'axios'

export const http = axios.create({
    baseURL: 'https://modeloproxyapi.interfocus.com.br:4443/api/',
})
