import { Link } from "react-router-dom"

const Footer = () => {
	return (
		<footer className="footer">
			<div className="footer-middle">
				<div className="container">
					<div className="row">
						<div className="col-sm-6 col-lg-3">
							<div className="widget widget-about">
								<div className="widget-call">
									<i className="icon-phone"></i>
									Got Question? Call us 24/7
									<a href="tel:#">+0123 456 789</a>
								</div>
							</div>
						</div>

						<div className="col-sm-6 col-lg-3">
							<div className="widget">
								<h4 className="widget-title">Useful Links</h4>

								<ul className="widget-list">
									<li><Link to="/about">About Us</Link></li>
									<li><Link to="/services">Our Services</Link></li>
									<li><Link to="/contact">Contact us</Link></li>
								</ul>
							</div>
						</div>

						{/* <div className="col-sm-6 col-lg-3">
	            			<div className="widget">
	            				<h4 className="widget-title">Customer Service</h4>

	            				<ul className="widget-list">
	            					<li><a href="#">Payment Methods</a></li>
	            					<li><a href="#">Money-back guarantee!</a></li>
	            					<li><a href="#">Returns</a></li>
	            					<li><a href="#">Shipping</a></li>
	            					<li><a href="#">Terms and conditions</a></li>
	            					<li><a href="#">Privacy Policy</a></li>
	            				</ul>
	            			</div>
	            		</div> */}

						<div className="col-sm-6 col-lg-3">
							<div className="widget">
								<h4 className="widget-title">My Account</h4>

								<ul className="widget-list">
									<li><Link to="/">Sign In</Link></li>
									<li><Link to="/cart">View Cart</Link></li>
									<li><Link to="/wishlist">My Wishlist</Link></li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="footer-bottom">
				<div className="container">
					<p className="footer-copyright">Copyright © 2021 SMSTech Systems. All Rights Reserved.</p>
					<figure className="footer-payments">
						<img src="/assets/images/payments.png" alt="Payment methods" width="272" height="20" />
					</figure>
				</div>
			</div>
		</footer>
	)
}

export default Footer 