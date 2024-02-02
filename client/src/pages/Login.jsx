import React, { useEffect } from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { RegLog, loginRequest } from '../redux/AuthSlice'
const initialValue = {
  email: "",
  password: ""
}

const Login = () => {
  const [user, setUser] = useState(initialValue)
  const { redirectTo } = useSelector((state) => state?.Auth);
  const navigate = useNavigate();
  const [error, setError] = useState({});
  const dispatch = useDispatch();
  //form validation
  const validation = () => {
    let error = {}
    if (!user.email) {
      error.email = "Email is Required"
    }
    if (!user.password) {
      error.password = "Password is Required"
    }
    return error
  }
  //onchange validation
  let name, value
  const postUserData = (e) => {
    name = e.target.name
    value = e.target.value
    setUser({ ...user, [name]: value })
    if (name === "email") {
      if (value.length === 0) {
        setError({ ...error, email: "Email is required" })
        setUser({ ...user, email: "" })
      } else {
        setError({ ...error, email: "" })
        setUser({ ...user, email: value })
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

  const SubmitInfo = async e => {
    e.preventDefault()
    let ErrorList = validation()
    setError(ErrorList)
    let data = {
      email: user.email,
      password: user.password
    }
    dispatch(loginRequest(data))
    navigate("/");
  }


  //redirect if get the token or not get the token 
  const redirectUser = () => {
    let token = localStorage.getItem("token")
    let isInLoginPage = window.location.pathname.toLowerCase() === "/login";

    if (token !== null && token !== undefined && token !== "") {
      // window.location.pathname = getPathname;
    }
  }
  useEffect(() => {
    redirectUser()
  }, [redirectTo])

  const log = () => {
    dispatch(RegLog())
  }

  return (
    <>
      <div class="container position-relative wow fadeInUp" data-wow-delay="0.1s" style={{ marginTop: "-6rem;" }}>
        <div class="row justify-content-center">
          <div class="col-lg-8">
            <div class="bg-light text-center p-5">
              <h1 class="mb-4">User Log-In</h1>
              <form>
                <div class="row g-3">
                  <div class="col-12">
                    <input type="email" class="form-control border-0" name="email" placeholder="Your Email" style={{ height: "55px" }}
                      onChange={e => postUserData(e)} />
                    <span style={{ color: "red" }}> {error.email} </span>
                  </div>
                  <div class="col-12">
                    <input type="password" class="form-control border-0" name="password" placeholder="Password" style={{ height: "55px" }}
                      onChange={e => postUserData(e)} />
                    <span style={{ color: "red" }}> {error.password} </span>
                  </div>
                  <div class="col-12">
                    <button class="btn btn-primary w-100 py-3" type="submit" onClick={SubmitInfo}>Log-in</button>
                  </div>
                </div>
              </form>
            </div>
            <p class="text-center fs-5">If You Don,t Have any Account-:  <Link onClick={log} to="/Sign" class="fs-5">Click Here</Link></p>
          </div>
        </div>
      </div>

    </>
  )
}

export default Login