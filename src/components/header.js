import CartWidget from "./cartWidget"
import Search from "./search"
import WishlistWidget from "./wishlistWidget"

const Header = () => {
    return (
        <header className="header header-intro-clearance header-3">
            <div className="header-top">
                <div className="container">
                    <div className="header-left">
                        <a href="tel:#"><i className="icon-phone"></i>Call: +0123 456 789</a>
                    </div>

                    <div className="header-right">

                        <ul className="top-menu">
                            <li>
                                <a href="#">Links</a>
                                <ul>
                                    <li>
                                        <div className="header-dropdown">
                                            <a href="#">USD</a>
                                            <div className="header-menu">
                                                <ul>
                                                    <li><a href="#">Eur</a></li>
                                                    <li><a href="#">Usd</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="header-dropdown">
                                            <a href="#">English</a>
                                            <div className="header-menu">
                                                <ul>
                                                    <li><a href="#">English</a></li>
                                                    <li><a href="#">French</a></li>
                                                    <li><a href="#">Spanish</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </li>
                                    <li><a href="#signin-modal" data-toggle="modal">Sign in / Sign up</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>

                </div>
            </div>

            <div className="header-middle">
                <div className="container">
                    <div className="header-left">
                        <button className="mobile-menu-toggler">
                            <span className="sr-only">Toggle mobile menu</span>
                            <i className="icon-bars"></i>
                        </button>

                        <a href="index.html" className="logo">
                            <img src="/assets/images/demos/demo-3/logo.png" alt="Molla Logo" width="105" height="25" />
                        </a>
                    </div>

                    {/* search */}
                    <Search />

                    <div className="header-right">
                        {/* Wishlist */}
                        <WishlistWidget />

                        {/* cart */}
                        <CartWidget />
                    </div>
                </div>
            </div>

            <div className="header-bottom sticky-header">
                <div className="container">
                    <div className="header-left">
                        <div className="dropdown category-dropdown">
                            <a href="#" className="dropdown-toggle" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-display="static" title="Browse Categories">
                                Browse Categories <i className="icon-angle-down"></i>
                            </a>

                            <div className="dropdown-menu">
                                <nav className="side-nav">
                                    <ul className="menu-vertical sf-arrows">
                                        <li><a href="#">Beds</a></li>
                                        <li><a href="#">Beds</a></li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>

                    <div className="header-center">
                        <nav className="main-nav">
                            <ul className="menu sf-arrows">
                                <li className="megamenu-container active">
                                    <a href="index.html">Home</a>
                                </li>
                                <li className="megamenu-container">
                                    <a href="index.html">About</a>
                                </li>
                                <li className="megamenu-container">
                                    <a href="index.html">Services</a>
                                </li>
                                <li className="megamenu-container">
                                    <a href="index.html">Contact</a>
                                </li>
                            </ul>
                        </nav>
                    </div>

                    <div className="header-right">
                        <i className="la la-lightbulb-o"></i><p>Clearance<span className="highlight">&nbsp;Up to 30% Off</span></p>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header