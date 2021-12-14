import React from "react";
import './VideoClients.css'
import video from './mainImage.png'

const VideoClients = () => {
    return(
        <div className="VideoMain">
            <div className="container VideoContainer">
                <img src = {video} alt="" className="Video_clients" />
            </div>
        </div>
    )
}
export default VideoClients