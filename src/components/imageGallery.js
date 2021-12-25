const ImageGallery = () => {
    return (
        <div className="product-gallery product-gallery-vertical">
            <div className="row">
                <figure className="product-main-image">
                    <img id="product-zoom" src="/assets/images/products/single/1.jpg" data-zoom-image="/assets/images/products/single/1-big.jpg" alt="product image" />

                    <a href="#" id="btn-product-gallery" className="btn-product-gallery">
                        <i className="icon-arrows"></i>
                    </a>
                </figure>

                <div id="product-zoom-gallery" className="product-image-gallery">
                    <a className="product-gallery-item active" href="#" data-image="/assets/images/products/single/1.jpg" data-zoom-image="/assets/images/products/single/1-big.jpg">
                        <img src="/assets/images/products/single/1-small.jpg" alt="product side" />
                    </a>

                    <a className="product-gallery-item" href="#" data-image="/assets/images/products/single/2.jpg" data-zoom-image="/assets/images/products/single/2-big.jpg">
                        <img src="/assets/images/products/single/2-small.jpg" alt="product cross" />
                    </a>

                    <a className="product-gallery-item" href="#" data-image="/assets/images/products/single/3.jpg" data-zoom-image="/assets/images/products/single/3-big.jpg">
                        <img src="/assets/images/products/single/3-small.jpg" alt="product with model" />
                    </a>

                    <a className="product-gallery-item" href="#" data-image="/assets/images/products/single/4.jpg" data-zoom-image="/assets/images/products/single/4-big.jpg">
                        <img src="/assets/images/products/single/4-small.jpg" alt="product back" />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default ImageGallery