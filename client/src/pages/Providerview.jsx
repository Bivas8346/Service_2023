import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Row, Col } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom';

const Providerview = () => {
    let navi = useNavigate();
    let handleLogout = () => {
        window.localStorage.clear();
        console.log("log out done");
        alert("log out");
        navi("/");
    }

    const [providerData, setAllprovider] = useState([]);

    useEffect(() => {
        axios
            .get('http://localhost:4225/api/Bookpro')
            .then((res) => {
                setAllprovider(res.data.data);
            })
            .catch((error) => {
                console.log(error);
            })
    }, []);
    const name = localStorage.getItem("name");
    const id = localStorage.getItem("_id");
    return (
        <>
            <div class="container-fluid py-5 px-4 px-lg-0 ">
                <div class="row g-0">
                    <div class="col-md-12 col-lg-11">
                        <div class="ms-lg-5 ps-lg-5">
                            <div class="text-center text-lg-start wow fadeInUp" data-wow-delay="0.1s">
                                <h6 class="text-secondary text-uppercase">Services Booking</h6>
                                <h1 class="mb-5">Your Booking</h1>
                            </div>
                            <p className="nav-item nav-link fs-5">Hi..{name}</p>
                            <Link to={"/"} onClick={handleLogout}>Logout</Link>
                            <div class="service-carousel position-relative wow fadeInUp" data-wow-delay="0.1s">
                                <Row>
                                    {providerData.map((book) => (
                                        <Col>
                                            <div class="bg-light p-4">
                                                <h4 class="mb-3">{book.name}</h4>
                                                <p>Costumer Email:-<p class="text-primary fw-medium">{book.email}</p></p>
                                                <p>Booking Date:-<p class="text-primary fw-medium">{book.date}</p></p>
                                                <p>Costumer Location:-<p class="text-primary fw-medium">{book.location}</p></p>
                                            </div>
                                        </Col>
                                    ))}

                                </Row>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Providerview