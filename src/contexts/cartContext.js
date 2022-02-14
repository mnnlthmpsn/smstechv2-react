import { createContext, useContext, useState, useEffect, useCallback } from "react";
import { req_add_to_cart, req_get_cart, req_get_cart_items, req_update_cart_item } from "../api/cart";
import { AuthContext } from './authContext'

export const CartContext = createContext()

const CartContextProvider = ({ children }) => {

    const [cartID, setCartID] = useState('')
    const [jwt_tk, setJwtTk] = useState('')
    const [cartItems, setCartItems] = useState([])
    const { isAuthenticated, getPayload } = useContext(AuthContext)

    const calculate_discount = product => {
        let amt_to_sub = (product?.attributes.discount / 100) * product.attributes.price
        return product.attributes.price - amt_to_sub
    }

    const getCart = useCallback(async () => {
        // 1st get Cart which belongs to currently logged in user
        const { jwt, user } = getPayload()
        setJwtTk(jwt)
        const { data } = await req_get_cart(user.id, jwt)
        setCartID(data[0].id)

        // 2nd get cartItems with cartID data[0].id
        const res = await req_get_cart_items(data[0].id, jwt)
        const new_arr = res.map(cit => {
            return { id: cit.id, qty: cit.attributes.quantity, product: cit.attributes.product.data }
        })
        setCartItems(new_arr)
    }, [isAuthenticated])

    const itemExists = prod_id => {
        const filtered = cartItems.length > 0 && cartItems.filter(cartItem => cartItem && cartItem.product.id === prod_id)

        if (filtered.length > 0) {
            alert('item already exists')
            return true
        }

        return false
    }

    const addToCart = async (prod_id, qty) => {
        if (isAuthenticated) {
            const payload = {
                cart: cartID,
                quantity: qty || 1,
                product: prod_id
            }
            const res = !itemExists(prod_id) && await req_add_to_cart(payload, jwt_tk)
            res.data && getCart()
        } else {
            alert('login to continue')
        }
    }

    const getTotal = () => {
        return cartItems.reduce((a, b) => {
            return a + (calculate_discount(b?.product) * b.qty)
        }, 0)
    }

    const inc_dec_qty = async (cart_item_id, qty) => {
        await req_update_cart_item(cart_item_id, qty, jwt_tk)
        getCart()
    }

    useEffect(() => {
        isAuthenticated && getCart()
    }, [isAuthenticated])

    return (
        <CartContext.Provider value={{ calculate_discount, cartItems, addToCart, getTotal, inc_dec_qty }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider