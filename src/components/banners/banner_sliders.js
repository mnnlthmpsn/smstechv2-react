const BannerSliders = () => {
    return (
        <div className="intro-slider-container slider-container-ratio mb-2 mb-lg-0">
            <div className="intro-slider owl-carousel owl-simple owl-dark owl-nav-inside" data-toggle="owl" data-owl-options='{
                                        "nav": false, 
                                        "dots": true,
                                        "responsive": {
                                            "768": {
                                                "nav": true,
                                                "dots": false
                                            }
                                        }
                                    }'>
                <div className="intro-slide">
                    <figure className="slide-image">
                        <picture>
                            <source media="(max-width: 480px)" srcset="/assets/images/demos/demo-3/slider/slide-1-480w.jpg" />
                            <img src="/assets/images/demos/demo-3/slider/slide-1.jpg" alt="Image Desc" />
                        </picture>
                    </figure>

                    <div className="intro-content">
                        <h3 className="intro-subtitle text-primary">Daily Deals</h3>
                        <h1 className="intro-title">
                            AirPods <br />Earphones
                        </h1>

                        <div className="intro-price">
                            <sup>Today:</sup>
                            <span className="text-primary">
                                $247<sup>.99</sup>
                            </span>
                        </div>

                        <a href="category.html" className="btn btn-primary btn-round">
                            <span>Click Here</span>
                            <i className="icon-long-arrow-right"></i>
                        </a>
                    </div>
                </div>

                <div className="intro-slide">
                    <figure className="slide-image">
                        <picture>
                            <source media="(max-width: 480px)" srcset="/assets/images/demos/demo-3/slider/slide-2-480w.jpg" />
                            <img src="/assets/images/demos/demo-3/slider/slide-2.jpg" alt="Image Desc" />
                        </picture>
                    </figure>

                    <div className="intro-content">
                        <h3 className="intro-subtitle text-primary">Deals and Promotions</h3>
                        <h1 className="intro-title">
                            Echo Dot <br />3rd Gen
                        </h1>

                        <div className="intro-price">
                            <sup className="intro-old-price">$49,99</sup>
                            <span className="text-primary">
                                $29<sup>.99</sup>
                            </span>
                        </div>

                        <a href="category.html" className="btn btn-primary btn-round">
                            <span>Click Here</span>
                            <i className="icon-long-arrow-right"></i>
                        </a>
                    </div>
                </div>
            </div>

            <span className="slider-loader"></span>
        </div>
    )
}

export default BannerSliders