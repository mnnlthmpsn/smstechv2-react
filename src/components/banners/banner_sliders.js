import { useContext, useEffect, useState } from "react"
import { CartContext } from '../../contexts/cartContext'
import Slider from 'react-animated-slider'
import 'react-animated-slider/build/horizontal.css';
import { req_banners } from "../../api/products"
import { Link } from "react-router-dom";

const BannerSliders = () => {

    const [banners, setBanners] = useState([])
    const { calculate_discount } = useContext(CartContext)

    const getBanners = async () => {
        const { data } = await req_banners()
        setBanners(data)
    }

    useEffect(() => {
        getBanners()
    }, [])

    return (
        <div className="mb-2 mb-lg-0">
            <Slider autoplay={3000}>
                {banners.map(banner => (
                    <div key={banner.id}>
                        <figure>
                            <picture>
                                <source media="(max-width: 480px)" srcSet="/assets/images/demos/demo-3/slider/slide-1-480w.jpg" />
                                <img src={banner.attributes?.image.data.attributes.url} alt="Image Desc" />
                            </picture>
                        </figure>

                        <div className="intro-content">
                            <h2 className="intro-subtitle sec_color">{banner.attributes?.title}</h2>
                            <h2 className="intro-title sec_color">{banner.attributes?.product.data.attributes.title}</h2>

                            <div className="intro-price">
                                <sup>GHS </sup>
                                <span className="text-primary">
                                    {calculate_discount(banner.attributes?.product.data)}
                                    <span className="text-danger small ml-1">
                                        <del className="small">{banner.attributes?.product.data.attributes.discount > 0 && `GHs ${banner.attributes?.product.data.attributes.price}`}</del>
                                    </span>
                                </span>
                            </div>

                            <Link to={`/product/${banner.attributes?.product.data.attributes.slug}`} state={{ product: banner.attributes?.product.data }} className="btn btn-primary btn-round">
                                <span>Shop Now</span>
                                <i className="icon-long-arrow-right"></i>
                            </Link>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    )
}

export default BannerSliders