import React from "react";
import {Link} from 'react-router-dom';
import '../index.css';

// Function to render the navbar section
// Also created links for different components
function Footer(){
    return (
        <div>
            <nav className="navbar">
                <Link to='/search' >Search</Link>
                <span>|</span>
                <Link to='/user' >User</Link>
            </nav>
        </div>
    )
}

export default Footer;