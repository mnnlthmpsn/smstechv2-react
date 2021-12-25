import ItemCard from "../cards/itemCard"

const TrendingProducts = () => {
    return (
        <div className="container trending">

            <div className="row">
                <div className="col-xl-5col d-none d-xl-block">
                    <div className="banner">
                        <a href="#">
                            <img src="/assets/images/demos/demo-3/banners/banner-4.jpg" alt="banner" />
                        </a>
                    </div>
                </div>

                <div className="col-xl-4-5col">
                    <div className="tab-content tab-content-carousel just-action-icons-sm">
                        <div className="tab-pane p-0 fade show active" id="trending-all-tab" role="tabpanel" aria-labelledby="trending-all-link">
                            <div className="owl-carousel owl-full carousel-equal-height carousel-with-shadow" data-toggle="owl"
                                data-owl-options='{
                                        "nav": true, 
                                        "dots": false,
                                        "margin": 20,
                                        "loop": false,
                                        "responsive": {
                                            "0": {
                                                "items":2
                                            },
                                            "480": {
                                                "items":2
                                            },
                                            "768": {
                                                "items":3
                                            },
                                            "992": {
                                                "items":4
                                            }
                                        }
                                    }'>
                                        <ItemCard />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TrendingProducts