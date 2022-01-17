import { Link } from "react-router-dom"

const WishlistWidget = () => {
    return (
        <div className="wishlist">
            <Link to="wishlist" title="Wishlist">
                <div className="icon text-white">
                    <i className="icon-heart-o"></i>
                    <span className="wishlist-count badge text-primary bg-white">3</span>
                </div>
                <p className="text-white">Wishlist</p>
            </Link>
        </div>
    )
}

export default WishlistWidget