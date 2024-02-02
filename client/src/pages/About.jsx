import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const About = () => {


    const [aboutData, setAllabout] = useState([]);
    const [LimitserviceData, setAlllimitservice] = useState([]);
    const [LimitprovidereData, setAlllimitprovider] = useState([]);

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
    }, []);

    return (
        <>
            {/* <!-- Page Header Start --> */}
            <div class="container-fluid page-header mb-5 py-5" style={{ backgroundColor: "rgb(4, 169, 255)" }}>
                <div class="container">
                    <h1 class="display-3 text-white mb-3 animated slideInDown">About Us</h1>
                    <nav aria-label="breadcrumb animated slideInDown">
                        <ol class="breadcrumb text-uppercase">
                            <li class="breadcrumb-item"><a class="text-white" href="#">Home</a></li>
                            <li class="breadcrumb-item"><a class="text-white" href="#">Pages</a></li>
                            <li class="breadcrumb-item text-white active" aria-current="page">About</li>
                        </ol>
                    </nav>
                </div>
            </div>
            {/* <!-- Page Header End --> */}


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
                            <h2 class="text-white mb-2" data-toggle="counter-up">1234</h2>
                            <p class="text-white mb-0">Years Experience</p>
                        </div>
                        <div class="col-md-6 col-lg-3 text-center wow fadeIn" data-wow-delay="0.3s">
                            <i class="fa fa-users-cog fa-2x text-white mb-3"></i>
                            <h2 class="text-white mb-2" data-toggle="counter-up">1234</h2>
                            <p class="text-white mb-0">Expert Technicians</p>
                        </div>
                        <div class="col-md-6 col-lg-3 text-center wow fadeIn" data-wow-delay="0.5s">
                            <i class="fa fa-users fa-2x text-white mb-3"></i>
                            <h2 class="text-white mb-2" data-toggle="counter-up">1234</h2>
                            <p class="text-white mb-0">Satisfied Clients</p>
                        </div>
                        <div class="col-md-6 col-lg-3 text-center wow fadeIn" data-wow-delay="0.7s">
                            <i class="fa fa-wrench fa-2x text-white mb-3"></i>
                            <h2 class="text-white mb-2" data-toggle="counter-up">1234</h2>
                            <p class="text-white mb-0">Compleate Projects</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Fact End --> */}

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


        </>
    )
}

export default About