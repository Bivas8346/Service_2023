// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React, { Suspense } from 'react';
import Home from './pages/Home';
import Topbar from './components/common/Topbar';
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
// import Service from './pages/Service';
// import About from './pages/About';
import Contact from './pages/Contact';
import Booking from './pages/Booking';
// import Technician from './pages/Technician';
import Providereg from './pages/Providereg';
import Providerlog from './pages/Providerlog';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Providerview from './pages/Providerview';
// import Review from './pages/Review';
// import Blog from './pages/Blog';
import PNF from './pages/PNF';
import Singleblog from './pages/Singleblog';
import PrivetRoute from './redux/PrivetRoute';



let About = React.lazy(() => {
  return new Promise((resolve,) => {
    setTimeout(() => resolve(import('./pages/About')), 2000)
  })
}
);


let Service = React.lazy(() => {
  return new Promise((resolve,) => {
    setTimeout(() => resolve(import('./pages/Service')), 1000)
  })
}
);

let Review = React.lazy(() => {
  return new Promise((resolve,) => {
    setTimeout(() => resolve(import('./pages/Review')), 2000)
  })
}
);

let Blog = React.lazy(() => {
  return new Promise((resolve,) => {
    setTimeout(() => resolve(import('./pages/Blog')), 2000)
  })
}
);

let Technician = React.lazy(() => {
  return new Promise((resolve,) => {
    setTimeout(() => resolve(import('./pages/Technician')), 1000)
  })
}
);

function App() {
  return (
    <>
      <Router>
        <Topbar />
        <Navbar />
        <Suspense
          fallback={<div id="spinner" class="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
            <div class="spinner-border text-primary" style={{ width: "3rem", height: "3rem" }} role="status">
              <span class="sr-only">Loading...</span>
            </div>
          </div>}>

          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/service' element={<Service />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />


            <Route path='/Log' element={<Login />} />
            <Route path='/Sign' element={<Signup />} />




            <Route path='/regservice' element={<Providereg />} />
            <Route path='/logservice' element={<Providerlog />} />
            <Route path='/Dashservice' element={<Providerview />} />


            <Route path='/oneblog/:id' element={<Singleblog />} />

            <Route element={<PrivetRoute />}>
              <Route path='/booking' element={<Booking />} />
              <Route path='/review' element={<Review />} />
              <Route path='/blog' element={<Blog />} />
              <Route path='/technician' element={<Technician />} />
            </Route>

            <Route path='*' element={<PNF />} />
          </Routes>
        </Suspense>
        <Footer />
      </Router >
    </>
  );
}

export default App;
