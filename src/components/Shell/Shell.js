import React, { useState } from 'react';
import TypeIt from 'typeit-react';
import Icon from '@mdi/react'
import { mdiSkipForward } from '@mdi/js'
import Draggable from 'react-draggable';
import './Shell.css';

const shellData = (bool) => {
    const cssClass = bool ? "staticShellContainer" : "";
    return (
        <div className={cssClass}>
            <div className="object"><div className="terminalName">james@personal</div>:<div className="tilda">~</div><div className="highlight">$</div> cat james.txt</div>
            <p className="function">
                Hi! I'm James, a 22 year old Junior Software Engineer from <i className="highlight">Ireland</i>. 
                I have just completed my final year in <i className="highlight">Dublin City Univeristy</i>, where I studied Computer Applications & Software Engineering. 
            </p>

            <p className="return">
                I'm a creative, hardworking and passionate developer who enjoys building the complexities of back-end applications and hiding them behind beautiful web applications. 
            </p> 
            
            <p className="function">
                I have a strong understanding of <i className="highlight">JavaScript (ES6)</i>, <i className="highlight">Python</i>, <i className="highlight">HTML/CSS</i> and am familiar with <i className="highlight">Java</i> and
                have a deep love for the <i className="highlight">React</i> framework. I enjoy the translation of UI designs into modular and highly testable components.
            </p>

            <p className="return">
                My CV is availible <a href="./CV.pdf" className="link">here</a> and if you would like to get in touch with me, 
                feel free to contact me via <a className="link">email</a>, <a href="https://github.com/semaaj" className="link">Github</a> or <a href="https://www.linkedin.com/in/james-miles-a57867182/" className="link">LinkedIn</a>!
            </p> 

            <p className="function">
                When I'm not pushing pixels around I'm probably reading, gaming, listening to podcasts/music or enjoying some brews with friends! 
            </p> 
        </div>
    )
}

const Shell = (props) => {
    const { topWindow, setTopWindow } = props;
    const [skip, setSkip] = useState(false);
    
    const isTopWindow = topWindow === "Shell" ? "shell-wrap topIndex" : "shell-wrap";

    const onSkipHandler = () => {
        setSkip(true);
    }
    
    return (
        <Draggable>
            <div className={isTopWindow} onClick={() => setTopWindow("Shell")}>
                <div className="shell-top-bar" />
                <div className="shell-body">
                    <div className="skip">
                        <Icon 
                            className="icon"
                            onClick={onSkipHandler}
                            path={mdiSkipForward} 
                            size={1}
                        />
                    </div>
                        { skip ? shellData(true) : 
                            <TypeIt
                                options={{
                                    speed: 10,
                                    waitUntilVisible: true,
                                }}
                            >
                            { shellData() }
                        </TypeIt>
                        }
                </div>
            </div>
        </Draggable>
    )
}   

export default Shell;