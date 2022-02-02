import { useEffect, useState } from "react";
import { req_products } from "../../api/products";
import ItemCard from "../cards/itemCard"

const DiscountedProducts = () => {

    const [products, setProducts] = useState([])

    const getDiscountedProducts = async () => {
        const { data } = await req_products('discounted')
        data && setProducts(data)
    }

    useEffect(() => {
        getDiscountedProducts()
    }, []);

    return (
        <div className="container tab-pane p-0 fade" id="products-discount-tab" role="tabpanel" aria-labelledby="products-discount-link">
            <div className="row d-flex">
                {
                    products.length > 0 && (
                        products.map(product => (
                            <div className="col-6 col-md-3 mb-2" key={product.id}>
                                <ItemCard product={product} />
                            </div>
                        ))
                    )
                }
            </div>
        </div>
    )
}

export default DiscountedProducts