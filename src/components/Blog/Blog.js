import React, { useEffect, useRef, useState } from 'react'
import BlogTop from './components/BlogTop'
import "./Blog.css"
import axios from 'axios';
import { useNavigate, useParams} from 'react-router-dom'
import InView from 'react-intersection-observer';

var monthNames = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];

function dateFormat(d){
  var t = new Date(d);
  return monthNames[t.getMonth()]+' ' + t.getDate()+', '+t.getFullYear();
}

const Blog = () => {
    const shareRight = useRef();
    const blogContent = useRef();
    const navigate = useNavigate();
    const params = useParams();
    const [blog, setBlog] = useState({});
    const [loading, setLoading] = useState(true);
    const [share, setShare] = useState(false)
    // const blog = {
    //     title: "What leaders must know about branding and the Vampire Effect | Corporality Global",
    //     htmlString: htmlString,
    //     photo: "https://corporality.global/wp-content/uploads/2021/07/Blog-IMG_CEOs-must-strategize-celebrity-endorsements-for-their-brands-2048x1020.jpg",
    //     likes: "100",
    //     slug: "what-leaders-must-know-about-branding-and-the-vampire-effect-|-corporality-global",
    //     date: "2021-12-14 18:18:32"
    // }
    const windowSize = "menubar=no,toolbar=no,status=no,width=570,height=570"; // for window
    useEffect( async() => {
        console.log(params.article_name)
        const blogData = await axios.get(`/articles/${params.article_name}`)
        if(Object.keys(blogData.data).length === 0){
            navigate("/");
            return;
        }
        setBlog(blogData.data);
        setLoading(false)
        console.log(blogData.data)
        
    },[])

    return (
        <>
            <BlogTop />
            {loading? null :
            <div className='blogContainer'>
                <div className="blogHead">
                    <div className='blogImageWrapper'>
                        <img src={`${blog.photo}`} alt="" />
                    </div>
                    <div className='likeShare'>
                        <span>
                        <i class="fa fa-calendar"></i>
                            {dateFormat(blog.date.split(' ')[0])}
                            {/* {new Date(blog.date).toDateString().split(" ").filter((ele, i) => i > 0).join(" ")} */}
                        </span>
                        |
                        <span>
                            <i className="fa fa-thumbs-up"></i>
                            {blog.likes} LIKES
                        </span>
                    </div>
                    <h2 className="blogTitle">{blog.title}</h2>
                </div>
                
                <InView onChange={setShare} ref={blogContent} className='blogContent' dangerouslySetInnerHTML={{__html: blog.description}}></InView>
                
                <div className="blogBottom">
                    <h4>
                        Share this content:
                    </h4>
                    <div className="blogShareContainer">
                        <span onClick={() => window.open(`https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`, "NewWindow" , windowSize)}>
                            <i class="fa fa-facebook"></i>
                            <span className='d-flex flex-row align-items-center justify-content-center'>
                                Facebook
                            </span>
                        </span>
                        <span onClick={() => window.open(`https://twitter.com/intent/tweet?url=${window.location.href}`, "NewWindow" , windowSize)}>
                            <i class="fa fa-twitter"></i>
                            <span className='d-flex flex-row align-items-center justify-content-center'>
                                Twitter
                            </span>
                        </span>
                        <span onClick={() => null }>
                            <i class="fa fa-pinterest"></i>
                            <span className='d-flex flex-row align-items-center justify-content-center'>
                                Pinterest
                            </span>
                        </span>
                        <span onClick={() => window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${window.location.href}`, "NewWindow" , windowSize)}>
                            <i class="fa fa-linkedin"></i>
                            <span className='d-flex flex-row align-items-center justify-content-center'>
                                LinkedIn
                            </span>
                        </span>
                        <span>
                            <i class="fa fa-envelope"></i>
                            <span className='d-flex flex-row align-items-center justify-content-center'>
                                Email
                            </span>
                        </span>
                    </div>
                </div>
            </div>
            }           
            {share ? <div ref={shareRight} className="blogShareContainer shareRight">
                <span onClick={() => window.open(`https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`, "NewWindow" , windowSize)}>
                    <i class="fa fa-facebook"></i>
                    <span className='d-flex flex-row align-items-center justify-content-center'>
                        Facebook
                    </span>
                </span>
                <span onClick={() => window.open(`https://twitter.com/intent/tweet?url=${window.location.href}`, "NewWindow" , windowSize)}>
                    <i class="fa fa-twitter"></i>
                    <span className='d-flex flex-row align-items-center justify-content-center'>
                        Twitter
                    </span>
                </span>
                <span onClick={() => null }>
                    <i class="fa fa-pinterest"></i>
                    <span className='d-flex flex-row align-items-center justify-content-center'>
                        Pinterest
                    </span>
                </span>
                <span onClick={() => window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${window.location.href}`, "NewWindow" , windowSize)}>
                    <i class="fa fa-linkedin"></i>
                    <span className='d-flex flex-row align-items-center justify-content-center'>
                        LinkedIn
                    </span>
                </span>
                <span>
                    <i class="fa fa-envelope"></i>
                    <span className='d-flex flex-row align-items-center justify-content-center'>
                        Email
                    </span>
                </span>
            </div> : null }
        </>
    )
}

export default Blog
