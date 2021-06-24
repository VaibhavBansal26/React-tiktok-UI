import React, { useRef, useState } from 'react';
import './Video.css';
import VideoFooter from './VideoFooter';
import VideoSidebar from './VideoSidebar';
import VideoHeader from './VideoHeader';
import Footers from './Footers';

function Video({url,channel,description,song,likes,shares,messages}) {
    const [playing, setPlaying] = useState(false);
    const videoRef = useRef(null);
    const handleVideoPress = () => {
        if(playing){
            videoRef.current.pause();
            setPlaying(false);
        }else{
            videoRef.current.play();
            setPlaying(true);
        }
    }
    return (
        <div className="video">
           <VideoHeader/>
            <video 
            onClick={handleVideoPress}
            loop 
            ref={videoRef}
            className="video__player"
            src={url}>
            </video>
            <VideoFooter channel={channel} song={song} description={description}/>
            <VideoSidebar likes={likes} shares={shares} messages={messages}/>
            
        </div>
    )
}

export default Video;
