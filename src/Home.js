import React,{useEffect,useState} from 'react';
import './Home.css';
import axios from './axios';
import Video from './Video';
import Login from './Login';
import { useStateValue } from './StateProvider';
import Footers from './Footers';


function Home() {
    const [{user},dispatch] = useStateValue();
    const [videos,setVideos] = useState([]);

      useEffect(() => {
         async function fetchPosts(){
          const response = await axios.get("/v2/posts/getPosts");
          console.log(response.data.data);
          setVideos(response.data.data);
          return response.data;
        }
        fetchPosts();
      },[])
  
    return (
        <>
        {user ? 
            (
            <div className="home">
             {videos.map(({url,channel,song,likes,messages,shares,description}) => (
            <Video url={url} channel={channel} song={song} description={description} shares={shares} 
            likes={likes} messages={messages} key={url}/> 
            

          ))}
            <Footers/>
        </div>
        
        ):(<Login/>)}
       
        </>
    )
}

export default Home
