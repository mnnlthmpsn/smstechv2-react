import { Routes, Route } from "react-router-dom";
import { Fragment } from "react";

import Index from './pages/index'
import Header from './components/header'
import Footer from "./components/footer";
import MobileMenu from "./components/mobileMenu";
import AuthModal from "./components/authModal";
import CategoryProducts from "./pages/categoryProducts";
import Product from "./pages/product";
import Categories from "./pages/categories";
import About from "./pages/about";
import NotFoundPage from "./pages/404";
import Services from "./pages/services";
import Contact from "./pages/contact";
import WishList from "./pages/wishlist";
import Dashboard from "./pages/dashboard";
import Checkout from "./pages/checkout";
import Cart from "./pages/cart";

const Layout = () => {
    return (
        <Fragment>
            <Header />
            <div className="page-wrapper">
                <Routes>
                    <Route path="/" element={<Index />} />
                    <Route path="about" element={<About />} />
                    <Route path="cart" element={<Cart />} />
                    <Route path="categories" element={<Categories />} />
                    <Route path="categories/:cat_slug" element={<CategoryProducts />} />
                    <Route path="checkout" element={<Checkout />} />
                    <Route path="contact" element={<Contact />} />
                    <Route path="dashboard" element={<Dashboard />} />
                    <Route path="product/:prod_slug" element={<Product />} />
                    <Route path="services" element={<Services />} />
                    <Route path="wishlist" element={<WishList />} />
                    <Route path="*" element={<NotFoundPage />} />
                </Routes>
            </div>
            <Footer />

            <button id="scroll-top" title="Back to Top"><i className="icon-arrow-up"></i></button>

            <div className="mobile-menu-overlay"></div>

            <MobileMenu />

            <AuthModal />

            {/* <NewsLetter /> */}
        </Fragment>
    )
}

export default Layout