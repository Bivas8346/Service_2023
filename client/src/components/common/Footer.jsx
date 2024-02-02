import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <>
            {/* <!-- Footer Start --> */}
            <div class="container-fluid bg-dark text-light footer pt-5 mt-5 wow fadeIn" data-wow-delay="0.1s">
                <div class="container py-5">
                    <div class="row g-5">
                        <div class="col-lg-3 col-md-6">
                            <h4 class="text-light mb-4">Address</h4>
                            <p class="mb-2"><i class="fa fa-map-marker-alt me-3"></i>123 Street, New York, USA</p>
                            <p class="mb-2"><i class="fa fa-phone-alt me-3"></i>+012 345 67890</p>
                            <p class="mb-2"><i class="fa fa-envelope me-3"></i>info@example.com</p>
                            <div class="d-flex pt-2">
                                <a class="btn btn-outline-light btn-social" href=""><i class="fab fa-twitter"></i></a>
                                <a class="btn btn-outline-light btn-social" href=""><i class="fab fa-facebook-f"></i></a>
                                <a class="btn btn-outline-light btn-social" href=""><i class="fab fa-youtube"></i></a>
                                <a class="btn btn-outline-light btn-social" href=""><i class="fab fa-linkedin-in"></i></a>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6">
                            <h4 class="text-light mb-4">Opening Hours</h4>
                            <h6 class="text-light">Monday - Friday:</h6>
                            <p class="mb-4">09.00 AM - 09.00 PM</p>
                            <h6 class="text-light">Saturday - Sunday:</h6>
                            <p class="mb-0">09.00 AM - 12.00 PM</p>
                        </div>
                        <div class="col-lg-3 col-md-6">
                            <h4 class="text-light mb-4">Services</h4>
                            <Link to="/service" class="btn btn-link">Car Cleaning</Link>
                            <Link to="/service" class="btn btn-link">Bike Servicing</Link>
                            <Link to="/service" class="btn btn-link">Water Heater</Link>
                            <Link to="/service" class="btn btn-link">Fridge service</Link>
                            <Link to="/service" class="btn btn-link">Pc Service</Link>
                        </div>
                        <div class="col-lg-3 col-md-6">
                            <h4 class="text-light mb-4">Every Solution(:</h4>
                            <p>Any Problems One Solution Every Solution .. 24Hours We are happy to serve you</p>
                        </div>
                    </div>
                </div>
                <div class="container">
                    <div class="copyright">
                        <div class="row">
                            <div class="col-md-6 text-center text-md-start mb-3 mb-md-0">
                                &copy; <a class="border-bottom" href="#">Raj Das</a>, All Right Reserved.
                            </div>
                            <div class="col-md-6 text-center text-md-end">
                                <p> Designed By</p>  <a class="border-bottom" href="#">Bivas...</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Footer End --> */}


            {/* <!-- Back to Top --> */}
            <a href="#" class="btn btn-lg btn-primary btn-lg-square rounded-0 back-to-top"><i class="bi bi-arrow-up"></i></a>
        </>
    )
}

export default Footer