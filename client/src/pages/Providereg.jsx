import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Providerlog = () => {
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



    let [provider, setReg] = useState()
    let nav = useNavigate()
    let handleChange = (event) => {
        let { name, value } = event.target;
        console.log(name, value);
        setReg({ ...provider, [name]: value });
    }
    let handleSubmit = (event) => {
        event.preventDefault();
        console.log("submited:", provider);
        let add = {
            providername: provider.providername,
            email: provider.email,
            phone: provider.phone,
            servicetype: provider.servicetype,
            address: provider.address,
            experince: provider.experince,
            // image: provider.image,
            message: provider.message,
            password: provider.password,
        }
        axios.post('http://localhost:4225/api/providereg', add)
            .then(res => {
                console.log(res);
                nav('/logservice');
                alert("Register Successfully");
            })
            .catch(err => {
                console.log(err);
            })
    }



    return (
        <>
            {/* <!-- Booking Start --> */}
            <div class="container position-relative wow fadeInUp" data-wow-delay="0.1s" style={{ marginTop: "-6rem" }}>
                <div class="row justify-content-center">
                    <div class="col-lg-8">
                        <div class="bg-light text-center p-5">
                            <h1 class="mb-4">Register For Provider</h1>
                            <form method='post' onSubmit={handleSubmit} encType='multipart/form-data'>
                                <div class="row g-3">
                                    <div class="col-12 col-sm-6">
                                        <input type="text" class="form-control border-0" placeholder="Your Name" name='providername' style={{ height: "55px" }} onChange={handleChange} />
                                    </div>
                                    <div class="col-12 col-sm-6">
                                        <input type="email" class="form-control border-0" placeholder="Your Email" name='email' style={{ height: "55px" }} onChange={handleChange} />
                                    </div>
                                    <div class="col-12 col-sm-6">
                                        <input type="tel" class="form-control border-0" placeholder="Your Phone" name='phone' style={{ height: "55px" }} onChange={handleChange} />
                                    </div>
                                    <div class="col-12 col-sm-6">
                                        <select class="form-select border-0" name='servicetype' style={{ height: "55px" }} onChange={handleChange}>
                                            <option selected>servicetype</option>
                                            {serviceData.map((serv) => (
                                                <option>{serv.servicename}</option>
                                            ))}
                                        </select>
                                    </div>
                                    <div class="col-12 col-sm-6">
                                        <input type="text" class="form-control border-0" placeholder="Address" name='address' style={{ height: "55px" }} onChange={handleChange} />
                                    </div>
                                    <div class="col-12 col-sm-6">
                                        <input type="text" class="form-control border-0" placeholder="Exprience" name='experince' style={{ height: "55px" }} onChange={handleChange} />
                                    </div>
                                    {/* <div class="col-12 col-sm-6">
                                        <input type="file" accept="image/*" multiple={false} class="form-control border-0" name='image' style={{ height: "55px" }} onChange={handleChange} />
                                    </div> */}
                                    <div class="col-12">
                                        <input type="password" class="form-control border-0" placeholder="Password" name='password' style={{ height: "55px" }} onChange={handleChange} />
                                    </div>
                                    <div class="col-12">
                                        <input class="form-control border-0" placeholder="Special Request" name='message' style={{ height: "55px" }} onChange={handleChange} multiple />
                                    </div>

                                    <button class="btn btn-primary w-100 py-3 col-12" type="submit">Register</button>

                                </div>
                            </form>
                        </div>
                        <p class="text-center fs-5">If You Already Have an Account-:  <a href="/logservice" class="fs-5">Click Here</a></p>
                    </div>
                </div>
            </div>

            {/* <!-- Booking End --> */}
        </>
    )
}

export default Providerlog