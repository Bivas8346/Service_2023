import React from 'react';
import { Link } from 'react-router-dom'

const Topbar = () => {
    return (
        <>
            {/* <!-- Topbar Start --> */}
            <div class="container-fluid bg-light d-none d-lg-block">
                <div class="row align-items-center top-bar">
                    <div class="col-lg-3 col-md-12 text-center text-lg-start">
                        <a href="" class="navbar-brand m-0 p-0">
                            <h1 class="text-primary m-0">Every Solution(:</h1>
                        </a>
                    </div>
                    <div class="col-lg-9 col-md-12 text-end">
                        <div class="h-100 d-inline-flex align-items-center me-4">
                            <i class="fa fa-map-marker-alt text-primary me-2"></i>
                            <p class="m-0">123 Street, New York, USA</p>
                        </div>
                        <div class="h-100 d-inline-flex align-items-center me-4">
                            <i class="far fa-envelope-open text-primary me-2"></i>
                            <p class="m-0">info@example.com</p>
                        </div>
                        <div class="mt-4 mt-lg-0 me-lg-n4 py-3 px-4 bg-primary d-flex h-100 d-inline-flex align-items-center" id="navbarCollapse">
                            <Link to="/logservice" class="nav-item nav-link text-white fs-5">Service Provider</Link>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Topbar End --> */}

        </>
    )
}

export default Topbar