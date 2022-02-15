import axios from 'axios'
import BASE_URL from './base'

export const req_create_order = async (payload, token) => {
    try {
        return await axios.post(`${BASE_URL}/orders`, payload, { headers: { Authorization: `Bearer ${token}` } })
    } catch (err) {
        err.response && console.log(err.response)
    }
}