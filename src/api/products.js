import axios from 'axios'
import BASE_URL from './base'

import * as qs from 'qs'

const queryFilters = {
    all: {},
    trending: { is_trending: { $eq: true } },
    featured: { is_featured: { $eq: true } },
    top: { is_top: { $eq: true } },
    discounted: { discount: { $gt: 0 } },
}

export const req_categories = async () => {
    const query = qs.stringify({
        fields: ['slug', 'title'],
        populate: '*'
    }, { encodeValuesOnly: true })

    try {
        const { data } = await axios.get(`${BASE_URL}/categories?${query}`)
        return data
    } catch (err) {
        err.response && console.log(err)
    }
}

export const req_category_products = async cat_slug => {
    const query = qs.stringify({
        filters: { category: { slug: cat_slug } },
        fields: ['title', 'price', 'discount', 'slug', 'product_info'],
        populate: '*'
    })

    try {
        const { data } = await axios.get(`${BASE_URL}/products?${query}`)
        return data
    } catch (err) {
        alert('error occured')
        console.log(err.response)
    }
}

export const req_products = async flag => {
    const query = qs.stringify({
        filters: { in_stock: { $eq: true }, ...queryFilters[flag] },
        fields: ['title', 'price', 'discount', 'slug', 'product_info'],
        populate: '*'
    }, { encodeValuesOnly: true })

    try {
        const { data } = await axios.get(`${BASE_URL}/products?${query}`)
        return data
    } catch (err) {
        err.response && console.log(err)
    }
}

export const req_banners = async () => {
    const query = qs.stringify({ filters: { is_active: { $eq: true } }, populate: { image: { populate: '*' }, product: { populate: '*' } } }, { encodeValuesOnly: true })

    try {
        const { data } = await axios.get(`${BASE_URL}/banners?${query}`)
        return data
    } catch (err) {
        err.response && console.log(err)
    }
}