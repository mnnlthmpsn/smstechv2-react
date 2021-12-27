import { useEffect, useState } from "react/cjs/react.development"
import { req_category_products } from "../../api/products"
import ItemCard2 from "../cards/itemCard2"

const RelatedProducts = ({ product }) => {

    const [products, setProducts] = useState([])

    useEffect(async () => {
        const { data } = await req_category_products(product?.attributes.category.data.attributes.slug)
        const filtered = data.filter(prod => prod && prod.id !== product?.id)
        setProducts(filtered)
    }, [product])

    return (
        <div className="container trending">

            <div className="row">
                {
                    products.map(prod => (
                        <div className="col-6 col-md-3" key={prod.id}>
                            <ItemCard2 product={prod} />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default RelatedProducts