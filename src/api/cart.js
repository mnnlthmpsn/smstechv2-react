import axios from 'axios'
import BASE_URL from './base'

import * as qs from 'qs'

export const req_get_cart = async (user_id, token) => {
    const query = qs.stringify({
        filters: { user: { id: user_id } },
        populate: '*'
    }, { encodeValuesOnly: true })
    try {
        const { data } = await axios.get(`${BASE_URL}/carts?${query}`, { headers: { Authorization: `Bearer ${token}` } })
        return data
    } catch (err) {
        console.log(err.response)
        alert('an error occured')
    }
}

export const req_get_cart_items = async (cartID, token) => {
    const query = qs.stringify({
        filters: { cart: { id: cartID } },
        populate: { product: { populate: '*' } }
    }, { encodeValuesOnly: true })
    try {
        const { data } = await axios.get(`${BASE_URL}/cart-items?${query}`, { headers: { Authorization: `Bearer ${token}` } })
        return data.data
    } catch (err) {
        console.log(err.response)
        alert('an error occured')
    }
}

export const req_add_to_cart = async (payload, token) => {
    try {
        const { data } = await axios.post(`${BASE_URL}/cart-items`, { data: payload }, { headers: { Authorization: `Bearer ${token}` } })
        return data
    } catch (err) {
        console.log(err.response)
        alert('an error occured')
    }
}

export const req_update_cart_item = async ( cart_item_id, qty, token) => {
    try {
        const { data } = await axios.put(`${BASE_URL}/cart-items/${cart_item_id}`, { data: { quantity: qty } }, { headers: { Authorization: `Bearer ${token}` } })
        return data
    } catch (err) {
        console.log(err.response)
        alert('an eror occured')
    }
}