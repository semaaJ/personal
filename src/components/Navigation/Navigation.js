import React from 'react';
import icon from './icon.png';
import sound from './sound.png';
import battery from './battery.png';
import search from './search.png';
import './Navigation.css';

const Navigation = () => {
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
                    <div className="navigationItem">Mon 11:01 PM</div>
                </div>
                   
            </div>
        </>
    )
}   

export default Navigation;