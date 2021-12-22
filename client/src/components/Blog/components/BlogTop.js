import "bootstrap/dist/css/bootstrap.min.css"
import 'bootstrap/dist/js/bootstrap.min.js'
import "./BlogTop.css"
import blogTopLeft from "../img/blog-top-left.png"
import searchIcon from "../img/search-icon.png"
import DropDown from "./DropDown";
import { useEffect, useRef, useState, useContext } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import { Context } from "../../../context/Context";


function BlogTop() {
    const [recentArticles, setRecentArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();
    const searchRef = useRef();
    const { user, dispatch } = useContext(Context);
    console.log(user);
    console.log(dispatch);
    const handlelogout = () => {
        dispatch({ type: "LOGOUT" });
        navigate("/login");
    };
    const search = () => {
        if(searchRef.current.value.length > 0) {
            navigate(`/search/${searchRef.current.value}`);
        }else if(searchRef.current.value.length === 0) {
            navigate("/blog");
        }
    }
    useEffect( async () => {
        const res = await axios.get("/articles/page/1");
        console.log(res.data)
        setRecentArticles(res.data.slice(0,6))
        setLoading(false)
    },[])
    return (
        <div className="blogTopContainer">
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
            <div className="blogMarketWrapper">
                <div className="blogMarket">
                    <img src={blogTopLeft} alt="" />
                    <div>
                        <h3>Do you want me to do your marketing for you?</h3>
                        <div>Yes, I want</div>
                    </div>
                </div>
            </div>
            <div className="blogCustomizer">
                <DropDown className="blogDropDown" initial="Recent Post" loading={loading} list={[...recentArticles]} />
                <div className="blogSearchInput">
                    <input ref={searchRef} type="text" placeholder="Search" onKeyUp={(e) => {
                        console.log(e)
                        if(e.code === "Enter" && searchRef.current.value !== ""){
                            search()
                        }else if(e.code === "Enter" && searchRef.current.value === ""){
                            navigate("/blog")
                        }

                    }} />
                    <img src={searchIcon} alt="search-icon" onClick={search} />
                </div>
                <DropDown className="blogDropDown selectCategoryDropdown" initial="Select Category" list={['Corporate Strategy','Digital Media Marketing', 'Lead Gen and Sales Strategy', 'Marketing Strategy for 2021', 'Product Strategy', 'Professional Practices Strategy', 'Website Blueprint']} />
                {user && <div className="blogCustomizer1">
                <button class="philosophySubmitButton d-flex align-items-center justify-content-center" onClick={handlelogout}>
                    Logout
                </button>
            </div>}
            </div>
        </div>
    );
}

export default BlogTop;