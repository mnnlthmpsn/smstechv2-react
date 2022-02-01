import { useEffect, useState } from "react"
import { req_brands } from "../api/products"

const Brands = () => {

    const [brands, setBrands] = useState([])

    const getBrands = async () => {
        const { data } = await req_brands()
        setBrands(data)
        console.log(brands)
    }

    useEffect(() => {
        getBrands()
    }, [])

    return (
        <div className="container">
            <div className="col-lg-5">
                <div className="brands-text">
                    <h2 className="title">Brands & Trusted Clients</h2>
                    <p>We offer you products from trusted International Brands</p>
                </div>
            </div>
            <div className="col-lg-12">
                <div className="brands-display">
                    <div className="row justify-content-start">
                        {
                            brands.length > 0 && brands.map((brand, index) => (
                                <div className="col-4 md:col-2" key={index}>
                                    <img className="brands" data-toggle="tooltip" data-placement="bottom" title={brand.attributes.brand_name} src={brand.attributes.image.data.attributes.url} alt={brand.attributes.brand_name} />
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Brands