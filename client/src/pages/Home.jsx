import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Carousel, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Home = () => {



    const [aboutData, setAllabout] = useState([]);
    const [reviewData, setAllreview] = useState([]);
    const [LimitserviceData, setAlllimitservice] = useState([]);
    const [LimitprovidereData, setAlllimitprovider] = useState([]);
    const [homeData, setAllhome] = useState([]);

    useEffect(() => {
        axios
            .get('http://localhost:4225/api/about')
            .then((res) => {
                setAllabout(res.data.data);
            })
            .catch((error) => {
                console.log(error);
            })


        axios
            .get('http://localhost:4225/api/review')
            .then((res) => {
                setAllreview(res.data.data);
            })
            .catch((error) => {
                console.log(error);
            })

        axios
            .get('http://localhost:4225/api/limitservice')
            .then((res) => {
                setAlllimitservice(res.data.data);
            })
            .catch((error) => {
                console.log(error);
            })


        axios
            .get('http://localhost:4225/api/limitprovider')
            .then((res) => {
                setAlllimitprovider(res.data.data);
            })
            .catch((error) => {
                console.log(error);
            })


        axios
            .get('http://localhost:4225/api/home')
            .then((res) => {
                setAllhome(res.data.data);
            })
            .catch((error) => {
                console.log(error);
            })
    }, []);


    return (
        <>
            {/* <!-- Carousel Start --> */}
            <Carousel fade>
                {homeData.map((hom) => (
                    <Carousel.Item>
                        <div class=" position-relative p-0 mb-5">
                            <img class="img w-100" src={`http://localhost:4225/${hom.image}`} height="550px" alt="image" />
                            <div class="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center" style={{ background: "rgba(0, 0, 0, .4)" }}>
                                <div class="container">
                                    <div class="row justify-content-start">
                                        <div class="col-10 col-lg-8">
                                            <h5 class="text-white text-uppercase mb-3 animated slideInDown">All type Servicing & Repairing Services</h5>
                                            <h1 class="display-3 text-white animated slideInDown mb-4">{hom.title}</h1>
                                            <p class="fs-5 fw-medium text-white mb-4 pb-2">{hom.description}</p>
                                            <a href="" class="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft">Read More</a>
                                            <a href="" class="btn btn-secondary py-md-3 px-md-5 animated slideInRight">Free Quote</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Carousel.Item>
                ))}
            </Carousel>

            {/* <!-- Carousel End --> */}


            {/* <!-- Service Start --> */}
            <div class="container-xxl py-5">
                <div class="container">
                    <div class="row g-4">
                        {LimitserviceData.map((limits) => (
                            <div class="col-lg-4 col-md-6 service-item-top wow fadeInUp" data-wow-delay="0.1s">
                                <div class="overflow-hidden">
                                    <img class="w-100" src={`http://localhost:4225/${limits.image}`} height="250px" alt="" />
                                </div>
                                <div class="d-flex align-items-center justify-content-between bg-light p-4">
                                    <h5 class="text-truncate me-3 mb-0">{limits.servicename}</h5>
                                    <Link class="btn btn-square btn-outline-primary border-2 border-white flex-shrink-0" to="/service"><i class="fa fa-arrow-right"></i></Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            {/* <!-- Service End --> */}


            {/* <!-- About Start --> */}
            <div class="container-xxl py-5">

                <div class="container">
                    {aboutData.map((about) => (
                        <div class="row g-5">
                            <div class="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
                                <h6 class="text-secondary text-uppercase">About Us</h6>
                                <h1 class="mb-4">{about.title}</h1>
                                <p class="mb-4">{about.description}</p>
                                <p class="fw-medium text-primary"><i class="fa fa-check text-success me-3"></i>Doore-Step service any time any where</p>
                                <p class="fw-medium text-primary"><i class="fa fa-check text-success me-3"></i>Quality services at affordable prices</p>
                                <p class="fw-medium text-primary"><i class="fa fa-check text-success me-3"></i>Immediate 24/ 7 emergency services</p>
                                <div class="bg-primary d-flex align-items-center p-4 mt-5">
                                    <div class="d-flex flex-shrink-0 align-items-center justify-content-center bg-white" style={{ width: "60px", height: "60px" }}>
                                        <i class="fa fa-phone-alt fa-2x text-primary"></i>
                                    </div>
                                    <div class="ms-3">
                                        <p class="fs-5 fw-medium mb-2 text-white">Emergency 24/7</p>
                                        <h3 class="m-0 text-secondary">+012 345 6789</h3>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-6 pt-4" style={{ minHeight: "500px" }}>
                                <div class="position-relative h-100 wow fadeInUp" data-wow-delay="0.5s">
                                    <img class="position-absolute img-fluid w-100 h-100" src={"https://plus.unsplash.com/premium_photo-1661884973994-d7625e52631a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzF8fHNlcnZpY2VzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"} style={{ objectFit: "cover", padding: "0 0 50px 100px" }} alt="" />
                                    <img class="position-absolute start-0 bottom-0 img-fluid bg-white pt-2 pe-2 w-50 h-50" src={"https://media.istockphoto.com/id/1408152924/photo/close-up-on-a-repairman-fixing-an-electrical-outlet.webp?b=1&s=170667a&w=0&k=20&c=LAWX7hqtv5hnJG0yrlLBcXYm3iuuTatJv6iFPPh8wPY="} style={{ objectFit: "cover" }} alt="" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>


            {/* <!-- About End --> */}


            {/* <!-- Fact Start --> */}
            <div class="container-fluid fact bg-dark my-5 py-5">
                <div class="container">
                    <div class="row g-4">
                        <div class="col-md-6 col-lg-3 text-center wow fadeIn" data-wow-delay="0.1s">
                            <i class="fa fa-check fa-2x text-white mb-3"></i>
                            <h2 class="text-white mb-2" dataToggle={"counter-up"}>1234</h2>
                            <p class="text-white mb-0">Years Experience</p>
                        </div>
                        <div class="col-md-6 col-lg-3 text-center wow fadeIn" data-wow-delay="0.3s">
                            <i class="fa fa-users-cog fa-2x text-white mb-3"></i>
                            <h2 class="text-white mb-2" dataToggle="counter-up">1234</h2>
                            <p class="text-white mb-0">Expert Technicians</p>
                        </div>
                        <div class="col-md-6 col-lg-3 text-center wow fadeIn" data-wow-delay="0.5s">
                            <i class="fa fa-users fa-2x text-white mb-3"></i>
                            <h2 class="text-white mb-2" dataToggle="counter-up">1234</h2>
                            <p class="text-white mb-0">Satisfied Clients</p>
                        </div>
                        <div class="col-md-6 col-lg-3 text-center wow fadeIn" data-wow-delay="0.7s">
                            <i class="fa fa-wrench fa-2x text-white mb-3"></i>
                            <h2 class="text-white mb-2" dataToggle="counter-up">1234</h2>
                            <p class="text-white mb-0">Compleate Projects</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Fact End --> */}


            {/* <!-- Service Start --> */}
            <div class="container-fluid py-5 px-4 px-lg-0 ">
                <div class="row g-0">
                    <div class="col-lg-3 d-none d-lg-flex">
                        <div class="d-flex align-items-center justify-content-center bg-primary w-100 h-100">
                            <h1 class="display-3 text-white m-0" style={{ transform: "rotate(-90deg)" }}>15 Years Experience</h1>
                        </div>
                    </div>
                    <div class="col-md-12 col-lg-9">
                        <div class="ms-lg-5 ps-lg-5">
                            <div class="text-center text-lg-start wow fadeInUp" data-wow-delay="0.1s">
                                <h6 class="text-secondary text-uppercase">Our Services</h6>
                                <h1 class="mb-5">Explore Our Services</h1>
                            </div>
                            <div class="service-carousel position-relative wow fadeInUp" data-wow-delay="0.1s">
                                <Carousel style={{ width: '63rem' }}>
                                    <Carousel.Item interval={1000}>
                                        <Row>
                                            <Col>
                                                <div class="bg-light p-4">
                                                    <div class="d-flex align-items-center justify-content-center border border-5 border-white mb-4" style={{ width: "75px", height: "75px" }}>
                                                        <i class="fa fa-water fa-2x text-primary"></i>
                                                    </div>
                                                    <h4 class="mb-3">Bike Service</h4>
                                                    <p>All type Bike Servicing</p>
                                                    <p class="text-primary fw-medium"><i class="fa fa-check text-success me-2"></i>Quality Service</p>
                                                    <p class="text-primary fw-medium"><i class="fa fa-check text-success me-2"></i>Customer Satisfaction</p>
                                                    <p class="text-primary fw-medium"><i class="fa fa-check text-success me-2"></i>Support 24/7</p>
                                                    <Link to="/service" class="btn bg-white text-primary w-100 mt-2">Read More<i class="fa fa-arrow-right text-secondary ms-2"></i></Link>
                                                </div>
                                            </Col>
                                            <Col>
                                                <div class="bg-light p-4">
                                                    <div class="d-flex align-items-center justify-content-center border border-5 border-white mb-4" style={{ width: "75px", height: "75px" }}>
                                                        <i class="fa fa-water fa-2x text-primary"></i>
                                                    </div>
                                                    <h4 class="mb-3">Car Servic</h4>
                                                    <p>All Type Car Servicing</p>
                                                    <p class="text-primary fw-medium"><i class="fa fa-check text-success me-2"></i>Quality Service</p>
                                                    <p class="text-primary fw-medium"><i class="fa fa-check text-success me-2"></i>Customer Satisfaction</p>
                                                    <p class="text-primary fw-medium"><i class="fa fa-check text-success me-2"></i>Support 24/7</p>
                                                    <Link to="/service" class="btn bg-white text-primary w-100 mt-2">Read More<i class="fa fa-arrow-right text-secondary ms-2"></i></Link>
                                                </div>
                                            </Col>
                                            <Col>
                                                <div class="bg-light p-4">
                                                    <div class="d-flex align-items-center justify-content-center border border-5 border-white mb-4" style={{ width: "75px", height: "75px" }}>
                                                        <i class="fa fa-water fa-2x text-primary"></i>
                                                    </div>
                                                    <h4 class="mb-3">TV Service</h4>
                                                    <p>Any Type TV Servicing </p>
                                                    <p class="text-primary fw-medium"><i class="fa fa-check text-success me-2"></i>Quality Service</p>
                                                    <p class="text-primary fw-medium"><i class="fa fa-check text-success me-2"></i>Customer Satisfaction</p>
                                                    <p class="text-primary fw-medium"><i class="fa fa-check text-success me-2"></i>Support 24/7</p>
                                                    <Link to="/service" class="btn bg-white text-primary w-100 mt-2">Read More<i class="fa fa-arrow-right text-secondary ms-2"></i></Link>
                                                </div>
                                            </Col>
                                            <Col>
                                                <div class="bg-light p-4">
                                                    <div class="d-flex align-items-center justify-content-center border border-5 border-white mb-4" style={{ width: "75px", height: "75px" }}>
                                                        <i class="fa fa-tint fa-2x text-primary"></i>
                                                    </div>
                                                    <h4 class="mb-3">Heater Repair</h4>
                                                    <p>Water Heater Service</p>
                                                    <p class="text-primary fw-medium"><i class="fa fa-check text-success me-2"></i>Quality Service</p>
                                                    <p class="text-primary fw-medium"><i class="fa fa-check text-success me-2"></i>Customer Satisfaction</p>
                                                    <p class="text-primary fw-medium"><i class="fa fa-check text-success me-2"></i>Support 24/7</p>
                                                    <Link to="/service" class="btn bg-white text-primary w-100 mt-2">Read More<i class="fa fa-arrow-right text-secondary ms-2"></i></Link>
                                                </div>
                                            </Col>
                                        </Row>
                                    </Carousel.Item>
                                    <Carousel.Item interval={500}>
                                        <Row>
                                            <Col>
                                                <div class="bg-light p-4">
                                                    <div class="d-flex align-items-center justify-content-center border border-5 border-white mb-4" style={{ width: "75px", height: "75px" }}>
                                                        <i class="fa fa-water fa-2x text-primary"></i>
                                                    </div>
                                                    <h4 class="mb-3">AC Service</h4>
                                                    <p>All type AC Servicing</p>
                                                    <p class="text-primary fw-medium"><i class="fa fa-check text-success me-2"></i>Quality Service</p>
                                                    <p class="text-primary fw-medium"><i class="fa fa-check text-success me-2"></i>Customer Satisfaction</p>
                                                    <p class="text-primary fw-medium"><i class="fa fa-check text-success me-2"></i>Support 24/7</p>
                                                    <Link to="/service" class="btn bg-white text-primary w-100 mt-2">Read More<i class="fa fa-arrow-right text-secondary ms-2"></i></Link>
                                                </div>
                                            </Col>
                                            <Col>
                                                <div class="bg-light p-4">
                                                    <div class="d-flex align-items-center justify-content-center border border-5 border-white mb-4" style={{ width: "75px", height: "75px" }}>
                                                        <i class="fa fa-water fa-2x text-primary"></i>
                                                    </div>
                                                    <h4 class="mb-3">Motor Servic</h4>
                                                    <p>All Type Motor Servicing</p>
                                                    <p class="text-primary fw-medium"><i class="fa fa-check text-success me-2"></i>Quality Service</p>
                                                    <p class="text-primary fw-medium"><i class="fa fa-check text-success me-2"></i>Customer Satisfaction</p>
                                                    <p class="text-primary fw-medium"><i class="fa fa-check text-success me-2"></i>Support 24/7</p>
                                                    <Link to="/service" class="btn bg-white text-primary w-100 mt-2">Read More<i class="fa fa-arrow-right text-secondary ms-2"></i></Link>
                                                </div>
                                            </Col>
                                            <Col>
                                                <div class="bg-light p-4">
                                                    <div class="d-flex align-items-center justify-content-center border border-5 border-white mb-4" style={{ width: "75px", height: "75px" }}>
                                                        <i class="fa fa-water fa-2x text-primary"></i>
                                                    </div>
                                                    <h4 class="mb-3">Elactic Service</h4>
                                                    <p>Any Elactronic Servicing </p>
                                                    <p class="text-primary fw-medium"><i class="fa fa-check text-success me-2"></i>Quality Service</p>
                                                    <p class="text-primary fw-medium"><i class="fa fa-check text-success me-2"></i>Customer Satisfaction</p>
                                                    <p class="text-primary fw-medium"><i class="fa fa-check text-success me-2"></i>Support 24/7</p>
                                                    <Link to="/service" class="btn bg-white text-primary w-100 mt-2">Read More<i class="fa fa-arrow-right text-secondary ms-2"></i></Link>
                                                </div>
                                            </Col>
                                            <Col>
                                                <div class="bg-light p-4">
                                                    <div class="d-flex align-items-center justify-content-center border border-5 border-white mb-4" style={{ width: "75px", height: "75px" }}>
                                                        <i class="fa fa-water fa-2x text-primary"></i>
                                                    </div>
                                                    <h4 class="mb-3">Phone Repair</h4>
                                                    <p>Smart Phone Service</p>
                                                    <p class="text-primary fw-medium"><i class="fa fa-check text-success me-2"></i>Quality Service</p>
                                                    <p class="text-primary fw-medium"><i class="fa fa-check text-success me-2"></i>Customer Satisfaction</p>
                                                    <p class="text-primary fw-medium"><i class="fa fa-check text-success me-2"></i>Support 24/7</p>
                                                    <Link to="/service" class="btn bg-white text-primary w-100 mt-2">Read More<i class="fa fa-arrow-right text-secondary ms-2"></i></Link>
                                                </div>
                                            </Col>
                                        </Row>
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <Row>
                                            <Col>
                                                <div class="bg-light p-4">
                                                    <div class="d-flex align-items-center justify-content-center border border-5 border-white mb-4" style={{ width: "75px", height: "75px" }}>
                                                        <i class="fa fa-water fa-2x text-primary"></i>
                                                    </div>
                                                    <h4 class="mb-3">Laptop Service</h4>
                                                    <p>All type Laptop Servicing</p>
                                                    <p class="text-primary fw-medium"><i class="fa fa-check text-success me-2"></i>Quality Service</p>
                                                    <p class="text-primary fw-medium"><i class="fa fa-check text-success me-2"></i>Customer Satisfaction</p>
                                                    <p class="text-primary fw-medium"><i class="fa fa-check text-success me-2"></i>Support 24/7</p>
                                                    <Link to="/service" class="btn bg-white text-primary w-100 mt-2">Read More<i class="fa fa-arrow-right text-secondary ms-2"></i></Link>
                                                </div>
                                            </Col>
                                            <Col>
                                                <div class="bg-light p-4">
                                                    <div class="d-flex align-items-center justify-content-center border border-5 border-white mb-4" style={{ width: "75px", height: "75px" }}>
                                                        <i class="fa fa-water fa-2x text-primary"></i>
                                                    </div>
                                                    <h4 class="mb-3">chimney Servic</h4>
                                                    <p>KitchenChimney Servicing</p>
                                                    <p class="text-primary fw-medium"><i class="fa fa-check text-success me-2"></i>Quality Service</p>
                                                    <p class="text-primary fw-medium"><i class="fa fa-check text-success me-2"></i>Customer Satisfaction</p>
                                                    <p class="text-primary fw-medium"><i class="fa fa-check text-success me-2"></i>Support 24/7</p>
                                                    <Link to="/service" class="btn bg-white text-primary w-100 mt-2">Read More<i class="fa fa-arrow-right text-secondary ms-2"></i></Link>
                                                </div>
                                            </Col>
                                            <Col>
                                                <div class="bg-light p-4">
                                                    <div class="d-flex align-items-center justify-content-center border border-5 border-white mb-4" style={{ width: "75px", height: "75px" }}>
                                                        <i class="fa fa-water fa-2x text-primary"></i>
                                                    </div>
                                                    <h4 class="mb-3">Fridge Service</h4>
                                                    <p>Any Type Fridge Servicing </p>
                                                    <p class="text-primary fw-medium"><i class="fa fa-check text-success me-2"></i>Quality Service</p>
                                                    <p class="text-primary fw-medium"><i class="fa fa-check text-success me-2"></i>Customer Satisfaction</p>
                                                    <p class="text-primary fw-medium"><i class="fa fa-check text-success me-2"></i>Support 24/7</p>
                                                    <Link to="/service" class="btn bg-white text-primary w-100 mt-2">Read More<i class="fa fa-arrow-right text-secondary ms-2"></i></Link>
                                                </div>
                                            </Col>
                                            <Col>
                                                <div class="bg-light p-4">
                                                    <div class="d-flex align-items-center justify-content-center border border-5 border-white mb-4" style={{ width: "75px", height: "75px" }}>
                                                    <i class="fa fa-water fa-2x text-primary"></i>
                                                    </div>
                                                    <h4 class="mb-3">Filter Repair</h4>
                                                    <p>Water Filter Service</p>
                                                    <p class="text-primary fw-medium"><i class="fa fa-check text-success me-2"></i>Quality Service</p>
                                                    <p class="text-primary fw-medium"><i class="fa fa-check text-success me-2"></i>Customer Satisfaction</p>
                                                    <p class="text-primary fw-medium"><i class="fa fa-check text-success me-2"></i>Support 24/7</p>
                                                    <Link to="/service" class="btn bg-white text-primary w-100 mt-2">Read More<i class="fa fa-arrow-right text-secondary ms-2"></i></Link>
                                                </div>
                                            </Col>
                                        </Row>
                                    </Carousel.Item>
                                </Carousel>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Service End --> */}


            {/* <!-- Booking Start --> */}
            <div class="container-fluid my-5 px-0">
                <div class="video wow fadeInUp" data-wow-delay="0.1s">
                    <button type="button" class="btn-play" data-bs-toggle="modal" src={"https://www.youtube.com/embed/DWRcNpR6Kdc"} data-bs-target="#videoModal">
                        <span></span>
                    </button>

                    <div class="modal fade" id="videoModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content rounded-0">
                                <div class="modal-header">
                                    <h5 class="modal-title" id="exampleModalLabel">Youtube Video</h5>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    {/* <!-- 16:9 aspect ratio --> */}
                                    <div class="ratio ratio-16x9">
                                        <iframe class="embed-responsive-item" src="" id="video" allowfullscreen allowscriptaccess="always"
                                            allow="autoplay"></iframe>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <h1 class="text-white mb-4">Emergency Service Support</h1>
                    <h3 class="text-white mb-0">24 Hours 7 Days a Week</h3>
                </div>
            </div>
            {/* <!-- Booking End --> */}


            {/* <!-- Team Start --> */}
            <div class="container-xxl py-5">
                <div class="container">
                    <div class="text-center wow fadeInUp" data-wow-delay="0.1s">
                        <h6 class="text-secondary text-uppercase">Our Technicians</h6>
                        <h1 class="mb-5">Our Expert Technicians</h1>
                    </div>
                    <div class="row g-4">
                        {LimitprovidereData.map((Prov) => (
                            <div class="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                                <div class="team-item">
                                    <div class="position-relative overflow-hidden">
                                        <img class="img-fluid" src={Prov.image} alt="" />
                                    </div>
                                    <div class="team-text">
                                        <div class="bg-light">
                                            <h5 class="fw-bold mb-0">{Prov.providername}</h5>
                                            <small>{Prov.servicetype}</small>
                                        </div>
                                        <div class="bg-primary">
                                            <a class="btn btn-square mx-1" href=""><i class="fab fa-facebook-f"></i></a>
                                            <a class="btn btn-square mx-1" href=""><i class="fab fa-twitter"></i></a>
                                            <a class="btn btn-square mx-1" href=""><i class="fab fa-instagram"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            {/* <!-- Team End --> */}


            {/* <!-- Testimonial Start --> */}
            <div class="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
                <div class="container">
                    <div class="text-center">
                        <h6 class="text-secondary text-uppercase">Testimonial</h6>
                        <h1 class="mb-5">Our Clients Say!</h1>
                    </div>
                    <div class="testimonial-carousel position-relative wow fadeInUp" data-wow-delay="0.1s">
                        <Carousel>
                            {reviewData.map((revd) => (
                                <Carousel.Item>
                                    <div class="testimonial-item text-center">
                                        <div class="testimonial-text bg-light text-center p-4 mb-4">
                                            <p class="mb-0">{revd.message}</p>
                                        </div>
                                        <img class="bg-light rounded-circle p-2 mx-auto mb-2" src={"assets/img/testimonial-1.jpg"} style={{ width: "80px", height: "80px" }} />
                                        <div class="mb-2">
                                            <small class="fa fa-star text-secondary"></small>
                                            <small class="fa fa-star text-secondary"></small>
                                            <small class="fa fa-star text-secondary"></small>
                                            <small class="fa fa-star text-secondary"></small>
                                            <small class="fa fa-star text-secondary"></small>
                                        </div>
                                        <h5 class="mb-1">{revd.name}</h5>
                                        <p class="m-0">{revd.profession}</p>
                                    </div>
                                </Carousel.Item>
                            ))}
                        </Carousel>
                    </div>
                </div>
            </div>
            {/* <!-- Testimonial End --> */}
        </>
    )
}

export default Home