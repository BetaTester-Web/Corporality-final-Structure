import React, { useEffect, useRef, useState, Fragment, useContext } from 'react'
import BlogTop from './components/BlogTop'
import "./Blog.css"
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom'
import InView from 'react-intersection-observer';
import { CKEditor } from 'ckeditor4-react';
import { Context } from "../../context/Context";

if(!localStorage.getItem('liked')){
    localStorage.setItem('liked', JSON.stringify([]));
}

function dateFormat(d) {
    var t = new Date(d).toDateString();
    console.log(t);
    var dt = t.split(" ");
    dt.forEach((e,i) => {
        dt[i] = dt[i].toUpperCase();
    })
    return dt[1] + ' ' + dt[2] + ', ' + dt[3];
}

const Blog = () => {
    const shareRight = useRef();
    const blogContent = useRef();
    const navigate = useNavigate();
    const params = useParams();
    const [blog, setBlog] = useState({});
    const [loading, setLoading] = useState(true);
    const [updateMode, setUpdateMode] = useState(false);
    const [desc, setDesc] = useState("");
    const [title, setTitle] = useState("");
    const { user } = useContext(Context);
    const [share, setShare] = useState(false)
    const [liked, setLiked] = useState(false)
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
        if(Object.keys(blogData.data).length === 0 || !blogData){
            navigate("/");
            return;
        }
        document.title = blogData.data.title;
        if(JSON.parse(localStorage.getItem('liked')).includes(blogData.data.id)){
            if(!liked){
                setLiked(true);
            }
        }
        setBlog(blogData.data);
        setDesc(blogData.description);
        setTitle(blogData.title);
        setLoading(false)
        console.log(blogData.data)
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
    
    const likePostHandler = async ({slug, id}) => {
        if(JSON.parse(localStorage.getItem('liked')).includes(id)){
            return;
        }
        const res = await axios.patch(`/articles/${slug}/like`);
        if(res.data.success){
            setBlog((blog) => ({...blog, likes: blog.likes+1}));
            setLiked(true);
            let liked = JSON.parse(localStorage.getItem("liked"));
            localStorage.setItem("liked", JSON.stringify([...liked, id]));
        }
    }
    return (
        <>
            <BlogTop />
            {loading ? console.log("loading") :
                <div className='blogContainer'>
                    <div className="blogHead">
                        <div className='blogImageWrapper'>
                            <img src={`${blog.photo}`} alt="" />
                        </div>
                        <div className='likeShare'>
                            <span>
                                <i class="fa fa-calendar"></i>
                                {dateFormat(blog.date)}
                                {/* {new Date(blog.date).toDateString().split(" ").filter((ele, i) => i > 0).join(" ")} */}
                            </span>
                            |
                            <span>
                                <i className={`fa fa-thumbs-up${liked? " liked" : ""}`} onClick={() => likePostHandler({slug: blog.slug, id: blog.id})}></i>
                                {blog.likes} LIKES
                            </span>
                        </div>
                        <h2 className="blogTitle">
                            {blog.title}
                            {
                            JSON.parse(localStorage.getItem("user")) !== null?
                            blog.username === user.username && (
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
                            ):null}
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
                        <div className="blogShareContainer blogShareCorporality">
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
                            <span onClick={() => window.open(`http://www.pinterest.com/pin/create/button/?url=${window.location.href}&media=${encodeURIComponent(blog.photo)}>&description=${encodeURIComponent(blog.title)}`, "NewWindow", windowSize)}>
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
                            <span onClick={() => window.open(`mailto:%20?body=${encodeURIComponent(window.location.href)},&subject=${encodeURIComponent(blog.title)}`,"NewWindow", windowSize)}>
                                <i class="fa fa-envelope"></i>
                                <span className='d-flex flex-row align-items-center justify-content-center'>
                                    Email
                                </span>
                            </span>
                        </div>
                    </div>
                </div>
            }           
            {share ? <div ref={shareRight} className="blogShareContainer blogShareCorporality shareRight">
                <span onClick={() => window.open(`https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`, "NewWindow" , windowSize)}>
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
                <span onClick={() => window.open(`http://www.pinterest.com/pin/create/button/?url=${window.location.href}&media=${encodeURIComponent(blog.photo)}>&description=${encodeURIComponent(blog.title)}`, "NewWindow", windowSize)}>
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
                <span onClick={() => window.open(`mailto:%20?body=${encodeURIComponent(window.location.href)}&subject=${encodeURIComponent(blog.title)}`,"NewWindow", windowSize)}>
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
