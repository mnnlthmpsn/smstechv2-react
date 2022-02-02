import { useState } from "react"

const ImageGallery = ({ images }) => {

    const [active, setActive] = useState(images[0].attributes.url)

    return (
        <div className="product-gallery product-gallery-vertical">
            <div className="row">
                <figure className="product-main-image">
                    <img className="selected_image" id="product-zoom" src={active} data-zoom-image={active} alt="product image" />
                </figure>

                <div id="product-zoom-gallery" className="product-image-gallery">
                    {
                        images.map(image => (
                            <span onClick={() => setActive(image.attributes.url)} className={`product-gallery-item cursor ${image.attributes.url === active ? 'active' : undefined}`} data-image="/assets/images/products/single/1.jpg" data-zoom-image="/assets/images/products/single/1-big.jpg" key={image.id}>
                                <img className="image_thumbnail" src={image.attributes.url} alt="product side" />
                            </span>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default ImageGallery