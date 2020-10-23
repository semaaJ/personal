import React, { useState } from 'react';
import Shell from './Shell/Shell';
import Navigation from './Navigation/Navigation';
import Dock from './Dock/Dock';
import Safari from './Safari/Safari';


const Homepage = () => {
    const [topWindow, setTopWindow] = useState("Shell");

    return (
        <>
        <Navigation />
        <div className="desktopContainer">
            <Shell topWindow={topWindow} setTopWindow={setTopWindow} />
            <Safari topWindow={topWindow} setTopWindow={setTopWindow} />
        </div>
        <Dock setTopWindow={setTopWindow} />
      </>
    )
}

export default Homepage;