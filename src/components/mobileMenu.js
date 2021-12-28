import { useContext, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import { CategoryContext } from "../contexts/categoryContext"

const MobileMenu = () => {
    const { pathname } = useLocation()
    const navLinks = [
        { path: '/', name: 'Home' },
        { path: '/about', name: 'About' },
        { path: '/services', name: 'Services' },
        { path: '/contact', name: 'Contact' }
    ]

    const { categories } = useContext(CategoryContext)

    useEffect(() => {
        const close_icon = document.getElementById('icon-close-mobile')
        close_icon.click()
    }, [pathname])

    return (
        <div className="mobile-menu-container">
            <div className="mobile-menu-wrapper">
                <span className="mobile-menu-close"><i className="icon-close" id="icon-close-mobile"></i></span>

                <form action="#" method="get" className="mobile-search">
                    <label htmlFor="mobile-search" className="sr-only">Search</label>
                    <input type="search" className="form-control" name="mobile-search" id="mobile-search" placeholder="Search in..." required />
                    <button className="btn btn-primary" type="submit"><i className="icon-search"></i></button>
                </form>

                <ul className="nav nav-pills-mobile nav-border-anim" role="tablist">
                    <li className="nav-item">
                        <a className="nav-link active" id="mobile-menu-link" data-toggle="tab" href="#mobile-menu-tab" role="tab" aria-controls="mobile-menu-tab" aria-selected="true">Menu</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" id="mobile-cats-link" data-toggle="tab" href="#mobile-cats-tab" role="tab" aria-controls="mobile-cats-tab" aria-selected="false">Categories</a>
                    </li>
                </ul>

                <div className="tab-content">
                    <div className="tab-pane fade show active" id="mobile-menu-tab" role="tabpanel" aria-labelledby="mobile-menu-link">
                        <nav className="mobile-nav">
                            <ul className="mobile-menu">
                                {
                                    navLinks.map(navLink => (
                                        <li className={pathname === navLink.path ? 'active' : undefined} key={navLink.path}>
                                            <Link to={navLink.path}>{navLink.name}</Link>
                                        </li>
                                    ))
                                }
                            </ul>
                        </nav>
                    </div>
                    <div className="tab-pane fade" id="mobile-cats-tab" role="tabpanel" aria-labelledby="mobile-cats-link">
                        <nav className="mobile-cats-nav">
                            <ul className="mobile-cats-menu">
                                {categories.map(catg => (
                                    <li key={catg?.attributes.slug}><Link to={`categories/${catg?.attributes.slug}`} state={{ categoryName: catg?.attributes.title }}>{catg?.attributes.title}</Link></li>
                                ))}                            </ul>
                        </nav>
                    </div>
                </div>

                <div className="social-icons">
                    <a href="#" className="social-icon" target="_blank" title="Facebook"><i className="icon-facebook-f"></i></a>
                    <a href="#" className="social-icon" target="_blank" title="Twitter"><i className="icon-twitter"></i></a>
                    <a href="#" className="social-icon" target="_blank" title="Instagram"><i className="icon-instagram"></i></a>
                    <a href="#" className="social-icon" target="_blank" title="Youtube"><i className="icon-youtube"></i></a>
                </div>
            </div>
        </div>
    )
}

export default MobileMenu