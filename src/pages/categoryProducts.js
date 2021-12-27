import { Link, useLocation, useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { req_category_products } from "../api/products"
import ItemCard2 from "../components/cards/itemCard2"
import Filter from "../components/filter"

const CategoryProducts = () => {

    const [products, setProducts] = useState([])

    const params = useParams()
    const { state } = useLocation()

    const getCategoryProducts = async () => {
        const { data } = await req_category_products(params.cat_slug)
        setProducts(data)
    }

    useEffect(() => {
        getCategoryProducts()
    }, [])

    return (
        <main className="main">
            <nav aria-label="breadcrumb" className="breadcrumb-nav mb-2">
                <div className="container">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                        <li className="breadcrumb-item"><Link to="/categories">Categories</Link></li>
                        <li className="breadcrumb-item active" aria-current="page">{state.categoryName}</li>
                    </ol>
                </div>
            </nav>

            <div className="page-content">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-9">
                            <div className="products mb-3">
                                <div className="row justify-content-center">
                                    {
                                        products.map(product => (
                                            <div className="col-6 col-md-4 col-lg-4" key={product.id}>
                                                <ItemCard2 product={product} />
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                        </div>

                        {/* Filter */}
                        {/* <Filter /> */}
                    </div>
                </div>
            </div>

            <div className="page-header text-center" style={{ backgroundImage: 'url(/assets/images/page-header-bg.jpg)' }}>
                <div className="container">
                    <h1 className="page-title">Advert here</h1>
                </div>
            </div>
        </main>
    )
}

export default CategoryProducts