const ItemCard2 = () => {
    return (
        <div className="product product-7 text-center">
            <figure className="product-media">
                <span className="product-label label-new">New</span>
                <a href="product.html">
                    <img src="/assets/images/products/product-4.jpg" alt="Product image" className="product-image" />
                </a>

                <div className="product-action-vertical">
                    <a href="#" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
                    <a href="popup/quickView.html" className="btn-product-icon btn-quickview" title="Quick view"><span>Quick view</span></a>
                    <a href="#" className="btn-product-icon btn-compare" title="Compare"><span>Compare</span></a>
                </div>

                <div className="product-action">
                    <a href="#" className="btn-product btn-cart"><span>add to cart</span></a>
                </div>
            </figure>

            <div className="product-body">
                <div className="product-cat">
                    <a href="#">Women</a>
                </div>
                <h3 className="product-title"><a href="product.html">Brown paperbag waist pencil skirt</a></h3>
                <div className="product-price">
                    $60.00
                </div>
                <div className="ratings-container">
                    <div className="ratings">
                        <div className="ratings-val" style={{ width: '20%' }}></div>
                    </div>
                    <span className="ratings-text">( 2 Reviews )</span>
                </div>
            </div>
        </div>
    )
}

export default ItemCard2