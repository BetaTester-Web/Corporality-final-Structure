import React, { useEffect, useRef, useState, Fragment, useContext } from 'react'
import BlogTop from './components/BlogTop'
import "./Blog.css"
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom'
import InView from 'react-intersection-observer';
import { CKEditor } from 'ckeditor4-react';
import { Context } from "../../context/Context";

var monthNames = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];

function dateFormat(d) {
    var t = new Date(d);
    return monthNames[t.getMonth()] + ' ' + t.getDate() + ', ' + t.getFullYear();
}

const Blog = () => {
    const shareRight = useRef();
    const blogContent = useRef();
    const navigate = useNavigate();
    const params = useParams();
    const [blog, setBlog] = useState({});
    const [loading, setLoading] = useState(true);
    const [share, setShare] = useState(false);
    const [updateMode, setUpdateMode] = useState(false);
    const [desc, setDesc] = useState("");
    const [title, setTitle] = useState("");
    const { user } = useContext(Context);
    // const blog = {
    //     title: "What leaders must know about branding and the Vampire Effect | Corporality Global",
    //     htmlString: htmlString,
    //     photo: "https://corporality.global/wp-content/uploads/2021/07/Blog-IMG_CEOs-must-strategize-celebrity-endorsements-for-their-brands-2048x1020.jpg",
    //     likes: "100",
    //     slug: "what-leaders-must-know-about-branding-and-the-vampire-effect-|-corporality-global",
    //     date: "2021-12-14 18:18:32"
    // }
    const windowSize = "menubar=no,toolbar=no,status=no,width=570,height=570"; // for window
    useEffect(async () => {
        console.log(params.article_name)
        const blogData = await axios.get(`/articles/${params.article_name}`)
        if (Object.keys(blogData.data).length === 0) {
            navigate("/");
            return;
        }
        setBlog(blogData.data);
        setDesc(blogData.description);
        setTitle(blogData.title);
        setLoading(false)

    }, [])

    const handleUpdate = async () => {
        try {
            const res = await axios.put(`/articles/${blog.slug}`, {
                username: user.username,
                title: blog.title,
                desc: desc
            });
            window.location.replace("/" + res.data.slug)
            setUpdateMode(false)
        } catch (err) { }
    };

    const handleDelete = async () => {
        try {
            await axios.delete(`/articles/${blog.slug}`, {
                data: { username: user.username },
            });
            window.location.replace("/");
        } catch (err) { }
    };

    return (
        <>
            <BlogTop />
            {loading ? null :
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
                        <h2 className="blogTitle">
                            {blog.title}
                            {blog.username === user.username && (
                                <div className="singlearticleEdit">
                                    <i
                                        className="singlearticleIcon fa fa-pencil-square-o "
                                        onClick={() => setUpdateMode(true)}
                                    ></i>
                                    <i
                                        className="ms-3 singlearticleIcon fa fa-trash-o"
                                        onClick={handleDelete}
                                    ></i>
                                </div>
                            )}
                        </h2>
                    </div>
                    {updateMode ? (

                        <CKEditor
                            activeClass="editor singlearticleDescInput"
                            onChange={e => setDesc(e.editor.getData())}
                            // content={desc}
                            // value={desc}
                            initData={blog.description}
                        />
                        // <textarea
                        //   className="singlearticleDescInput"
                        //   value={desc}
                        //   onChange={(e) => setDesc(e.target.value)}
                        // />
                    ) : (
                        <InView onChange={setShare} ref={blogContent} className='blogContent' dangerouslySetInnerHTML={{ __html: blog.description }}></InView>
                        // <p className="singlearticleDesc">{desc}</p>
                    )}
                    {updateMode && (
                        <button className="singlearticleButton" onClick={handleUpdate}>
                            Update
                        </button>
                    )}
                    <div className="blogBottom">
                        <h4>
                            Share this content:
                        </h4>
                        <div className="blogShareContainer">
                            <span onClick={() => window.open(`https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`, "NewWindow", windowSize)}>
                                <i class="fa fa-facebook"></i>
                                <span className='d-flex flex-row align-items-center justify-content-center'>
                                    Facebook
                                </span>
                            </span>
                            <span onClick={() => window.open(`https://twitter.com/intent/tweet?url=${window.location.href}`, "NewWindow", windowSize)}>
                                <i class="fa fa-twitter"></i>
                                <span className='d-flex flex-row align-items-center justify-content-center'>
                                    Twitter
                                </span>
                            </span>
                            <span onClick={() => null}>
                                <i class="fa fa-pinterest"></i>
                                <span className='d-flex flex-row align-items-center justify-content-center'>
                                    Pinterest
                                </span>
                            </span>
                            <span onClick={() => window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${window.location.href}`, "NewWindow", windowSize)}>
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
                <span onClick={() => window.open(`https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`, "NewWindow", windowSize)}>
                    <i class="fa fa-facebook"></i>
                    <span className='d-flex flex-row align-items-center justify-content-center'>
                        Facebook
                    </span>
                </span>
                <span onClick={() => window.open(`https://twitter.com/intent/tweet?url=${window.location.href}`, "NewWindow", windowSize)}>
                    <i class="fa fa-twitter"></i>
                    <span className='d-flex flex-row align-items-center justify-content-center'>
                        Twitter
                    </span>
                </span>
                <span onClick={() => null}>
                    <i class="fa fa-pinterest"></i>
                    <span className='d-flex flex-row align-items-center justify-content-center'>
                        Pinterest
                    </span>
                </span>
                <span onClick={() => window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${window.location.href}`, "NewWindow", windowSize)}>
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
            </div> : null}
        </>
    )
}

export default Blog
