import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://603e38c548171b0017b2ecf7.mockapi.io/',
    withCredentials: false
})

export const developmentsApi = {
    getEstate() {
        const promise = instance.get('homes');
        return promise
    },
}
