import React from 'react';
import "./BlogCard.css";
import commentBubble from "../img/commentBubble.png";


function truncate(text, size) {
    return text?.length > size ? text.substr(0, size - 1) + "..." : text;
}

function BlogCard(props) {
    return (
        <div className="blogCard shadow">
            <div className="row">
                <div className="col-12 blogThumbnailDiv">
                    <img src={props.thumbnail} className="blogThumbnail" alt="blog thumbnail" />
                </div>
                <div className="col-12 blogContent">
                    <h2 className="blogHeading">{truncate(props.heading, 120)}</h2>
                    <div className="blogDescription">
                        {truncate(props.description, 300)}
                        <a href={"/blogs/" + props.href}>Read more...</a>
                    </div>
                </div>
                <div className="col-12 blogInformation">
                    {props.date} | <img src={commentBubble} alt="" /> ({props.comments}) Comments
                </div>
            </div>
        </div>
    );
}

export default BlogCard;