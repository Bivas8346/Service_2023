import React, { useEffect, useState } from 'react';
import './Blog.css';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Blog = () => {

  const [blogData, setAllblog] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:4225/api/blog')
      .then((res) => {
        setAllblog(res.data.data);
      })
      .catch((error) => {
        console.log(error);
      })
  }, []);

  return (
    <>
      <div className="blog-post">
        <div className="blog-hero"><img src='https://plus.unsplash.com/premium_photo-1661407783160-b6f950068f2a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80' width="100%" height="400px" alt='' /></div>
        {blogData.map((blg) => (
          <article className='tbloga'>
            <div className="blog-content">
              <div className='summary'>
                <h3 className="tblogh">{blg.title}</h3>
                <div className="blog-date">23 Dec 2016</div>
              </div>
            </div>
            <div className="blog-img2">
              <img src={`http://localhost:4225/${blg.image}`} width="400px" height="230px" />
            </div>
            <Link to={`/oneblog/${blg._id}`}>
              <div className="blog-content2">
                <p className="tblogp">{blg.title}</p>

                <p className="tblogps">{blg.description}</p>
              </div>
            </Link>
          </article>
        ))}
      </div>
    </>
  )
}
// 
export default Blog