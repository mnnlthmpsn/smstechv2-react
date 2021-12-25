const ItemCard = () => {
    return (
        <div className="product product-2">
            <figure className="product-media">
                <span className="product-label label-circle label-top">Top</span>
                <a href="product.html">
                    <img src="/assets/images/demos/demo-3/products/product-11.jpg" alt="Product image" className="product-image" />
                </a>

                <div className="product-action-vertical">
                    <a href="#" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
                </div>

                <div className="product-action product-action-dark">
                    <a href="#" className="btn-product btn-cart" title="Add to cart"><span>add to cart</span></a>
                    <a href="popup/quickView.html" className="btn-product btn-quickview" title="Quick view"><span>quick view</span></a>
                </div>
            </figure>

            <div className="product-body">
                <div className="product-cat">
                    <a href="#">Laptops</a>
                </div>
                <h3 className="product-title"><a href="product.html">MacBook Pro 13" Display, i5</a></h3>
                <div className="product-price">
                    $1,199.99
                </div>
                <div className="ratings-container">
                    <div className="ratings">
                        <div className="ratings-val" style={{ width: '100%' }}></div>
                    </div>
                    <span className="ratings-text">( 4 Reviews )</span>
                </div>
            </div>
        </div>
    )
}

export default ItemCard