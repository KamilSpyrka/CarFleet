import axios from 'axios'
import store from '@/store/store'

export default () => {
    return axios.create({
        baseURL: '',
        headers: {
            Auth: `Bearer ${store.state.token}`
        }
    })
}