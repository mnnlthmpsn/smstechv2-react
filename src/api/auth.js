import axios from 'axios'
import BASE_URL from './base'

// temporarily
const _add_cart = async () => {
    try {
        const { data } = await axios.post(`${BASE_URL}/carts`, { data: {} })
        return data.data.id
    } catch (err) {
        err.response && console.log(err.response)
    }
}

const _add_wishlist = async () => {
    try {
        const { data } = await axios.post(`${BASE_URL}/wishlists`, { data: {} })
        return data.data.id
    } catch (err) {
        err.response && console.log(err.response)
    }
}

export const req_login = async payload => {
    try {
        const { data } = await axios.post(`${BASE_URL}/auth/local`, payload)
        return data
    } catch (err) {
        alert('error occured')
    }
}

export const req_sign_up = async payload => {
    try {
        // create cart for user (fix this later)
        const cart_id = await _add_cart()
        const wishlist_id = await _add_wishlist()

        const pd = { ...payload, cart: cart_id, wishlist: wishlist_id }
        const { data } = await axios.post(`${BASE_URL}/auth/local/register`, pd)
        return data
    } catch (err) {
        err.response && console.log(err.response)
    }
}