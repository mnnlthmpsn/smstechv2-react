import { useEffect, useState } from "react"
import { req_products } from "../../api/products"
import ItemCard from "../cards/itemCard"

const FeaturedProducts = () => {

    const [products, setProducts] = useState([])

    const getFeaturedProducts = async () => {
        const { data } = await req_products('featured')
        data && setProducts(data)
    }

    useEffect(() => {
        getFeaturedProducts()
    }, [])

    return (
        <div className="container tab-pane p-0 fade show active" id="products-featured-tab" role="tabpanel" aria-labelledby="products-featured-link">
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

export default FeaturedProducts