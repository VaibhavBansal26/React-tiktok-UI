import React from 'react';
import './App.css';
//import Video from './Video';
import Home from './Home';
import Login from './Login';
//import axios from './axios';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Profile from './Profile';
import Signup from './Signup';
import { useStateValue } from './StateProvider';
import Footers from './Footers';


function App() {

    const [{user},dispatch] = useStateValue();
    
 
    return (
    
      
      <div className="app">
        <Router>
          <Switch>
          <Route exact path="/signup" component={Signup}/>
          <Route exact path="/profile" component={Profile}/>
          <Route exact path="/" component={Home}/>
        </Switch>
       
      </Router>
            
      </div>
      
    );
}

export default App;

/*
 <div className="app__videos">
          {videos.map(({url,channel,song,likes,messages,shares,description}) => (
            <Video url={url} channel={channel} song={song} description={description} shares={shares} 
            likes={likes} messages={messages} key={url}/> 

          ))}
         
          
        </div>
*/