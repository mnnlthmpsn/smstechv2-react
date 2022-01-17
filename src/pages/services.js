import { Link } from "react-router-dom"
import Brands from "../components/brands"

const Services = () => {
    return (
        <main className="main">
            <nav aria-label="breadcrumb" className="breadcrumb-nav border-0 mb-0">
                <div className="container">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                        <li className="breadcrumb-item active" aria-current="page">About us</li>
                    </ol>
                </div>
            </nav>
            <div className="container">
                <div className="page-header page-header-big text-center" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1600132806370-bf17e65e942f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fHNlcnZpY2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60)' }}>
                    <h1 className="page-title text-white">Services<span className="text-white">What we do</span></h1>
                </div>
            </div>

            <div className="page-content pb-0">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 mb-3 mb-lg-0">
                            <h2 className="title">Our Services</h2>
                            <div className="row d-flex">
                            <div className="col">
                                <ul>
                                    <li>- Data Center Management</li>
                                    <li>- NComputing setup</li>
                                    <li>- VOIP solutions</li>
                                    <li>- Technical Support/online and purchase </li>
                                    <li>- CCTV camera training</li>
                                    <li>- Installation of CCTV Cameras</li>
                                    <li>- UPS repairs</li>
                                </ul>
                            </div>
                            <ul>
                                <li>- Network Cabling</li>
                                <li>- Computer Lab setup for school and offices</li>
                                <li>- Intercom systems </li>
                                <li>- Endpoint security deployment</li>
                                <li>- Sophos firewal and endpoint security</li>
                                <li>- Laptop repairs</li>
                                <li>- Networking and training</li>
                            </ul>
                            </div>
                        </div>
                    </div>

                    <div className="mb-5"></div>
                </div>

                {/* brands */}
                <Brands />
            </div>
        </main>
    )
}

export default Services