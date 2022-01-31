import BannerSliders from "../components/banners/banner_sliders"
import IntroBanners from "../components/banners/intro_banner"
import Brands from "../components/brands"
import CallToAction from "../components/callToAction"
import DealsWidget from "../components/dealsWidget"
import DiscountedProducts from "../components/products/discountedProducts"
import FeaturedProducts from "../components/products/featuredProducts"
import TopSellingProduct from "../components/products/topSellingProduct"
import TrendingProducts from "../components/products/trendingProducts"
import SocialWidget from "../components/socialWidget"

const Index = () => {
    return (
        <main className="main">
            <div className="intro-section pt-3 pb-3 mb-2">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            {/* Banner sliders */}
                            <BannerSliders />
                        </div>

                        <div className="col-lg-4">
                            {/* intro banners */}
                            <IntroBanners />
                        </div>
                    </div>
                </div>
            </div>

            <div className="container featured">
                <ul className="nav nav-pills nav-border-anim nav-big justify-content-center mb-3" role="tablist">
                    <li className="nav-item">
                        <a className="nav-link active" id="products-featured-link" data-toggle="tab" href="#products-featured-tab" role="tab" aria-controls="products-featured-tab" aria-selected="true">Featured</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" id="products-discount-link" data-toggle="tab" href="#products-discount-tab" role="tab" aria-controls="products-discount-tab" aria-selected="false">Discounts</a>
                    </li>
                </ul>

                <div className="tab-content tab-content-carousel">
                    {/* FeaturedProducts */}
                    <FeaturedProducts />
                    
                    {/* discounted */}
                    <DiscountedProducts />
                </div>
            </div>

            <div className="mb-7 mb-lg-11"></div>

            {/* call to action */}
            <CallToAction />

            {/* deals */}
            {/* <DealsWidget /> */}

            {/* brands */}
            {/* <Brands /> */}

            <div className="container">
                <hr className="mt-3 mb-6" />
            </div>

            {/* trending products */}
            <TrendingProducts />

            <div className="container">
                <hr className="mt-5 mb-6" />
            </div>

            {/* top selling product */}
            <TopSellingProduct />

            <div className="container">
                <hr className="mt-5 mb-0" />
            </div>

            {/* brands */}
            <Brands />

            <div className="container">
                <hr className="mt-5 mb-0" />
            </div>

            <iframe className="vw-100 overflow-hidden" style={{ height: '100vh' }} src='https://partnerportal.sophos.com/en-us/microsite/overview.aspx?partner_referral_id=001j0000013684E&partner_name=SMS+TECHSYSTEMS' frameborder='0'></iframe>



            {/* social */}
            <SocialWidget />
        </main>
    )
}

export default Index