import React, { useState } from 'react';
import { useTrail, animated } from 'react-spring'
import me from '../../static/me.png';
import './Nav.css';

const Nav = (props) => {
    const { state, setState } = props;
    const [menu, setMenu] = useState(false);
    
    const items = ['about', 'experience', 'projects']
    const trail = useTrail(items.length, { delay: 100, to: { opacity: 1, x: 0 }, from: { opacity: 0, x: 0 } })

    return (
        <div className="nav d-f jc-sb al-c">
            <div className="d-f al-c">
                <img src={me} height="80px" className="mr-16" />
                <h3 onClick={() => setState({ ...state, tab: 0 })}><a className="effect-underline">james miles</a></h3>
            </div>

            <div className="d-f">
                { 
                    menu && 
                        <>
                            {
                                trail.map(({ ...otherProps }, i) => 
                                    <animated.div style={otherProps} >
                                        <h3 
                                            className={state === items[i] ? 'navItem selected' : 'navItem'} 
                                            onClick={() => setState({ ...state, tab: i + 1 })}>
                                                <a className="effect-underline">{ items[i] }</a>
                                        </h3>
                                    </animated.div>
                                )
                
                            }
                        </>
                }
                
                <div id="menu" className={menu ? 'menu active' : 'menu'} onClick={() => setMenu(!menu)}>
                    <span class="line"></span>
                    <span class="line"></span>
                    <span class="line"></span>
                </div>
            </div>
            
        </div>
    )
}

export default Nav;