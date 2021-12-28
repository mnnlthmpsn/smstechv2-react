import { Link } from "react-router-dom"
import { useContext } from "react"
import { CartContext } from "../contexts/cartContext"

const CartWidget = () => {

    const { cartItems, calculate_discount, getTotal } = useContext(CartContext)

    return (
        <div className="dropdown cart-dropdown">
            <a href="#" className="dropdown-toggle" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-display="static">
                <div className="icon">
                    <i className="icon-shopping-cart"></i>
                    <span className="cart-count">{cartItems.length}</span>
                </div>
                <p>Cart</p>
            </a>

            <div className="dropdown-menu dropdown-menu-right">
                <div className="dropdown-cart-products">
                    {
                        cartItems.length > 0 && cartItems.map(cartItem => (
                            <div className="product" key={cartItem.id}>
                                <div className="product-cart-details">
                                    <h4 className="product-title">
                                    <Link to={`/product/${cartItem.product?.attributes.slug}`} state={{ product: cartItem.product }}>
                                        {cartItem.product.attributes.title}
                                    </Link>
                                    </h4>

                                    <span className="cart-product-info">
                                        <span className="cart-product-qty">{cartItem.qty}</span>
                                        x GHs {calculate_discount(cartItem.product)}
                                    </span>
                                </div>

                                <figure className="product-image-container">
                                    <Link to={`/product/${cartItem.product?.attributes.slug}`} state={{ product: cartItem.product }} className="product-image">
                                        <img src={cartItem.product.attributes.images.data[0].attributes.url} alt={cartItem.product.attributes.title} />
                                    </Link>
                                </figure>
                                <a href="#" className="btn-remove" title="Remove Product"><i className="icon-close"></i></a>
                            </div>
                        ))
                    }
                </div>

                <div className="dropdown-cart-total">
                    <span>Total</span>

                    <span className="cart-total-price">GHs {getTotal()}</span>
                </div>

                <div className="dropdown-cart-action">
                    <Link to='/cart' className="btn btn-primary">View Cart</Link>
                    <Link to="/checkout" className="btn btn-outline-primary-2"><span>Checkout</span><i className="icon-long-arrow-right"></i></Link>
                </div>
            </div>
        </div>
    )
}

export default CartWidget