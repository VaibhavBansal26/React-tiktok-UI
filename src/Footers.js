import React from 'react';
import './Footers.css';
import {Home,Search,PersonOutline,Message,AddBox}from '@material-ui/icons';
import {IconButton} from '@material-ui/core';

function Footers() {
    return (
        <div className="footer">
            <IconButton> <Home  className="footer__icon" fontSize="large"/></IconButton>
            <IconButton><Search className="footer__icon" fontSize="large"/></IconButton>
            <IconButton><AddBox className="footer__icon" fontSize="large"/></IconButton>
            <IconButton><Message className="footer__icon" fontSize="large"/></IconButton>
            <IconButton><PersonOutline  className="footer__icon" fontSize="large"/></IconButton>
              
        </div>
    )
}

export default Footers;
