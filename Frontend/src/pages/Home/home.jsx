import React, { useState, useEffect } from 'react';
import axios from '../../axios'; // Ensure you have axios installed and properly configured
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from "react-router-dom";
import { useLocation } from 'react-router-dom';


export default function Home() {
    const navigate = useNavigate();
    const [blogs, setBlogs] = useState([]);
    const baseURL = 'http://localhost:5000/'; // Adjust this base URL to match your backend servers

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const response = await axios.get(`${baseURL}native/allblogs`);  // Adjust the endpoint as necessary
                setBlogs(response.data);
                console.log(response.data);
            } catch (error) {
                console.error("Failed to fetch blogs: ", error);
            }
        };

        fetchBlogs();
    }, []);

    const navigateToBlogs = (blogId) => {
      // Navigate with state
      navigate("/user/seeBlogs", { state: { blogId: blogId } });
  };

    

    return (
      <div>
        <br />
        <h1 className="mb-3 mb-xl-4 text-uppercase text-center my-5" style={{fontSize: '38px'}}> Blogs </h1>
        <hr />
        <div className="container overflow-hidden">
            <div className="row gy-4 gy-lg-0">
                {blogs.map((blog) => (
                    <div className="col-12 col-lg-4 mt-5" key={blog.id}>
                        <article>
                            <div className="card border-0">
                                <img className="card-img-top img-fluid m-0" loading="lazy" src={`${baseURL}${blog.Blog_Title_Image}`} alt=""/>
                                <div className="card-body border bg-white p-4">
                                    <div className="entry-header mb-3">
                                        <h2 className="card-title entry-title h4 mb-0">
                                            <a className="link-dark text-decoration-none" href="#!">{blog.Blog_Title}</a>
                                        </h2>
                                    </div>
                                    <div className='text-justify-center'>
                                        <p className="card-text entry-summary text-secondary mb-3">
                                            {blog.Blog_Content.split(" ").slice(0, 100).join(" ")}...
                                        </p>
                                        <div className='text-center'>
                                            {/* Update the onClick handler to pass blog's ID */}
                                            <a href="#!" className="btn bsb-btn-2xl btn-primary " style={{fontSize: 20}} onClick={() => navigateToBlogs(blog.id)}>Read More</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </article>
                    </div>
                ))}
                <div className='mb-5'></div>
            </div>
        </div>
      </div>
    );
}
