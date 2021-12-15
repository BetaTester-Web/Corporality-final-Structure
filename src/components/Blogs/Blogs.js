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
import searchIcon from "./img/search-icon.png"
import DropDown from "./components/DropDown";
import blogTopLeft from "./img/blog-top-left.png"


function Blogs() {
    const [state, setState] = useState(false);
    const [posts, setPosts] = useState([]);
    const [articles, setarticles] = useState([]);
    const { search } = useLocation();
    useEffect(() => {
        Aos.init();
        const fetcharticles = async () => {
            const res = await axios.get("/articles");
            setarticles(res.data);
        };
        fetcharticles();
        // console.log(articles);
    }, [search]);

    // function show() {
    //     state ? setState(false) : setState(true);
    // }

    return (
        <>
                    <div className="blogContainer">
            <div className="blogSubscription">
                <h3>Subscribe to Business Insight?</h3>
                <input type="email" placeholder="Email Address" />
                <select name="Select Country" id="contrySelect">
                    <option value="0">Select Country</option>
                    <option value="1">Australia</option>
                    <option value="2">India</option>
                    <option value="3">USA</option>
                    <option value="4">UK</option>
                </select>
                <div className="subscribeButton">Subscribe</div>
            </div>
            <div className="blogMarket">
                <img src={blogTopLeft} alt="" />
                <div>
                    <h3>Do you want me to do your marketing for you?</h3>
                    <div>Yes, I want</div>
                </div>
            </div>
            <div className="blogCustomizer">
                <DropDown className="blogDropDown" initial="Recent Post" list={['Recent Post']} />
                <div className="blogSearchInput">
                    <input type="text" placeholder="Search" />
                    <img src={searchIcon} alt="" />
                </div>
                <DropDown className="blogDropDown" initial="Select Category" list={['Corporate Strategy','Digital Media Marketing', 'Lead Gen and Sales Strategy', 'Marketing Strategy for 2021', 'Product Strategy', 'Professional Practices Strategy', 'Website Blueprint']} />
            </div>
        </div>
            <div className="container mx-auto blogs-container-4">
                <div className="row justify-content-between">
                    <div className="dividerLine px-0"></div>
                    {articles.map((article) => (
                        <div className="col-lg-5 col-10 mx-lg-0 mx-auto" data-aos="fade-up">
                            <BlogCard thumbnail={thumbnail}
                                heading={article.title}
                                description={article.description}
                                date={article.date}
                                href={article.slug}
                                comments="2" />
                        </div>
                    ))}
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