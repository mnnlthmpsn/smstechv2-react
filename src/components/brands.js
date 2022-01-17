import { useEffect, useState } from "react"
import { req_brands } from "../api/products"

const Brands = () => {

    const [brands, setBrands] = useState([])

    const getBrands = async () => {
        const { data } = await req_brands()
        setBrands(data)
    }

    useEffect(() => {
        getBrands()
    }, [])

    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-5">
                    <div className="brands-text">
                        <h2 className="title">Our Brands </h2>
                        <p>We offer you products from trusted International Brands</p>
                    </div>
                </div>
                <div className="col-lg-7">
                    <div className="brands-display">
                        <div className="row justify-content-center">
                            {
                                brands.length > 0 && brands.map(brand => (
                                    <div className="col-6 col-sm-4">
                                        <a href="#" className="brand">
                                            <img src="assets/images/brands/1.png" alt="Brand Name" />
                                        </a>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Brands