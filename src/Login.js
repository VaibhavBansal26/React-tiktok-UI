import React from 'react';
import {Button} from '@material-ui/core';
import {Link} from 'react-router-dom';
import {auth,provider} from './firebase';
import { useStateValue } from './StateProvider';
import { actionTypes } from './reducer';
import './Login.css';

function Login() {
    //const [{user},dispatch] = useStateValue();
    const[{},dispatch] = useStateValue();
    const signIn = () => {
        auth.signInWithPopup(provider)
        .then((result) => (
            dispatch({
                type:actionTypes.SET_USER,
                user:result.user,
            })
        )).catch(err => (
            alert(err.message)
        ))
    };
    //console.log(user);
    return (
        <div className="login">
            <div className="login__content">
                <div className="login__heading">
                  
                    <h3>Login</h3>
                </div>
                <div className="login__images">
                     <img className="login__img" alt="tiktok" src="data:image/png;base64,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"/>

                </div>
                <div className="login__body">
    
                    <Button className ="login__button" type="submit" onClick={signIn}>Login with Google</Button>
                </div>
                 
            </div>
            <div className="login__footer">
                <Link to="/signup" style={{textDecoration:"none",color:'black'}}>Not a Member ? SignUp</Link>
            </div>
           
            
        </div>
    )
}

export default Login;
