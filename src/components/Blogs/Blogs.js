import React, { useEffect, useState } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import "bootstrap/dist/css/bootstrap.min.css"
import 'bootstrap/dist/js/bootstrap.min.js'
import "./Blogs.css"
import Input from "./components/Input"
import Button from "./components/Button";
import thumbnail from "./img/thumbnail.png";
import rightArrow from "./img/rightArrow.png";
import leftArrow from "./img/leftArrow.png";
import BlogCard from "./components/BlogCard";
import search from "./img/search.svg"

import axios from "axios";
import { useLocation } from "react-router";



function Blogs() {
    const [state, setState] = useState(false);
    const [posts, setPosts] = useState([]);
    const { search } = useLocation();
    useEffect(() => {
        Aos.init();
        const fetchPosts = async () => {
            const res = await axios.get("C");
            console.log(res.data);
            setPosts(res.data);
        };
        fetchPosts();
    }, [search]);

    function show() {
        state ? setState(false) : setState(true);
    }

    return (
        <>
            <div className="container mx-auto blog-container-1">
                <div className="row">
                    <div className="col-md-4 col-12 mb-md-0 mb-3 heading1 panelColumn d-flex justify-content-center">
                        Subscribe to Business Insight?
                    </div>
                    <div className="col-md-6 col-12 panelColumn">
                        <div className="row justify-content-between">
                            <div className="col-lg-6 col-12 px-lg-1 px-0 py-lg-0 py-1">
                                <Input placeholder="Email Address" />
                            </div>
                            <div className="col-lg-6 col-12 px-lg-1 px-0 py-lg-0 py-1">
                                <select className="selectionPanel">
                                    <option value="Australia">Australia</option>
                                    <option value="India">India</option>
                                    <option value="Germany">Germany</option>
                                    <option value="USA">USA</option>
                                    <option value="New Zealand">New Zealand</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-2 col-12 panelColumn ps-md-2 px-lg-0 pt-md-0 pt-1">
                        <Button text="Subscribe" />
                    </div>
                </div>
            </div>
            <div className="image3"></div>
            <div className="image4"></div>
            <div className="image5" style={{ display: state ? "block" : "none" }}></div>
            <div className="image6"></div>
            <div className="image7"></div>
            <div className="image8"></div>
            <div className="image9"></div>
            <div className="container mx-auto blog-container-2">
                <div className="row">
                    <div className="col-6 col-lg-5">
                        <div data-aos="fade-right" className="image2 ms-auto"></div>
                    </div>
                    <div data-aos="fade-left" className="col-6 col-lg-7 d-flex flex-column justify-content-center align-items-center">
                        <div className="heading2 mb-2 me-lg-5 ms-5">Do you want me to do your marketing for you?</div>
                        <button className="know_button mt-2 me-lg-5 ms-5">Yes, I want</button>
                    </div>
                </div>
            </div>
            <div className="container mx-auto blog-container-3">
                <div className="row">
                    <div className="col-6">
                        <div className="row">
                            <div className="col-lg-6 col-12 px-lg-2 px-0 py-2 py-lg-0">
                                <div onClick={show} class="selection">
                                    Recent Posts
                                </div>
                                <div className="container recentPostsContainer">
                                
                                </div>
                            </div>
                            <div className="col-lg-6 col-12 px-lg-2 px-0 py-2 py-lg-0 searchDiv">
                                <input placeholder="Search" className="searchInput" />
                                <button className="buttonInInput d-flex align-items-center justify-content-center">
                                    <img src={search} alt="" />
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-1 px-2"></div>
                    <div className="col-lg-3 col-5 px-2 py-lg-0 py-2">
                        <select className="selection">
                            <option value="Search">Search Catagory</option>
                            <option value="India">India</option>
                            <option value="Germany">Germany</option>
                            <option value="USA">USA</option>
                            <option value="New Zealand">New Zealand</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className="container mx-auto blogs-container-4">
                <div className="row justify-content-between">
                    <div className="dividerLine"></div>
                    <div className="col-lg-5 col-10 mx-lg-0 mx-auto" data-aos="fade-up">
                        <BlogCard thumbnail={thumbnail}
                            heading='ac orci phasellus egestas tellus rutrum tellus pellentesque eu tincidunt tortor aliquam nulla facilisi cras fermentum odio eu feugiat pretium'
                            description="amet mattis vulputate enim nulla aliquet porttitor lacus luctus accumsan tortor posuere ac ut consequat semper viverra nam libero justo laoreet sit amet cursus sit amet dictum sit amet justo donec enim diam vulputate ut pharetra sit amet aliquam id diam maecenas ultricies mi eget mauris pharetra et ultrices neque ornare aenean euismod elementum nisi quis eleifend quam adipiscing vitae proin sagittis nisl rhoncus mattis rhoncus urna neque viverra justo nec ultrices dui sapien eget mi proin sed libero enim sed faucibus turpis in eu mi bibendum neque egestas congue quisque egestas diam in arcu cursus euismod quis viverra nibh"
                            date="July 26, 2021"
                            comments="2" />
                    </div>
                    <div className="col-lg-5 col-10 mx-lg-0 mx-auto" data-aos="fade-up">
                        <BlogCard thumbnail={thumbnail}
                            heading='ac orci phasellus egestas tellus rutrum tellus pellentesque eu tincidunt tortor aliquam nulla facilisi cras fermentum odio eu feugiat pretium'
                            description="amet mattis vulputate enim nulla aliquet porttitor lacus luctus accumsan tortor posuere ac ut consequat semper viverra nam libero justo laoreet sit amet cursus sit amet dictum sit amet justo donec enim diam vulputate ut pharetra sit amet aliquam id diam maecenas ultricies mi eget mauris pharetra et ultrices neque ornare aenean euismod elementum nisi quis eleifend quam adipiscing vitae proin sagittis nisl rhoncus mattis rhoncus urna neque viverra justo nec ultrices dui sapien eget mi proin sed libero enim sed faucibus turpis in eu mi bibendum neque egestas congue quisque egestas diam in arcu cursus euismod quis viverra nibh"
                            date="July 26, 2021"
                            comments="2" />
                    </div>
                    <div className="col-lg-5 col-10 mx-lg-0 mx-auto" data-aos="fade-up">
                        <BlogCard thumbnail={thumbnail}
                            heading='ac orci phasellus egestas tellus rutrum tellus pellentesque eu tincidunt tortor aliquam nulla facilisi cras fermentum odio eu feugiat pretium'
                            description="amet mattis vulputate enim nulla aliquet porttitor lacus luctus accumsan tortor posuere ac ut consequat semper viverra nam libero justo laoreet sit amet cursus sit amet dictum sit amet justo donec enim diam vulputate ut pharetra sit amet aliquam id diam maecenas ultricies mi eget mauris pharetra et ultrices neque ornare aenean euismod elementum nisi quis eleifend quam adipiscing vitae proin sagittis nisl rhoncus mattis rhoncus urna neque viverra justo nec ultrices dui sapien eget mi proin sed libero enim sed faucibus turpis in eu mi bibendum neque egestas congue quisque egestas diam in arcu cursus euismod quis viverra nibh"
                            date="July 26, 2021"
                            comments="2" />
                    </div>
                    <div className="col-lg-5 col-10 mx-lg-0 mx-auto" data-aos="fade-up">
                        <BlogCard thumbnail={thumbnail}
                            heading='ac orci phasellus egestas tellus rutrum tellus pellentesque eu tincidunt tortor aliquam nulla facilisi cras fermentum odio eu feugiat pretium'
                            description="amet mattis vulputate enim nulla aliquet porttitor lacus luctus accumsan tortor posuere ac ut consequat semper viverra nam libero justo laoreet sit amet cursus sit amet dictum sit amet justo donec enim diam vulputate ut pharetra sit amet aliquam id diam maecenas ultricies mi eget mauris pharetra et ultrices neque ornare aenean euismod elementum nisi quis eleifend quam adipiscing vitae proin sagittis nisl rhoncus mattis rhoncus urna neque viverra justo nec ultrices dui sapien eget mi proin sed libero enim sed faucibus turpis in eu mi bibendum neque egestas congue quisque egestas diam in arcu cursus euismod quis viverra nibh"
                            date="July 26, 2021"
                            comments="2" />
                    </div>
                    <div className="col-lg-5 col-10 mx-lg-0 mx-auto" data-aos="fade-up">
                        <BlogCard thumbnail={thumbnail}
                            heading='ac orci phasellus egestas tellus rutrum tellus pellentesque eu tincidunt tortor aliquam nulla facilisi cras fermentum odio eu feugiat pretium'
                            description="amet mattis vulputate enim nulla aliquet porttitor lacus luctus accumsan tortor posuere ac ut consequat semper viverra nam libero justo laoreet sit amet cursus sit amet dictum sit amet justo donec enim diam vulputate ut pharetra sit amet aliquam id diam maecenas ultricies mi eget mauris pharetra et ultrices neque ornare aenean euismod elementum nisi quis eleifend quam adipiscing vitae proin sagittis nisl rhoncus mattis rhoncus urna neque viverra justo nec ultrices dui sapien eget mi proin sed libero enim sed faucibus turpis in eu mi bibendum neque egestas congue quisque egestas diam in arcu cursus euismod quis viverra nibh"
                            date="July 26, 2021"
                            comments="2" />
                    </div>
                    <div className="col-lg-5 col-10 mx-lg-0 mx-auto" data-aos="fade-up">
                        <BlogCard thumbnail={thumbnail}
                            heading='ac orci phasellus egestas tellus rutrum tellus pellentesque eu tincidunt tortor aliquam nulla facilisi cras fermentum odio eu feugiat pretium'
                            description="amet mattis vulputate enim nulla aliquet porttitor lacus luctus accumsan tortor posuere ac ut consequat semper viverra nam libero justo laoreet sit amet cursus sit amet dictum sit amet justo donec enim diam vulputate ut pharetra sit amet aliquam id diam maecenas ultricies mi eget mauris pharetra et ultrices neque ornare aenean euismod elementum nisi quis eleifend quam adipiscing vitae proin sagittis nisl rhoncus mattis rhoncus urna neque viverra justo nec ultrices dui sapien eget mi proin sed libero enim sed faucibus turpis in eu mi bibendum neque egestas congue quisque egestas diam in arcu cursus euismod quis viverra nibh"
                            date="July 26, 2021"
                            comments="2" />
                    </div>
                </div>
                <div className="row justify-content-between">
                    <div className="col-lg-4 col-md-6 col-10 mx-auto pagination d-flex flex-row justify-content-evenly align-items-center px-lg-0 px-3">
                        <div href="/" className="leftArrow d-flex flex-row justify-content-evenly align-items-center">
                            <img src={leftArrow} alt="" />
                        </div>
                        <div className="paginationNumber active">1</div>
                        <div className="paginationNumber">2</div>
                        <div className="paginationNumber">3</div>
                        <div className="paginationNumber">4</div>
                        <div className="paginationNumber">5</div>
                        <div className="paginationNumber">6</div>
                        <div className="rightArrow d-flex flex-row justify-content-evenly align-items-center">
                            <img src={rightArrow} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            {posts.map((post) => (
                <>
                    <h1>post.title</h1>
                    <em>post.username</em>
                    <p>post.desc</p>
                </>
            ))}
        </>
    );
}

export default Blogs;