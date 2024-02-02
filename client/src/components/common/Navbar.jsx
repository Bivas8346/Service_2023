import React from 'react'
// import { Link, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import { logout } from '../../redux/AuthSlice';

const Navbar = () => {

    const dispatch = useDispatch();
    const nav = useNavigate()
    const { Logouttoggle } = useSelector((state) => state?.Auth);
    const name = localStorage.getItem("name");

    const handlelogout = () => {
        dispatch(logout())
        nav('/')
    }

    return (
        <>
            {/* <!-- Navbar Start --> */}
            <div class="container-fluid nav-bar bg-light">
                <nav class="navbar navbar-expand-lg navbar-light bg-white p-3 py-lg-0 px-lg-4">
                    <Link to="" class="navbar-brand d-flex align-items-center m-0 p-0 d-lg-none">
                        <h1 class="text-primary m-0">Plumberz</h1>
                    </Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                        <span class="fa fa-bars"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarCollapse">
                        <div class="navbar-nav me-auto">
                            <Link to="/" class="nav-item nav-link active">Home</Link>
                            <Link to="/about" class="nav-item nav-link">About</Link>
                            <Link to="/service" class="nav-item nav-link">Services</Link>
                            <Link to="/booking" class="nav-item nav-link">Booking</Link>
                            <Link to="/technician" class="nav-item nav-link">Technicians</Link>
                            <Link to="/review" class="navbar-collapse nav-item nav-link">Testimonial</Link>
                            <Link to="/contact" class="navbar-collapse nav-item nav-link">Contact</Link>
                            <Link to="/blog" class="navbar-collapse nav-item nav-link">Blog</Link>
                        </div>


                        <Link className="nav-item nav-link fs-5" >{name}</Link>
                        {Logouttoggle ? <>

                            <Link className="nav-item nav-link fs-5" onClick={handlelogout}>Logout</Link>
                        </> : <>
                            <Link to="/Log" className="nav-item nav-link fs-5" >Login</Link>
                        </>
                        }




                        {/* <Link to="/Log" class="nav-item nav-link fs-5">Log-In/Register</Link> */}
                        <div class="mt-4 mt-lg-0 me-lg-n4 py-3 px-4 bg-primary d-flex align-items-center">
                            <div class="d-flex flex-shrink-0 align-items-center justify-content-center bg-white" style={{ width: "45px", height: "45px" }}>
                                <i class="fa fa-phone-alt text-primary"></i>
                            </div>
                            <div class="ms-3">
                                <p class="mb-1 text-white">Emergency 24/7</p>
                                <h5 class="m-0 text-secondary">+012 345 6789</h5>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
            {/* <!-- Navbar End --> */}
        </>
    )
}

export default Navbar