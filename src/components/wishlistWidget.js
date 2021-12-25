const WishlistWidget = () => {
    return (
        <div className="wishlist">
            <a href="wishlist.html" title="Wishlist">
                <div className="icon">
                    <i className="icon-heart-o"></i>
                    <span className="wishlist-count badge">3</span>
                </div>
                <p>Wishlist</p>
            </a>
        </div>
    )
}

export default WishlistWidget