import React from 'react';
import "./BlogCard.css";
import commentBubble from "../img/commentBubble.png";


function truncate(text, size) {
    return text?.length > size ? text.substr(0, size - 1) + '...' : text;
}

function BlogCard(props) {
    // const PF = "http://localhost:5000/images/";
    const PF = "";

    return (
        <div className="blogCard shadow">
            <div className="row">
                <div className="col-12 blogThumbnailDiv">
                    {props.thumbnail && <img src={PF + props.thumbnail} className="blogThumbnail" alt="blog thumbnail" />}
                </div>
                <div className="col-12 blogContent">
                    <h2 className="blogHeading">{truncate(props.heading, 120)}</h2>
                    <div className="blogDescription" dangerouslySetInnerHTML={{__html: truncate(props.description, 300)}}>
                    </div>
                    <a href={"/blog/" + props.slug} className="blogReadMore" style={{"color": "#6CA0BC"}}>Read more</a>
                </div>
                <div className="col-12 blogInformation">
                {new Date(props.date).toDateString()} | <img src={commentBubble} alt="" /> ({props.comments}) Comments
                </div>
            </div>
        </div>
    );
}

export default BlogCard;