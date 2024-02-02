import React, { useEffect, useState } from 'react';
import { Carousel, CarouselItem } from 'react-bootstrap';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'

const Review = () => {

    const [reviewData, setAllreview] = useState([]);

    useEffect(() => {
        axios
            .get('http://localhost:4225/api/review')
            .then((res) => {
                setAllreview(res.data.data);
            })
            .catch((error) => {
                console.log(error);
            })
    }, []);



    let [cont, setCont] = useState()
    const navigate = useNavigate();
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
            profession: cont.profession,
            message: cont.message,
        }
        axios.post('http://localhost:4225/api/reviewC', add)
            .then(res => {
                console.log(res);
                navigate("/review");
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
                    <h1 class="display-3 text-white mb-3 animated slideInDown">Testimonial</h1>
                    <nav aria-label="breadcrumb animated slideInDown">
                        <ol class="breadcrumb text-uppercase">
                            <li class="breadcrumb-item"><a class="text-white" href="#">Home</a></li>
                            <li class="breadcrumb-item"><a class="text-white" href="#">Pages</a></li>
                            <li class="breadcrumb-item text-white active" aria-current="page">Testimonial</li>
                        </ol>
                    </nav>
                </div>
            </div>
            {/* <!-- Page Header End --> */}


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
                                <CarouselItem>
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
                                </CarouselItem>
                            ))}
                        </Carousel>
                    </div>
                </div>
                <div class="col-md-8" data-wow-delay="0.1s">
                    <h4>Give Your Review</h4>
                    <div class="p-5 h-100 d-flex align-items-center">
                        <form onSubmit={handleSubmit}>
                            <div class="row g-3">
                                <div class="col-md-6">
                                    <div class="form-floating">
                                        <input type="text" class="form-control" id="name" placeholder="Your Name" name='name' onChange={handleChange} />
                                        <label for="name">Your Name</label>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-floating">
                                        <input type="email" class="form-control" id="email" placeholder="Your Email" name='email' onChange={handleChange} />
                                        <label for="email">Your Email</label>
                                    </div>
                                </div>
                                <div class="col-12">
                                    <div class="form-floating">
                                        <input type="text" class="form-control" id="subject" placeholder="Profession" name='profession' onChange={handleChange} />
                                        <label for="subject">Profession</label>
                                    </div>
                                </div>
                                <div class="col-12">
                                    <div class="form-floating">
                                        <input type='text' class="form-control" placeholder="Leave a message here" id="message" style={{ height: "150px" }} name='message' onChange={handleChange} />
                                        <label for="message">Message</label>
                                    </div>
                                </div>

                                <button class="btn btn-primary w-100 py-3 col-12" type="submit">Send Message</button>

                            </div>
                        </form>
                    </div>
                </div>
            </div>
            {/* <!-- Testimonial End --> */}
        </>
    )
}

export default Review