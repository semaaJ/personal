import React from 'react';
import icon from './icon.png';
import './Navigation.css';

const Navigation = () => {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const today = new Date();
    const dateTime = `${days[today.getDay()]} ${today.getHours()}:${today.getMinutes()}`;

    return (
        <>
            <div className="navigation">
                <div className="navDiv">
                    <div className="navigationItem"><img className="icon" src={icon} /></div>
                    <div className="navigationItem strong">Finder</div>
                    <div className="navigationItem">File</div>
                    <div className="navigationItem">Edit</div>
                    <div className="navigationItem">Go</div>
                    <div className="navigationItem">Window</div>
                    <div className="navigationItem">Help</div>
                </div>

                <div className="navDiv">
                    <div className="navigationItem">Go</div>
                    <div className="navigationItem">Window</div>
                    <div className="navigationItem">Help</div>
                    <div className="navigationItem">{ dateTime }</div>
                </div>
                   
            </div>
        </>
    )
}   

export default Navigation;