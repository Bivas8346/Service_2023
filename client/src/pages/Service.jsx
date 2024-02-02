import React, { useEffect, useState } from 'react';
import { Carousel, Row, Col } from 'react-bootstrap';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Service = () => {

    const [serviceData, setAllservice] = useState([]);
    const [reviewData, setAllreview] = useState([]);

    useEffect(() => {
        axios
            .get('http://localhost:4225/api/service')
            .then((res) => {
                setAllservice(res.data.data);
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
    }, []);


    return (
        <>
            {/* <!-- Page Header Start --> */}
            <div class="container-fluid page-header mb-5 py-5" style={{ backgroundColor: "rgb(4, 169, 255)" }}>
                <div class="container">
                    <h1 class="display-3 text-white mb-3 animated slideInDown">Services</h1>
                    <nav aria-label="breadcrumb animated slideInDown">
                        <ol class="breadcrumb text-uppercase">
                            <li class="breadcrumb-item"><a class="text-white" href="#">Home</a></li>
                            <li class="breadcrumb-item"><a class="text-white" href="#">Pages</a></li>
                            <li class="breadcrumb-item text-white active" aria-current="page">Services</li>
                        </ol>
                    </nav>
                </div>
            </div>
            {/* <!-- Page Header End --> */}


            {/* <!-- Service Start --> */}
            <div class="container-fluid py-5 px-4 px-lg-0">
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
                                {/* <Carousel style={{ width: '63rem' }}>
                                    <Carousel.Item interval={1000}> */}


                                <Row>
                                    {serviceData.map((service) => (
                                        <Col md={4} lg={4}>
                                            <div class="bg-light p-4">
                                                <div class="d-flex align-items-center justify-content-center border border-5 border-white mb-4" style={{ width: "75px", height: "75px" }}>
                                                    <i class="fa fa-water fa-2x text-primary"></i>
                                                </div>
                                                <h4 class="mb-3">{service.servicename}</h4>
                                                <p>{service.servicetype}</p>
                                                <p class="text-primary fw-medium"><i class="fa fa-check text-success me-2"></i>Quality Service</p>
                                                <p class="text-primary fw-medium"><i class="fa fa-check text-success me-2"></i>Customer Satisfaction</p>
                                                <p class="text-primary fw-medium"><i class="fa fa-check text-success me-2"></i>Support 24/7</p>
                                                <Link to="/booking" class="btn bg-white text-primary w-100 mt-2">Book Your Service<i class="fa fa-arrow-right text-secondary ms-2"></i></Link>
                                            </div>
                                            <br />
                                        </Col>
                                    ))}
                                </Row>


                                {/* </Carousel.Item>
                                </Carousel> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Service End --> */}


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

export default Service