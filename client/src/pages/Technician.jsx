import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Technician = () => {

    const [providerData, setAllprovider] = useState([]);

    useEffect(() => {
        axios
            .get('http://localhost:4225/api/provider')
            .then((res) => {
                setAllprovider(res.data.data);
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
                    <h1 class="display-3 text-white mb-3 animated slideInDown">Technicians</h1>
                    <nav aria-label="breadcrumb animated slideInDown">
                        <ol class="breadcrumb text-uppercase">
                            <li class="breadcrumb-item"><a class="text-white" href="#">Home</a></li>
                            <li class="breadcrumb-item"><a class="text-white" href="#">Pages</a></li>
                            <li class="breadcrumb-item text-white active" aria-current="page">Technicians</li>
                        </ol>
                    </nav>
                </div>
            </div>
            {/* <!-- Page Header End --> */}


            {/* <!-- Team Start --> */}
            <div class="container-xxl py-5">
                <div class="container">
                    <div class="text-center wow fadeInUp" data-wow-delay="0.1s">
                        <h6 class="text-secondary text-uppercase">Our Technicians</h6>
                        <h1 class="mb-5">Our Expert Technicians</h1>
                    </div>
                    <div class="row g-4">
                        {providerData.map((Prov) => (
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

export default Technician