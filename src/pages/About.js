import { useSpring, useTrail, animated } from 'react-spring';


const About = () => {
    
    const aboutItems = [
        <h1>me, myself & i</h1>,
        <h2 style={{ maxWidth: "1050px", }}>i'm a passionate, creative and hardworking developer who enjoys building the complexities of backend systems and hiding them behind beautiful web applications</h2>,
        <h2 style={{  maxWidth: "1050px", marginTop: "18px" }}>although i much prefer frontend development, in particular the react framework</h2>,
        // <h2 style={{  maxWidth: "1050px", marginTop: "18px" }}>i love modernity & take a lot of inspiration from modern architecture and aquascapes in their sleek & minimalistic designs</h2>,
        // <h2 style={{  maxWidth: "1050px",  marginTop: "18px" }}>outside of coding I enjoy reading about the financial world</h2>,
    ];
    const aboutTrail = useTrail(aboutItems.length, { delay: 300, to: { opacity: 1, y: 0 }, from: { opacity: 0, y: -100 } });

    
    return (
        <div className="d-f h-100 al-c">
            <div className="d-f fd-c ml-55">
                {
                aboutTrail.map(({ ...otherProps }, i) => 
                  <animated.div style={otherProps}>
                    { aboutItems[i] }
                  </animated.div>
                )
              }
            </div>
        </div>
    )
}

export default About;