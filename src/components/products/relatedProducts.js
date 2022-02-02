import { useEffect, useState, Fragment } from "react"
import { req_category_products } from "../../api/products"
import ItemCard2 from "../cards/itemCard2"

const RelatedProducts = ({ product }) => {

    const [products, setProducts] = useState([])

    const getCategoryProducts = async () => {
        const { data } = await req_category_products(product?.attributes.category.data.attributes.slug)
        const filtered = data.filter(prod => prod && prod.id !== product?.id)
        setProducts(filtered)
    }

    useEffect(() => {
        getCategoryProducts()
    }, [product])

    return (
        <Fragment>
            {
                products.length > 0 && (
                    <Fragment>
                        <h2 className="title text-center mb-2">You May Also Like</h2>
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
                    </Fragment>
                )
            }
        </Fragment>
    )
}

export default RelatedProducts