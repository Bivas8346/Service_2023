import React from 'react'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { registerUser } from '../redux/AuthSlice'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'


const initialValue = {
  name: "",
  email: "",
  phone: "",
  password: "",
}

const Signup = () => {

  const { redirectReg } = useSelector((state) => state?.Auth);
  const [user, setUser] = useState(initialValue);
  const [error, setError] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();


  const validation = () => {
    let error = {}

    if (!user.name) {
      error.name = "Name is Required"
    }

    if (!user.email) {
      error.email = "Email is Required"
    }

    if (!user.phone) {
      error.phone = "Phone is Required"
    }
    if (!user.password) {
      error.password = "Password is Required"
    }

    return error
  }

  let name, value
  const postUserData = (e) => {
    name = e.target.name
    value = e.target.value
    setUser({ ...user, [name]: value })


    if (name === "name") {
      if (value.length === 0) {
        setError({ ...error, name: "@Name is Required" })
        setUser({ ...user, name: "" })
      } else {
        setError({ ...error, name: "" })
        setUser({ ...user, name: value })
      }
    }
    if (name === "email") {
      if (value.length === 0) {
        setError({ ...error, email: "Email is required" })
        setUser({ ...user, email: "" })
      } else {
        setError({ ...error, email: "" })
        setUser({ ...user, email: value })
      }
    }
    if (name === "phone") {
      if (value.length === 0) {
        setError({ ...error, phone: "@phone is Required" })
        setUser({ ...user, phone: "" })
      } else {
        setError({ ...error, phone: "" })
        setUser({ ...user, phone: value })
      }
    }
    if (name === "password") {
      if (value.length === 0) {
        setError({ ...error, password: "@password is Required" })
        setUser({ ...user, password: "" })
      } else {
        setError({ ...error, password: "" })
        setUser({ ...user, password: value })
      }
    }
  }

  const SubmitInfo = async (e) => {
    e.preventDefault()
    // let ErrorList = validation()
    setError(validation())
    let data = {
      name: user.name,
      email: user.email,
      phone: user.phone,
      password: user.password
    }
    console.log(data);
    dispatch(registerUser(data))
    navigate("/Log");
  }
  const redirectUser = () => {
    // let name = localStorage.getItem("name")
    let isInLoginPage = window.location.pathname.toLowerCase() === "/register";
    if (name !== null && name !== undefined && name !== "") {
      isInLoginPage && navigate("/Log");
    }

  }

  useEffect(() => {
    redirectUser()
  }, [redirectReg])


  return (
    <>
      <div class="container position-relative wow fadeInUp" data-wow-delay="0.1s" style={{ marginTop: "-6rem" }}>
        <div class="row justify-content-center">
          <div class="col-lg-8">
            <div class="bg-light text-center p-5">
              <h1 class="mb-4">User Registration</h1>
              <form method='post' encType="multipart/form-data" >
                <div class="row g-3">
                  <div class="col-12">
                    <input type="text" class="form-control border-0" name="name" placeholder="Your Name" style={{ height: "55px" }}
                      value={user.name}
                      onChange={e => postUserData(e)} />
                    <span style={{ color: "red" }}> {error.name} </span>
                  </div>
                  <div class="col-12">
                    <input type="email" class="form-control border-0" name="email" placeholder="Your Email" style={{ height: "55px" }}
                      value={user.email}
                      onChange={e => postUserData(e)} />
                    <span style={{ color: "red" }}> {error.email} </span>
                  </div>
                  <div class="col-12">
                    <input type="text" class="form-control border-0" name="phone" placeholder="Your Phone No." style={{ height: "55px" }}
                      value={user.phone}
                      onChange={e => postUserData(e)} />
                    <span style={{ color: "red" }}> {error.phone} </span>
                  </div>
                  <div class="col-12">
                    <input type="password" class="form-control border-0" name="password" placeholder="Password" style={{ height: "55px" }}
                      value={user.password}
                      onChange={e => postUserData(e)} />
                    <span style={{ color: "red" }}> {error.password} </span>
                  </div>
                  <div class="col-12">
                    <button class="btn btn-primary w-100 py-3" type="submit" onClick={SubmitInfo}>Register</button>
                  </div>
                  **If You already Register<Link to={'/Log'}>Click Here!</Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default Signup