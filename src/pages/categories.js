import CategoryCard from "../components/cards/categoryCard"

const Categories = () => {
    return (
        <main className="main">
            <div className="page-header text-center" style={{ backgroundImage: 'url(/assets/images/page-header-bg.jpg)' }}>
                <div className="container">
                    <h1 className="page-title">Grid 3 Columns<span>Shop</span></h1>
                </div>
            </div>
            <nav aria-label="breadcrumb" className="breadcrumb-nav mb-2">
                <div className="container">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                        <li className="breadcrumb-item"><a href="#">Shop</a></li>
                        <li className="breadcrumb-item active" aria-current="page">Grid 3 Columns</li>
                    </ol>
                </div>
            </nav>

            <div className="page-content">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="products mb-3">
                                <div className="row justify-content-start">
                                    <div className="col-6 col-md-4 col-lg-4">
                                        {/* Category Card */}
                                        <CategoryCard />
                                    </div>

                                    <div className="col-6 col-md-4 col-lg-4">
                                        {/* Category Card */}
                                        <CategoryCard />
                                    </div>

                                    <div className="col-6 col-md-4 col-lg-4">
                                        {/* Category Card */}
                                        <CategoryCard />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Categories