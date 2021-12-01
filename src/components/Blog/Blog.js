import "bootstrap/dist/css/bootstrap.min.css"
import 'bootstrap/dist/js/bootstrap.min.js'
import "./Blog.css"
import Input from "./components/Input"
import Button from "./components/Button";
import thumbnail from "./img/thumbnail.png";
import BlogCard from "./components/BlogCard";
import search from "./img/search.svg"

function Blog() {
    return (
        <>
            <div className="container mx-auto blog-container-1">
                <div className="row">
                    <div className="col-md-4 col-12 mb-md-0 mb-3 heading1 panelColumn d-flex justify-content-center">Subscribe to Business Insight?</div>
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
            <div className="image5"></div>
            <div className="image6"></div>
            <div className="image7"></div>
            <div className="image8"></div>
            <div className="image9"></div>
            <div className="container mx-auto blog-container-2">
                <div className="row">
                    <div className="col-6 col-lg-5">
                        <div className="image2 ms-auto"></div>
                    </div>
                    <div className="col-6 col-lg-7 d-flex flex-column justify-content-center align-items-center">
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
                                <select class="selection">
                                    <option>Recent Posts</option>
                                    <option>Recent Post 1</option>
                                    <option>Recent Post 2</option>
                                    <option>Recent Post 3</option>
                                    <option>Recent Post 4</option>
                                </select>
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
            <div className="container mx-auto blog-container-4">
                <div className="row">
                    <div className="col-7">
                    </div>
                    <div className="col-5"></div>
                </div>
            </div>
        </>
    );
}

export default Blog;