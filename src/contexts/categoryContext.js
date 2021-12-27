import { createContext, useState } from "react";
import { req_categories } from "../api/products";

export const CategoryContext = createContext()

const CategoryContextProvider = ({ children }) => {

    const [categories, setCategories] = useState([])

    const getCategories = async () => {
        const { data } = await req_categories()
        setCategories(data)
    }

    useState(() => {
        getCategories()
    }, [])

    return (
        <CategoryContext.Provider value={{ categories }}>
            { children }
        </CategoryContext.Provider>
    )
}

export default CategoryContextProvider