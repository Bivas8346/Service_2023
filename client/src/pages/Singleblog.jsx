import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from "react-router-dom";
import './Blog.css';
import axios from 'axios';

const Singleblog = () => {
    const [sblogData, setAllsblog] = useState([]);
    let [readcomment, setreadcomment] = useState([]);
    let { id } = useParams();
    console.log("Recived from url in subitem", id);
    useEffect(() => {
        axios
            .get(`http://localhost:4225/api/singleblog/${id}`)
            .then((res) => {
                setAllsblog(res.data.data);
                console.log(res.data.data);
            })
            .catch((error) => {
                console.log(error);
            })

        axios.get('http://localhost:4225/api/getcommment')
            .then(res => {
                console.log(res.data.data)
                setreadcomment(res.data.data)
            }).catch(err => {
                console.log(err)
            })
    }, []);


    const navigate = useNavigate();
    let [cont, setCont] = useState();
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
            comment: cont.comment,
            postId: id,
        }
        axios.post('http://localhost:4225/api/comment', add)
            .then(res => {
                console.log(res);
                navigate("#");
            })
            .catch(err => {
                console.log(err);
            })
    }

    return (
        <>
            <div className="blog-post">
                <div className="blog-hero"><img src={`http://localhost:4225/${sblogData.image}`} width="100%" height="400px" alt='' /></div>
                <article className='tbloga'>
                    <div className="blog-content">
                        <div className='summary'>
                            <h3 className="tblogh">{sblogData.title}</h3>
                            <div className="blog-date">23 Dec 2016</div>
                        </div>
                    </div>
                    <div className="blog-content2">
                        <p className="tblogp">{sblogData.description}</p>

                        <p className="tblogps">{sblogData.description}</p>
                    </div>
                </article>

                <div class="comment-area mt-4 mb-5">
                    <h4 class="mb-4">Comments... </h4>
                    <ul class="comment-tree list-unstyled">
                        {readcomment.map((rcom) => {
                            {
                                if (rcom.postId === id) {
                                    return (

                                        <>
                                            <li class="mb-5">
                                                <div class="comment-area-box d-block d-sm-flex">
                                                    {/* <div class="comment-thumb">
                                                        <img alt="" src={rcom.avatar} style={{ height: 70 }} />
                                                    </div> */}

                                                    <div class="block">
                                                        <div class="comment-info">
                                                            <h6 class="mb-1">{rcom.name}</h6>
                                                            <span class="date-comm">| Posted {rcom.createdAt.slice(0, 10)}</span>
                                                        </div>

                                                        <div class="comment-content">
                                                            <p><b>{rcom.comment}</b></p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                        </>
                                    )

                                }
                            }



                        })}

                    </ul>
                </div>

                <div class="col-md-8" data-wow-delay="0.1s">
                    <h4>Put Comments</h4>
                    <div class="p-5 h-100 d-flex align-items-center">
                        <form onSubmit={handleSubmit}>
                            <div class="row g-3">
                                <div class="col-md-6">
                                    <div class="form-floating">
                                        <input type="text" class="form-control" id="name" placeholder="Your Name" name='name' onChange={handleChange} />
                                        <label for="name">Your Name</label>
                                    </div>
                                </div>
                                <input type="hidden" name='postId' onChange={handleChange} />
                                <div class="col-md-6">
                                    <div class="form-floating">
                                        <input type="email" class="form-control" id="email" placeholder="Your Email" name='email' onChange={handleChange} />
                                        <label for="email">Your Email</label>
                                    </div>
                                </div>
                                <div class="col-12">
                                    <div class="form-floating">
                                        <input type='text' class="form-control" placeholder="Leave a message here" id="message" name='comment' onChange={handleChange} />
                                        <label for="message">Comment</label>
                                    </div>
                                </div>

                                <button class="btn btn-primary w-100 py-3 col-12" type="submit">Send Message</button>

                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Singleblog