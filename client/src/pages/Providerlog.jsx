import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Providerlog = () => {


    let [reg, setReg] = useState()
    let nav = useNavigate()
    let handleChange = (event) => {
        let { name, value } = event.target;
        console.log(name, value);
        setReg({ ...reg, [name]: value });
    }
    let handleSubmit = (event) => {
        event.preventDefault();
        console.log("submited:", reg);
        let add = {
            email: reg.email,
            password: reg.password
        }
        axios.post('http://localhost:4225/api/providerlog', add,
            {
                headers: {
                    Content_Type: "application/json",
                    "x-access-token": "*"
                },
            }
        )
            .then(res => {
                console.log(res);

                if (res.data.status === 200) alert("log-in succesful");
                else alert("log-in Done" + res.data.message);

                window.localStorage.setItem("token", res.data.token);
                nav('/Dashservice');
            })
            .catch(err => {
                console.log(err);
            })
    }
    return (
        <>

            <div class="container position-relative wow fadeInUp" data-wow-delay="0.1s" style={{ marginTop: "-6rem" }}>
                <div class="row justify-content-center">
                    <div class="col-lg-8">
                        <div class="bg-light text-center p-5">
                            <h1 class="mb-4">Provider Log-In</h1>
                            <form  onSubmit={handleSubmit}>
                                <div class="row g-3">
                                    <div class="col-12">
                                        <input type="email" class="form-control border-0" placeholder="Your Email" name='email' style={{ height: "55px" }} onChange={handleChange} />
                                    </div>
                                    <div class="col-12">
                                        <input type="password" class="form-control border-0" placeholder="Password" name='password' style={{ height: "55px" }} onChange={handleChange} />
                                    </div>
                                    <div class="col-12">
                                        <button class="btn btn-primary w-100 py-3" type="submit">Log-in</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <p class="text-center fs-5">If You Don,t Have any Account-:  <a href="/regservice" class="fs-5">Click Here</a></p>
                    </div>
                </div>
            </div>


        </>
    )
}

export default Providerlog