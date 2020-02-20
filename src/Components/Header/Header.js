import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
    render() {
        return (            
            <nav className="navbar"> 
                <p className="nav-title">Event Finder</p> 
                <ul className="nav-links">                      
                    <li className="nav-item">Event Search</li>  
                    <li className="nav-item">Sign In</li>                    
                </ul>  
            </nav>
        )
    }
}

export default Header
