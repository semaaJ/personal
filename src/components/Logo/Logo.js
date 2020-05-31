import React from 'react';
import face from './face.png';
import './Logo.css';

const Logo = () => {
    return (
        <div className="logo">
            <img className="logoImage" src={face} />
            <div className="name">JAMES MILES</div>
        </div>
    )
}   

export default Logo;