import { Fragment, useEffect, useState } from "react"
import { req_products } from "../../api/products"
import ItemCard from "../cards/itemCard"

const TopSellingProduct = () => {

    const [products, setProducts] = useState([])

    const getTopSellingProducts = async () => {
        const { data } = await req_products('top')
        data && setProducts(data)
    }

    useEffect(() => {
        getTopSellingProducts()
    }, [])

    return (
        <Fragment>
            {
                products.length > 0 && (
                    <div className="container top">
                        <div className="heading heading-flex mb-3">
                            <div className="heading-left">
                                <h2 className="title">Top Selling Products</h2>
                            </div>
                        </div>

                        <div className="row d-flex">
                            {
                                products.map(product => (
                                    <div className="col-6 col-md-3 mb-2" key={product.id}>
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

export default TopSellingProduct