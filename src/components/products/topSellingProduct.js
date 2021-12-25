import ItemCard from "../cards/itemCard"

const TopSellingProduct = () => {
    return (
        <div className="container top">
                <div className="heading heading-flex mb-3">
                    <div className="heading-left">
                        <h2 className="title">Top Selling Products</h2>
                    </div>
                </div>

                <div className="tab-content tab-content-carousel just-action-icons-sm">
                    <div className="tab-pane p-0 fade show active" id="top-all-tab" role="tabpanel" aria-labelledby="top-all-link">
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
                                    },
                                    "1200": {
                                        "items":5
                                    }
                                }
                            }'>
                            <ItemCard />
                            <ItemCard />
                            <ItemCard />
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default TopSellingProduct