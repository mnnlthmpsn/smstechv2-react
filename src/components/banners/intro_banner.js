import { useEffect, useState, useCallback } from 'react'
import { Link } from 'react-router-dom'
import { req_products } from '../../api/products'

const IntroBanners = () => {

    const [banners, setBanners] = useState({
        top: {},
        trending: {},
        featured: {}
    })

    const getBanners = useCallback(async () => {
        const top = await req_products('top')
        const trending = await req_products('trending')
        const all = await req_products('')

        const all_dt = all.data[Math.floor(Math.random() * all.data.length)]
        const top_dt = top.data[Math.floor(Math.random() * top.data.length)]
        const tr_dt = trending.data[Math.floor(Math.random() * trending.data.length)]

        setBanners({
            ...banners,
            top: top_dt ? top_dt : all_dt,
            trending: tr_dt ? tr_dt : all_dt
        })

    }, [])

    useEffect(() => {
        getBanners()
    }, [])

    return (
        <div className="intro-banners">

            {/* top */}
            <div className="banner mb-lg-1 mb-xl-2">
                <Link to={`/product/${banners.top.attributes?.slug}`} state={{ product: banners.top }}>
                    <img className='banner-image' src={banners.top.attributes?.banner_img.data.attributes.url} alt="Banner" />
                </Link>

                <div className="banner-content">
                    <h4 className="banner-subtitle d-lg-none d-xl-block">
                        <Link to={`/categories/${banners.top.attributes?.category.data.attributes.slug}`} state={{ categoryName: banners.top.attributes?.category.data.attributes.title }}>
                            {banners.top.attributes?.category.data.attributes.title}
                        </Link>
                    </h4>
                    <h3 className="banner-title">
                        <Link to={`/product/${banners.top.attributes?.slug}`} state={{ product: banners.top }}>
                            {banners.top.attributes?.title}
                        </Link>
                    </h3>
                    <Link to={`/product/${banners.top.attributes?.slug}`} state={{ product: banners.top }} className="banner-link">
                        Shop Now<i className="icon-long-arrow-right"></i>
                    </Link>
                </div>
            </div>

            {/* trending */}
            <div className="banner mb-0">
                <Link to={`/product/${banners.trending.attributes?.slug}`} state={{ product: banners.trending }}>
                    <img class="banner-image" src={banners.trending.attributes?.banner_img.data.attributes.url} alt="Banner" />
                </Link>

                <div className="banner-content">
                    <h4 className="banner-subtitle d-lg-none d-xl-block">
                        <Link to={`/categories/${banners.trending.attributes?.category.data.attributes.slug}`} state={{ categoryName: banners.trending.attributes?.category.data.attributes.title }}>
                            {banners.trending.attributes?.category.data.attributes.title}
                        </Link>
                    </h4>
                    <h3 className="banner-title">
                        <Link to={`/product/${banners.trending.attributes?.slug}`} state={{ product: banners.trending }}>
                            {banners.trending.attributes?.title}
                        </Link>
                    </h3>
                    <Link to={`/product/${banners.trending.attributes?.slug}`} state={{ product: banners.trending }} className="banner-link">
                        Shop Now<i className="icon-long-arrow-right"></i>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default IntroBanners