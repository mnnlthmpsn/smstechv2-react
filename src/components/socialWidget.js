const SocialWidget = () => {
    return(
        <div className="container">
                <div className="cta cta-separator cta-border-image cta-half mb-0" style={{ backgroundImage: 'url(/assets/images/demos/demo-3/bg-2.jpg)' }}>
                    <div className="cta-border-wrapper bg-white">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="cta-wrapper cta-text text-center">
                                    <h3 className="cta-title">Follow us on</h3>
                                    <p className="cta-desc">Stay in touch with us through our Social Media handles</p>
                            
                                    <div className="social-icons social-icons-colored justify-content-center">
                                        <a href="https://www.facebook.com/SmsTechsystems" className="social-icon social-facebook" title="Facebook" target="_blank"><i className="icon-facebook-f"></i></a>
                                        <a href="#" className="social-icon social-twitter" title="Twitter" target="_blank"><i className="icon-twitter"></i></a>
                                        <a href="https://www.instagram.com/sms_techsystems" className="social-icon social-instagram" title="Instagram" target="_blank"><i className="icon-instagram"></i></a>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-6">
                                <div className="cta-wrapper text-center">
                                    <h3 className="cta-title">Subscribe to Email</h3>
                                    <p className="cta-desc">to receive <br />news of latest <span className="text-primary">Deals & Promotions</span></p>
                            
                                    <form action="#">
                                        <div className="input-group">
                                            <input type="email" className="form-control" placeholder="Enter your Email Address" aria-label="Email Adress" required />
                                            <div className="input-group-append">
                                                <button className="btn btn-primary btn-rounded" type="submit"><i className="icon-long-arrow-right"></i></button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default SocialWidget