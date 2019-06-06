import React from 'react';
import './Navbar.css';

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="home tab-cell active">Home</div>
            <div className="tab-about tab-cell">About</div>
            <div className="portfolio tab-cell">Portfolio</div>
            <div className="blog tab-cell">Blog</div>
            <div className="contact tab-cell">Contact</div>
        </div>
    );
}

export default Navbar;