import React from 'react';
import './VideoItem.css';

const VideoItem = ({onVideoSelect, video})=>{
    return(
        <div onClick={()=>onVideoSelect(video)} className='video-item item'>
            <div className='ui image'>
                <img 
                    alt={video.snippet.title}
                    src={video.snippet.thumbnails.medium.url}>
                </img>
            </div>
            
            <div
                className='content'
                >
                <div className='ui header'>{video.snippet.title}</div>
            </div>
        </div>
    )
}

export default VideoItem;