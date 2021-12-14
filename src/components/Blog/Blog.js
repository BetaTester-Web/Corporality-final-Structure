import "bootstrap/dist/css/bootstrap.min.css"
import 'bootstrap/dist/js/bootstrap.min.js'
import "./Blog.css"
import Input from "./components/Input"
import Button from "./components/Button";
import thumbnail from "./img/thumbnail.png";
import BlogCard from "./components/BlogCard";
import search from "./img/search.svg"
import blogTopLeft from "./img/blog-top-left.png"
import searchIcon from "./img/search-icon.png"
import DropDown from "./components/DropDown";

function Blog() {
    return (
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
    );
}

export default Blog;