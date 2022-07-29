import { useSpring, useTrail, animated } from 'react-spring';
import { FaGithubSquare, FaLinkedin } from 'react-icons/fa';

const THEMES = [{
    primaryDark: '#ff3855',
    background: '#1d1d1d',
    text: '#F3F4F6',
  }, {
    primaryDark: '#6A98F0',
    background: '#2A363B',
    text: '#F3F4F6',
  }, {
    primaryDark: 'white',
    background: 'black',
    text: 'white',
  }, {
    primaryDark: '#eb5c14',
    background: '#355C7D',
    text: '#F3F4F6',
  }, {
    primaryDark: '#26d3ec',
    background: '#1d1d1d',
    text: '#F3F4F6',
}];

const Home = (props) => {
    const { state, setState } = props;
    const titleProps = useSpring({ delay: 150, to: { opacity: 1, y: 0 }, from: { opacity: 0 , y: -50} });
    const linkProps = useSpring({ delay: 500, to: { opacity: 1, y: 0 }, from: { opacity: 0 , y: -50} });
    const tabProps = useSpring({ delay: 750, to: { opacity: 1, x: 0 }, from: { opacity: 0 , x: -50} });
    
    const homeItems = [
        <h2>a 24 year old</h2>, 
        <h2>fullstack developer</h2>,  
        <h2>based in ireland</h2>,
    ];
    const homeTrail = useTrail(homeItems.length, { delay: 300, to: { opacity: 1, y: 0 }, from: { opacity: 0, y: -100 } });

    const changeTheme = index => {
        setState({ ...state, colour: THEMES[index] });
        document.documentElement.style.setProperty('--primary-dark', THEMES[index].primaryDark);
        document.documentElement.style.setProperty('--primary-bg', THEMES[index].background);
        document.documentElement.style.setProperty('--dk-gray-100', THEMES[index].text);
      }

    return (
        <>
          <div className="d-f al-c h-100 jc-sa">
            <div className="d-f fd-c h-100 jc-c ta-r">
              <animated.div style={titleProps}>
                <h4 style={{ marginBottom: "-20px", fontSize: "20px" }}>product manager & developer at mellio</h4>
                <h1>hey, i'm <span>james</span></h1>
              </animated.div>
              
              {
                homeTrail.map(({ ...otherProps }, i) => 
                  <animated.div style={otherProps}>
                    { homeItems[i] }
                  </animated.div>
                )
              }
              
              <animated.div style={linkProps}>
                <div className="df">
                    <div className="external d-f jc-l al-c">
                      <FaGithubSquare className="mr-4" size={22} color="white" />
                      <h4 className="light mr-16"><a className="effect-underline">github</a></h4>
                    <div className="external d-f jc-r al-c mr-16">
                      <FaLinkedin className="mr-4" size={22} color="white" />
                      <h4 className="light"><a className="effect-underline">linkedin</a></h4>
                    </div>
                    <h4><a className="effect-underline">jamesmcmiles@gmail.com</a></h4>
                  </div>
                </div>
              </animated.div>
            </div>
  
            <div className="d-f fd-c">
              <animated.div style={tabProps}>
                <div className="d-f fd-c">
                  <h1>
                    <a onClick={() => setState({ ...state, tab: 1 })} className="effect-underline">experience</a>
                  </h1>
                </div>
                <div className="d-f fd-c">
                  <h1>
                    <a onClick={() => setState({ ...state, tab: 2 })} className="effect-underline">projects</a>
                  </h1>
                </div>
              </animated.div>
            </div>
          </div>
  
            <div className="d-f jc-c">
              { THEMES.map((val, i) => <div className="theme" style={{ background: val.primaryDark }} onClick={() => changeTheme(i)} />) }
            </div>
        </>
      )
}

export default Home;