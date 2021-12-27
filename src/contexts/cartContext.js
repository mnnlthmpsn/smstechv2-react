import { createContext } from "react";

export const CartContext = createContext()

const CartContextProvider = ({ children }) => {

    const calculate_discount = product => {
        let amt_to_sub = (product.attributes.discount / 100) * product.attributes.price
        return product.attributes.price - amt_to_sub
    }

    return (
        <CartContext.Provider value={{ calculate_discount }}>
            { children }
        </CartContext.Provider>
    )
}

export default CartContextProvider