import Testimonials from "../components/testimonials"
import { Link } from 'react-router-dom' 
import Brands from "../components/brands"

const About = () => {
    return (
        <main className="main">
            <nav aria-label="breadcrumb" className="breadcrumb-nav border-0 mb-0">
                <div className="container">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                        <li className="breadcrumb-item"><a href="#">Pages</a></li>
                        <li className="breadcrumb-item active" aria-current="page">About us</li>
                    </ol>
                </div>
            </nav>
            <div className="container">
	        	<div className="page-header page-header-big text-center" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8dGVjaHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60)' }}>
        			<h1 className="page-title text-white">About us<span className="text-white">Who we are</span></h1>
	        	</div>
            </div>

            <div className="page-content pb-0">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 mb-3 mb-lg-0">
                            <h2 className="title">Our Core Values</h2>
                            <p>Our core values guide us in how we create respect and value our judgement and deliver on our commitments </p>
                            <ul class="d-flex">
                                <li class="mr-2">-Integrity </li>
                                <li class="mr-2">-Honesty </li>
                                <li> -Respect </li>
                            </ul>
                        </div>
                        
                        <div className="col-lg-6">
                            <h2 className="title">Our Vision</h2>
                            <p>Our vision is to make technology simple, being one of the best IT Resellers and Support company in the country</p>
                        </div>
                    </div>

                    <div className="mb-5"></div>
                </div>

                <div className="bg-light-2 pt-6 pb-5 mb-6 mb-lg-8">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-5 mb-3 mb-lg-0">
                                <h2 className="title">Benefits for selecting SMS TechSystems</h2>
                                <p className="lead text-primary mb-3">Why you should choose us</p>
                                <ul>
                                    <li>- Cost Effective with value</li>
                                    <li>- Extraordinary track record of improving Client workflows and efficiencies</li>
                                    <li>- Fast response times</li>
                                    <li>- Deep knowledege and expertise in information Technology</li>
                                    <li>- Talented Team with impeccable references and past performances</li>
                                </ul>

                                <Link to='/categories' className="btn btn-sm btn-minwidth btn-outline-primary-2">
                                    <span>Shop Now</span>
                                    <i className="icon-long-arrow-right"></i>
                                </Link>
                            </div>

                            <div className="col-lg-6 offset-lg-1">
                                <div className="about-images">
                                    <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8dGVjaHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="" className="about-img-front" />
                                    <img src="https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fHRlY2h8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="" className="about-img-back" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <Brands />

                <div className="mb-2"></div>

                {/* testimonials */}
                {/* <Testimonials /> */}
            </div>
        </main>
    )
}

export default About