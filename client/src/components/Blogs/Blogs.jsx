import React, { useEffect, useState, useContext } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import "bootstrap/dist/css/bootstrap.min.css"
import 'bootstrap/dist/js/bootstrap.min.js'
import "./Blogs.css"
import BlogCard from "./components/BlogCard";
import Pagination from "./components/Pagination";
import axios from "axios";
import BlogTop from '../Blog/components/BlogTop';
import { useParams } from "react-router-dom";
import { Context } from "../../context/Context";
import topHandler from '../../CommonHandler/TopHandler';
function Blogs() {
    const { user, dispatch } = useContext(Context);
    const handleLogout = () => {
        dispatch({ type: "LOGOUT" });
        window.location.replace("/login");
    };
    const [loading, setLoading] = useState(true)
    const [articles, setArticles] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [showArticles, setShowArticles] = useState([])
    const [totalArticles, setTotalArticles] = useState(1);
    const params = useParams();
    console.log("blog");
    useEffect( async () => {
        Aos.init();
        setCurrentPage(1);
        let res;
        if(params.search_string){
            res = await axios.get(`/articles/search/${params.search_string}/1`);
        }else{
            res = await axios.get("/articles/page/1");
        }
        setArticles(res.data);
        setShowArticles(res.data.slice(0, res.data.length-1));
        setTotalArticles(Math.ceil(res.data[res.data.length-1].count));
        setLoading(false);
    }, [params]);
    
    const paginate = async (pageNumber) => {
        setCurrentPage(pageNumber);
        let res;
        if(params.search_string){
            res = await axios.get(`/articles/search/${params.search_string}/${pageNumber}`); //ad
        }else{
            res = await axios.get(`/articles/page/${pageNumber}`);

        }
        setArticles(res.data.slice(0, res.data.length-1));
        setShowArticles(res.data.slice(0, res.data.length-1));
        topHandler();
    }

    return (
        <>
            <BlogTop blogState={ {articles, showArticles, setShowArticles} } />
            {/* {user && <div className="blogCustomizer1 d-flex flex-row justify-content-sm-end justify-content-center">
                <button class="philosophySubmitButton d-flex align-items-center justify-content-center" onClick={handleLogout}>
                    Logout
                </button>
            </div>} */}
            { loading?
                null
                :
                <div className="container mx-auto blogs-container-4 my-2 mb-5">
                <div className="row justify-content-between">
                    <div className="dividerLine px-0"></div>
                    {showArticles.map((article) => (
                        <div className="col-lg-5 col-10 mx-lg-0 mx-auto" data-aos="fade-up" key={article.slug}>
                            <BlogCard thumbnail={article.photo}
                                heading={article.title}
                                description={article.description}
                                date={article.date}
                                slug={article.slug}
                                likes={article.likes} />
                        </div>
                    ))}
                </div>
                <Pagination
                    totalArticles={totalArticles}
                    paginate={paginate}
                    currentPage={currentPage} 
                    setCurrentPage={setCurrentPage}
                />
            </div>
            }
        </>
    );
}

export default Blogs;