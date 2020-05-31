import React from 'react';
import Icon from '@mdi/react'
import { mdiGithub, mdiLinkedin, mdiEmail } from '@mdi/js'
import './IconBar.css';

const IconBar = () => {
    return (
        <div className="iconContainer">
            <a href="#">
                <Icon 
                    className="icon"
                    path={mdiLinkedin} 
                    size={1}
                />
            </a>
            <a href="#">
                <Icon 
                    className="icon"
                    path={mdiGithub} 
                    size={1}
                />
            </a>
            <a href="#">
                <Icon 
                    className="icon"
                    path={mdiEmail} 
                    size={1}
                />
            </a>
        </div>
    )
}   

export default IconBar;