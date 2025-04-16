import React from 'react';
import { FaSearch, FaShieldAlt, FaUndo, FaStar, FaUpload, FaUserCheck, FaMoon, FaSun } from 'react-icons/fa';

function Home() {
    const [darkMode, setDarkMode] = React.useState(false);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    return (
        <div className={`container-fluid p-0 ${darkMode ? 'bg-dark text-light' : 'bg-light text-dark'}`}>
            <header className="py-5 text-center" style={{
                background: darkMode ? 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)' : 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
                padding: '100px 0'
            }}>
                <div className="container">
                    <h1 className="display-4 fw-bold mb-4">Welcome to LoopX</h1>
                    <p className="lead mb-5">Buy and sell pre-loved items with confidence and security</p>
                    <div className="d-flex justify-content-center gap-3">
                        <button className="btn btn-primary btn-lg px-4">Start Selling</button>
                        <button className="btn btn-outline-secondary btn-lg px-4">Browse Items</button>
                    </div>
                    <div className="position-absolute end-0 top-0 m-4">
                        <button
                            className="btn btn-sm rounded-circle p-2"
                            onClick={toggleDarkMode}
                            aria-label="Toggle dark mode"
                        >
                            {darkMode ? <FaSun size={18} /> : <FaMoon size={18} />}
                        </button>
                    </div>
                </div>
            </header>

            <section className={`py-5 ${darkMode ? 'bg-dark' : 'bg-white'}`}>
                <div className="container">
                    <h2 className="text-center mb-5">Discover Categories</h2>
                    <div className="row g-4">
                        {['Watches', 'Clothing', 'Electronics', 'Accessories', 'Home & Living'].map((category, index) => (
                            <div className="col-6 col-md-4 col-lg" key={index}>
                                <div className={`card h-100 border-0 shadow-sm ${darkMode ? 'bg-dark text-light border-secondary' : ''}`}>
                                    <div className="card-body text-center">
                                        <div className="rounded-circle bg-primary bg-opacity-10 p-3 mx-auto mb-3" style={{width: '80px', height: '80px'}}>
                                            {/* Placeholder for category icon */}
                                        </div>
                                        <h5 className="card-title">{category}</h5>
                                        <a href="#" className={`stretched-link ${darkMode ? 'text-light' : ''}`}></a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className={`py-5 ${darkMode ? 'bg-gray-900' : 'bg-light'}`}>
                <div className="container">
                    <h2 className="text-center mb-5">Why Choose LoopX?</h2>
                    <div className="row g-4">
                        {[
                            {
                                icon: <FaShieldAlt size={32} className="text-primary mb-3" />,
                                title: "Verified Products",
                                desc: "All products go through our verification process for authenticity and quality assurance."
                            },
                            {
                                icon: <FaUndo size={32} className="text-primary mb-3" />,
                                title: "24-Hour Returns",
                                desc: "Not satisfied? Return within 24 hours with our hassle-free return policy."
                            },
                            {
                                icon: <FaStar size={32} className="text-primary mb-3" />,
                                title: "Ratings & Reviews",
                                desc: "Make informed decisions with our transparent rating system for buyers and sellers."
                            },
                            {
                                icon: <FaSearch size={32} className="text-primary mb-3" />,
                                title: "Easy Search",
                                desc: "Find exactly what you're looking for with our powerful search and filter options."
                            }
                        ].map((feature, index) => (
                            <div className="col-md-6 col-lg-3" key={index}>
                                <div className={`card h-100 border-0 shadow-sm ${darkMode ? 'bg-dark text-light border-secondary' : ''}`}>
                                    <div className="card-body text-center p-4">
                                        {feature.icon}
                                        <h5 className="card-title">{feature.title}</h5>
                                        <p className="card-text">{feature.desc}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>


            <section className={`py-5 ${darkMode ? 'bg-dark' : 'bg-white'}`}>
                <div className="container">
                    <h2 className="text-center mb-5">How LoopX Works</h2>
                    <div className="row g-4">
                        {[
                            { step: "1", title: "Upload Your Items", icon: <FaUpload size={24} className="text-primary" />, desc: "Take photos and add details about your pre-loved items" },
                            { step: "2", title: "Get Verified", icon: <FaUserCheck size={24} className="text-primary" />, desc: "Our admin team reviews and verifies your listings" },
                            { step: "3", title: "Sell & Ship", icon: <FaShieldAlt size={24} className="text-primary" />, desc: "Connect with buyers and deliver using our secure COD system" }
                        ].map((item, index) => (
                            <div className="col-md-4" key={index}>
                                <div className={`card h-100 border-0 shadow-sm ${darkMode ? 'bg-dark text-light border-secondary' : ''}`}>
                                    <div className="card-body p-4">
                                        <div className="d-flex align-items-center mb-3">
                                            <div className="bg-primary rounded-circle text-white fw-bold d-flex align-items-center justify-content-center me-3" style={{width: '40px', height: '40px'}}>
                                                {item.step}
                                            </div>
                                            <h5 className="card-title mb-0">{item.title}</h5>
                                        </div>
                                        <p className="card-text">{item.desc}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>


            <section className={`py-5 ${darkMode ? 'bg-gray-900' : 'bg-light'}`}>
                <div className="container">
                    <div className="d-flex justify-content-between align-items-center mb-4">
                        <h2 className="mb-0">Recently Added</h2>
                        <a href="#" className={`btn btn-outline-primary ${darkMode ? 'text-light' : ''}`}>View All</a>
                    </div>
                    <div className="row g-4">
                        {[1, 2, 3, 4].map((item) => (
                            <div className="col-md-6 col-lg-3" key={item}>
                                <div className={`card h-100 border-0 shadow-sm ${darkMode ? 'bg-dark text-light border-secondary' : ''}`}>
                                    <div className="position-relative">
                                        <div className="placeholder bg-secondary w-100" style={{height: '200px'}}></div>
                                        <span className="position-absolute top-0 end-0 badge bg-success m-2">Verified</span>
                                    </div>
                                    <div className="card-body">
                                        <h5 className="card-title">Product Title</h5>
                                        <p className="card-text text-muted">Condition: Like New</p>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <span className="fw-bold">₹2,499</span>
                                            <div>
                                                <FaStar className="text-warning" />
                                                <FaStar className="text-warning" />
                                                <FaStar className="text-warning" />
                                                <FaStar className="text-warning" />
                                                <FaStar className="text-warning" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>


            <section className="py-5 text-center text-white" style={{
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                padding: '80px 0'
            }}>
                <div className="container">
                    <h2 className="display-6 fw-bold mb-4">Ready to Buy or Sell?</h2>
                    <p className="lead mb-4">Join thousands of users who trust LoopX for their pre-loved items</p>
                    <button className="btn btn-light btn-lg px-4 shadow">Create an Account</button>
                </div>
            </section>


            <footer className={`py-4 ${darkMode ? 'bg-dark text-light border-top border-secondary' : 'bg-light text-dark border-top'}`}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <h5>LoopX</h5>
                            <p className="mb-3">The secure marketplace for pre-loved items</p>
                        </div>
                        <div className="col-md-6 text-md-end">
                            <p className="mb-0">&copy; {new Date().getFullYear()} LoopX. All rights reserved.</p>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default Home;