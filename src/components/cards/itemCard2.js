import { Link } from "react-router-dom"
import { useContext } from "react"
import { CartContext } from '../../contexts/cartContext'

const ItemCard2 = ({ product, flag }) => {

    const { calculate_discount, addToCart } = useContext(CartContext)

    return (
        <div className="product product-7 text-center h-100 w-100">
            <figure className="product-media">
                {!!flag && !!!product?.attributes.discount && <span className="product-label label-new">{flag}</span>}
                {!!product?.attributes.discount && <span className="product-label label-new"><p className="small text-white">{product?.attributes.discount}% off</p></span>}

                <Link to={`/product/${product?.attributes.slug}`} state={{ product }}>
                    <img src={product?.attributes.images.data[0].attributes.url} alt={product?.attributes.title} className="product-image" loading="lazy" />
                </Link>

                {/* <div className="product-action-vertical">
                    <span className="btn-product-icon btn-wishlist btn-expandable text-white"><span className="text-white">add to wishlist</span></span>
                </div> */}

                <div className="product-action">
                    <div className="btn-product btn-cart bg-primary cursor text-white" title="Add to cart" onClick={() => addToCart(product.id)}><span className="text-white">add to cart</span></div>
                </div>
            </figure>

            <div className="product-body">
                <div className="product-cat">
                    <Link to={`/categories/${product?.attributes.category.data.attributes.slug}`} state={{ categoryName: product?.attributes.category.data.attributes.title }}>
                        {product?.attributes.category.data.attributes.title}
                    </Link>
                </div>
                <h3 className="product-title"><Link to={`/product/${product?.attributes.slug}`} state={{ product }}>{product?.attributes.title}</Link></h3>
                <div className="product-price">
                    GHs {!!product && calculate_discount(product)}
                    <span className="text-danger small ml-1">
                        <del className="small">{product?.attributes.discount > 0 && `GHs ${product?.attributes.price}`}</del>
                    </span>
                </div>
                {/* <div className="ratings-container">
                    <div className="ratings">
                        <div className="ratings-val" style={{ width: '20%' }}></div>
                    </div>
                    <span className="ratings-text">( 2 Reviews )</span>
                </div> */}
            </div>
        </div>
    )
}

export default ItemCard2