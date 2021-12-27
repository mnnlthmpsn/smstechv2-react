import { Link, useLocation } from "react-router-dom"
import { Fragment, useContext, useEffect, useState } from "react"
import ImageGallery from "../components/imageGallery"
import RelatedProducts from "../components/products/relatedProducts"
import { CartContext } from "../contexts/cartContext"

const Product = () => {

    const [product, setProduct] = useState()

    const { state } = useLocation()
    const { calculate_discount } = useContext(CartContext)

    useEffect(() => {
        const { product } = state
        setProduct(product)
    }, [state])

    return (
        <Fragment>
            {
                product && (
                    <main className="main">
                        <nav aria-label="breadcrumb" className="breadcrumb-nav border-0 mb-0">
                            <div className="container d-flex align-items-center">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                                    <li className="breadcrumb-item"><Link to="/categories">Categories</Link></li>
                                    <li className="breadcrumb-item active" aria-current="page">{product.attributes.title}</li>
                                </ol>
                            </div>
                        </nav>

                        <div className="page-content">
                            <div className="container">
                                <div className="product-details-top">
                                    <div className="row">
                                        <div className="col-md-6">
                                            {/* image gallery */}
                                            <ImageGallery images={product.attributes.images.data} />
                                        </div>

                                        <div className="col-md-6">
                                            <div className="product-details">
                                                <h1 className="product-title">{product.attributes.title}</h1>

                                                <div className="ratings-container">
                                                    <div className="ratings">
                                                        <div className="ratings-val" style={{ width: '80%' }}></div>
                                                    </div>
                                                    <a className="ratings-text" href="#product-review-link" id="review-link">( 2 Reviews )</a>
                                                </div>

                                                <div className="product-price">
                                                    GHs {calculate_discount(product)}
                                                    <span className="text-danger small ml-1">
                                                        <del className="small">{product?.attributes.discount > 0 && `GHs ${product?.attributes.price}`}</del>
                                                    </span>
                                                </div>

                                                <div className="product-content">
                                                    <p>{product?.attributes.description}</p>
                                                </div>

                                                <div className="details-filter-row details-row-size">
                                                    <label htmlFor="qty">Qty:</label>
                                                    <div className="product-details-quantity">
                                                        <input type="number" id="qty" className="form-control" min="1" max="10" step="1" data-decimals="0" required />
                                                    </div>
                                                </div>

                                                <div className="product-details-action">
                                                    <a href="#" className="btn-product btn-cart"><span>add to cart</span></a>

                                                    <div className="details-action-wrapper">
                                                        <a href="#" className="btn-product btn-wishlist" title="Wishlist"><span>Add to Wishlist</span></a>
                                                    </div>
                                                </div>

                                                <div className="product-details-footer">
                                                    <div className="product-cat">
                                                        <span>Category:</span>
                                                        <Link to={`/categories/${product?.attributes.category.data.attributes.slug}`} state={{ categoryName: product?.attributes.category.data.attributes.title }}>
                                                            {product?.attributes.category.data.attributes.title}
                                                        </Link>
                                                    </div>

                                                    <div className="social-icons social-icons-sm">
                                                        <span className="social-label">Share:</span>
                                                        <a href="#" className="social-icon" title="Facebook" target="_blank"><i className="icon-facebook-f"></i></a>
                                                        <a href="#" className="social-icon" title="Twitter" target="_blank"><i className="icon-twitter"></i></a>
                                                        <a href="#" className="social-icon" title="Instagram" target="_blank"><i className="icon-instagram"></i></a>
                                                        <a href="#" className="social-icon" title="Pinterest" target="_blank"><i className="icon-pinterest"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="product-details-tab">
                                    <ul className="nav nav-pills justify-content-center" role="tablist">
                                        <li className="nav-item">
                                            <a className="nav-link active" id="product-desc-link" data-toggle="tab" href="#product-desc-tab" role="tab" aria-controls="product-desc-tab" aria-selected="true">Description</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" id="product-review-link" data-toggle="tab" href="#product-review-tab" role="tab" aria-controls="product-review-tab" aria-selected="false">Reviews (2)</a>
                                        </li>
                                    </ul>
                                    <div className="tab-content">
                                        <div className="tab-pane fade show active" id="product-desc-tab" role="tabpanel" aria-labelledby="product-desc-link">
                                            <div className="product-desc-content">
                                                <h3>Product Information</h3>
                                                {product?.attributes.product_info}
                                            </div>
                                        </div>
                                        <div className="tab-pane fade" id="product-review-tab" role="tabpanel" aria-labelledby="product-review-link">
                                            <div className="reviews">
                                                <h3>Reviews (2)</h3>
                                                <div className="review">
                                                    <div className="row no-gutters">
                                                        <div className="col-auto">
                                                            <h4><a href="#">Samanta J.</a></h4>
                                                            <div className="ratings-container">
                                                                <div className="ratings">
                                                                    <div className="ratings-val" style={{ width: '80%' }}></div>
                                                                </div>
                                                            </div>
                                                            <span className="review-date">6 days ago</span>
                                                        </div>
                                                        <div className="col">
                                                            <h4>Good, perfect size</h4>

                                                            <div className="review-content">
                                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus cum dolores assumenda asperiores facilis porro reprehenderit animi culpa atque blanditiis commodi perspiciatis doloremque, possimus, explicabo, autem fugit beatae quae voluptas!</p>
                                                            </div>

                                                            <div className="review-action">
                                                                <a href="#"><i className="icon-thumbs-up"></i>Helpful (2)</a>
                                                                <a href="#"><i className="icon-thumbs-down"></i>Unhelpful (0)</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="review">
                                                    <div className="row no-gutters">
                                                        <div className="col-auto">
                                                            <h4><a href="#">John Doe</a></h4>
                                                            <div className="ratings-container">
                                                                <div className="ratings">
                                                                    <div className="ratings-val" style={{ width: '100%' }}></div>
                                                                </div>
                                                            </div>
                                                            <span className="review-date">5 days ago</span>
                                                        </div>
                                                        <div className="col">
                                                            <h4>Very good</h4>

                                                            <div className="review-content">
                                                                <p>Sed, molestias, tempore? Ex dolor esse iure hic veniam laborum blanditiis laudantium iste amet. Cum non voluptate eos enim, ab cumque nam, modi, quas iure illum repellendus, blanditiis perspiciatis beatae!</p>
                                                            </div>

                                                            <div className="review-action">
                                                                <a href="#"><i className="icon-thumbs-up"></i>Helpful (0)</a>
                                                                <a href="#"><i className="icon-thumbs-down"></i>Unhelpful (0)</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <h2 className="title text-center mb-4">You May Also Like</h2>

                                {/* related Products */}
                                <RelatedProducts product={product} />
                            </div>
                        </div>
                    </main>
                )
            }
        </Fragment>
    )
}

export default Product