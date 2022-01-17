const Contact = () => {
    return (
        <main className="main">
            <nav aria-label="breadcrumb" className="breadcrumb-nav border-0 mb-0">
                <div className="container">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                        <li className="breadcrumb-item"><a href="#">Pages</a></li>
                        <li className="breadcrumb-item active" aria-current="page">Contact us</li>
                    </ol>
                </div>
            </nav>
            <div className="container">
                <div className="page-header page-header-big text-center" style={{ backgroundImage: 'url(assets/images/contact-header-bg.jpg)' }}>
                    <h1 className="page-title text-white">Contact us<span className="text-white">keep in touch with us</span></h1>
                </div>
            </div>

            <div className="page-content pb-0">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h2 className="title mb-1">Contact Information</h2>
                            <div className="row">
                                <div className="col-sm-4">
                                    <div className="contact-info">
                                        <h3>The Office</h3>

                                        <ul className="contact-list">
                                            <li>
                                                <i className="icon-map-marker"></i>
                                                Bubiashi, Greater-Accra, Ghana
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="col-sm-4">
                                    <li>
                                        <i className="icon-phone"></i>
                                        <a href="tel:#">+233 (0) 20 3441 481 | 23 3441 845</a>
                                    </li>
                                    <li>
                                        <i className="icon-envelope"></i>
                                        <a href="mailto:#">dasilvera@smstechsystems.com</a>
                                    </li>
                                    <li>
                                        <i className="icon-envelope"></i>
                                        <a href="mailto:#">sales@smstechsystems.come</a>
                                    </li>
                                    <li>
                                        <a href="mailto:#">marious@smstechsystems.come</a>
                                    </li>
                                </div>

                                <div className="col-sm-4">
                                    <div className="contact-info">
                                        <ul className="contact-list">
                                            <li>
                                                <i className="icon-clock-o"></i>
                                                <span className="text-dark">Monday-Friday</span> <br />8am-5pm
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Contact