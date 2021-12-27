import { useState } from "react"
import { Fragment, useEffect } from "react"
import { req_products } from "../../api/products"
import ItemCard from "../cards/itemCard"

const TopSellingProduct = () => {

    const [products, setProducts] = useState([])

    const getTopSellingProducts = async () => {
        const { data } = req_products('top')
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

                        <div className="d-flex">
                            {
                                products.map(product => (
                                    <div className="col-6 col-md-3" key={product.id}>
                                        <ItemCard />
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