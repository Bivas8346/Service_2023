import React, { useEffect, useState } from 'react'
import axios from 'axios';


const Booking = () => {

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

    const [serviceData, setAllservice] = useState([]);

    useEffect(() => {
        axios
            .get('http://localhost:4225/api/service')
            .then((res) => {
                setAllservice(res.data.data);
            })
            .catch((error) => {
                console.log(error);
            })
    }, []);

    let [cont, setCont] = useState()
    let handleChange = (event) => {
        let { name, value } = event.target;
        console.log(name, value);
        setCont({ ...cont, [name]: value });
    }
    let handleSubmit = (event) => {
        event.preventDefault();
        console.log("submited:", cont);
        let add = {
            name: cont.name,
            email: cont.email,
            service: cont.service,
            providername: cont.providername,
            location: cont.location,
            date: cont.date,
            message: cont.message
        }
        axios.post('http://localhost:4225/api/booking', add)
            .then(res => {
                console.log(res);
            })
            .catch(err => {
                console.log(err);
            })
    }

    return (
        <>
            {/* <!-- Page Header Start --> */}
            <div class="container-fluid page-header mb-5 py-5" style={{ backgroundColor: "rgb(4, 169, 255)" }}>
                <div class="container">
                    <h1 class="display-3 text-white mb-3 animated slideInDown">Booking</h1>
                    <nav aria-label="breadcrumb animated slideInDown">
                        <ol class="breadcrumb text-uppercase">
                            <li class="breadcrumb-item"><a class="text-white" href="#">Home</a></li>
                            <li class="breadcrumb-item"><a class="text-white" href="#">Pages</a></li>
                            <li class="breadcrumb-item text-white active" aria-current="page">Booking</li>
                        </ol>
                    </nav>
                </div>
            </div>
            {/* <!-- Page Header End --> */}


            {/* <!-- Booking Start --> */}
            <div class="container-fluid px-0" style={{ margin: "6rem 0" }}>
                <div class="video wow fadeInUp" data-wow-delay="0.1s">
                    <button type="button" class="btn-play" data-bs-toggle="modal" data-src={"https://www.youtube.com/shorts/EuGT6Uel3yQ"} data-bs-target="#videoModal">
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
                                        <iframe class="embed-responsive-item" src={"https://www.youtube.com/shorts/EuGT6Uel3yQ"} id="video" allowfullscreen allowscriptaccess="always"
                                            allow="autoplay"></iframe>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <h1 class="text-white mb-4">Emergency Service Support</h1>
                    <h3 class="text-white mb-0">24 Hours 7 Days a Week</h3>
                </div>
                <div class="container position-relative wow fadeInUp" data-wow-delay="0.1s" style={{ marginTop: "-6rem" }}>
                    <div class="row justify-content-center">
                        <div class="col-lg-8">
                            <div class="bg-light text-center p-5">
                                <h1 class="mb-4">Book For A Service</h1>
                                <form onSubmit={handleSubmit}>
                                    <div class="row g-3">
                                        <div class="col-12 col-sm-6">
                                            <input type="text" class="form-control border-0" placeholder="Your Name" name='name' style={{ height: "55px" }} onChange={handleChange} />
                                        </div>
                                        <div class="col-12 col-sm-6">
                                            <input type="email" class="form-control border-0" placeholder="Your Email" name='email' style={{ height: "55px" }} onChange={handleChange} />
                                        </div>

                                        <div class="col-12 col-sm-6">
                                            <select class="form-select border-0" name='service' style={{ height: "55px" }} onChange={handleChange} >
                                                <option selected>Select A Service</option>
                                                {serviceData.map((serv) => (
                                                    <option>{serv.servicename}</option>
                                                ))}
                                            </select>
                                        </div>



                                        <div class="col-12 col-sm-6">
                                            <select class="form-select border-0" name='providername' style={{ height: "55px" }} onChange={handleChange}>
                                                <option selected>Select A Provider</option>
                                                {providerData.map((provi) => (
                                                    <option value={provi._id}>{provi.providername}({provi.servicetype})</option>
                                                ))}
                                            </select>
                                        </div>

                                        <div class="col-12 col-sm-6">
                                            <div class="date" >
                                                <input type="date"
                                                    class="form-control border-0 datetimepicker-input" name='date' style={{ height: "55px" }} onChange={handleChange} />
                                            </div>
                                        </div>
                                        <div class="col-12 col-sm-6">
                                            <div class="date" >
                                                <input type="text" class="form-control border-0" placeholder="Your Location" name='location' style={{ height: "55px" }} onChange={handleChange} />
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <input class="form-control border-0" name='message' placeholder="Special Request" style={{ height: "55px" }} onChange={handleChange} />
                                        </div>

                                        <button class="btn btn-primary w-100 py-3 col-12" type="submit">Book Now</button>

                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Booking End --> */}
        </>
    )
}

export default Booking