import { useState } from "react"
import { Fragment, useEffect } from "react"
import { req_products } from "../../api/products"
import ItemCard from "../cards/itemCard"

const TrendingProducts = () => {

    const [products, setProducts] = useState([])

    const getTrendingProducts = async () => {
        const { data } = await req_products('trending')
        data && setProducts(data)
    }

    useEffect(() => {
        getTrendingProducts()
    }, [])

    return (
        <Fragment>
            {
                products.length > 0 && (
                    <div className="container trending">
                        <div className="heading heading-flex mb-3">
                            <div className="heading-left">
                                <h2 className="title">Trending Products</h2>
                            </div>
                        </div>

                        <div className="row d-flex">
                            {
                                products.map(product => (
                                    <div className="col-6 col-md-4" key={product.id}>
                                        <ItemCard product={product} />
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                )
            }
        </Fragment>
    )
}

export default TrendingProducts