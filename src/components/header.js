import { useContext } from "react"
import { Link, useLocation } from "react-router-dom"
import { CategoryContext } from "../contexts/categoryContext"
import { AuthContext } from "../contexts/authContext"
import CartWidget from "./cartWidget"
import Search from "./search"
import WishlistWidget from "./wishlistWidget"
import { CartContext } from "../contexts/cartContext"

const Header = () => {

    const { pathname } = useLocation()
    const { categories } = useContext(CategoryContext)
    const { isAuthenticated, logout } = useContext(AuthContext)

    const navLinks = [
        { path: '/', name: 'Home' },
        { path: '/about', name: 'About' },
        { path: '/services', name: 'Services' },
        { path: '/contact', name: 'Contact' }
    ]

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
                                    {isAuthenticated
                                        ? <li><span className="text-primary cursor" onClick={logout}>Logout</span></li>
                                        : <li><a href="#signin-modal" data-toggle="modal">Sign in / Sign up</a></li>
                                    }
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

                        <Link to="/" className="logo">
                            <img src="/assets/images/demos/demo-3/logo.png" alt="Molla Logo" width="105" height="25" />
                        </Link>
                    </div>

                    {/* search */}
                    <Search />

                    {
                        isAuthenticated && (
                            <div className="header-right">
                                {/* Wishlist */}
                                <WishlistWidget />

                                {/* cart */}
                                <CartWidget />
                            </div>
                        )
                    }
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
                                        {categories.map(catg => (
                                            <li key={catg?.attributes.slug}><Link to={`categories/${catg?.attributes.slug}`} state={{ categoryName: catg?.attributes.title }}>{catg?.attributes.title}</Link></li>
                                        ))}
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>

                    <div className="header-center">
                        <nav className="main-nav">
                            <ul className="menu sf-arrows">
                                {
                                    navLinks.map(navLink => (
                                        <li className={`megamenu-container ${pathname === navLink.path ? 'active' : undefined}`} key={navLink.path}>
                                            <Link to={navLink.path}>{navLink.name}</Link>
                                        </li>
                                    ))
                                }
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