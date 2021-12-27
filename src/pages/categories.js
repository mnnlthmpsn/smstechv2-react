import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { req_categories } from "../api/products"
import CategoryCard from "../components/cards/categoryCard"

const Categories = () => {

    const [categories, setCategories] = useState([])

    const getCategories = async () => {
        const { data } = await req_categories()
        setCategories(data)
    }

    useEffect(async () => {
        getCategories()
    }, [])

    return (
        <main className="main">
            <nav aria-label="breadcrumb" className="breadcrumb-nav mb-2">
                <div className="container">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                        <li className="breadcrumb-item active" aria-current="page">Categories</li>
                    </ol>
                </div>
            </nav>

            <div className="page-content">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="products mb-3">
                                <div className="row justify-content-start">
                                    {
                                        categories.map(category => (
                                            <div className="col-6 col-md-4 col-lg-4" key={category.attributes.slug}>
                                                {category && <CategoryCard category={category} />}
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
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

export default Categories