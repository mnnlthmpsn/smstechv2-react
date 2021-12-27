import { Link } from "react-router-dom"

const CallToAction = () => {
    return (
        <div className="container">
                <div className="cta cta-border cta-border-image mb-5 mb-lg-7" style={{ backgroundImage: 'url(/assets/images/demos/demo-3/bg-1.jpg)'}}>
                    <div className="cta-border-wrapper bg-white">
                        <div className="row justify-content-center">
                            <div className="col-md-11 col-xl-11">
                                <div className="cta-content">
                                    <div className="cta-heading">
                                        <h3 className="cta-title text-right"><span className="text-primary">SMS Tech Solutions</span></h3>
                                    </div>
                                    
                                    <div className="cta-text text-center">
                                        <p>Browse our catalog for amazing deals and offers</p>
                                    </div>
                                    <Link to='categories' className="btn btn-primary btn-round"><span>Shop Now</span><i className="icon-long-arrow-right"></i></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default CallToAction