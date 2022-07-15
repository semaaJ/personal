import React, { useState } from 'react';
import { FaGithubSquare, FaLinkedin, FaStar } from 'react-icons/fa';
import { useSpring, useTrail, animated } from 'react-spring';
import Nav from './components/Nav/Nav';
import './App.css';

import tsmHome from './static/tsmhome.png';
import finance from './static/finance.png';
import tsmPage from './static/tsmpage.png';
import romac from './static/romachomee.png';
import mellio from './static/mellio.png';
import cavancbt from './static/cavancbt.png';



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

function App() {
  const [state, setState] = useState({ colour: THEMES[0], tab: 0, project: 0 });

  const titleProps = useSpring({ delay: 150, to: { opacity: 1, y: 0 }, from: { opacity: 0 , y: -50} });
  const linkProps = useSpring({ delay: 500, to: { opacity: 1, y: 0 }, from: { opacity: 0 , y: -50} });
  const tabProps = useSpring({ delay: 750, to: { opacity: 1, x: 0 }, from: { opacity: 0 , x: -50} });

  const homeItems = [
    <h2>a 24 year old</h2>, 
    <h2>fullstack developer</h2>,  
    <h2>based in ireland</h2>
  ];
  const aboutItems = [
    <h1>me, myself & i</h1>,
    <h2 style={{ maxWidth: "1050px", }}>i'm a passionate, creative and hardworking developer who enjoys building the complexities of backend systems and hiding them behind beautiful web applications</h2>,
    <h2 style={{  maxWidth: "1050px", marginTop: "18px" }}>although i much prefer frontend development, in particular the react framework</h2>,
    // <h2 style={{  maxWidth: "1050px", marginTop: "18px" }}>i love modernity & take a lot of inspiration from modern architecture and aquascapes in their sleek & minimalistic designs</h2>,
    // <h2 style={{  maxWidth: "1050px",  marginTop: "18px" }}>outside of coding I enjoy reading about the financial world</h2>,

  ];

  const homeTrail = useTrail(homeItems.length, { delay: 300, to: { opacity: 1, y: 0 }, from: { opacity: 0, y: -100 } });
  const aboutTrail = useTrail(aboutItems.length, { delay: 300, to: { opacity: 1, y: 0 }, from: { opacity: 0, y: -100 } });

  const changeTheme = index => {
    setState({ ...state, colour: THEMES[index] });
    document.documentElement.style.setProperty('--primary-dark', THEMES[index].primaryDark);
    document.documentElement.style.setProperty('--primary-bg', THEMES[index].background);
    document.documentElement.style.setProperty('--dk-gray-100', THEMES[index].text);
  }

  const renderHome = () => {
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
              <div className="d-f al-c">
                <h1 onClick={() => setState({ ...state, tab: 1 })}>
                  <a className="effect-underline">about me</a>
                </h1>
              </div>
              <div className="d-f al-c">
                <h1>
                  <a onClick={() => setState({ ...state, tab: 2 })} className="effect-underline">experience</a>
                </h1>
              </div>
              <div className="d-f al-c">
                <h1>
                  <a onClick={() => setState({ ...state, tab: 3 })} className="effect-underline">projects</a>
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

  const renderAbout = () => {
    return (
      <div className="d-f h-100 al-c">
          <div className="d-f fd-c" style={{ marginLeft: "55px" }}>
              { aboutItems.map(item => item) }
            </div>
      </div>
    )
  }

  const renderProjects = () => {
    return (
      <div className="d-f fd-c">
        <div className="d-f al-c project jc-sb">
          <div className="">
            <div className="d-f jc-sb al-c">
              <h3>currently in development</h3>
              <div className="d-f">
                <h3 className="light mr-8"><a href="https://www.github.com/semaaJ/twitterstockmonitor" className="effect-underline">github</a></h3>
                <FaGithubSquare className="mr-8" size={32} color="white" />
                <h3 className="light mr-8 al-c">252</h3>
                <FaStar size={32} color="white" />
              </div>
            </div>
            <h1>twitter stock monitor</h1>

            <h3 className="light" style={{ width: "700px", marginTop: "18px" }}>originally a python script written during the 2016 presedential campaign to monitor trump's tweets for company names, extract <span className="primaryDark">sentiment</span> & then follow the share price of the aforementioned company.</h3>
            <h3 className="light" style={{ width: "700px", marginTop: "18px"}}>i have just finished rewriting this project from the ground up. using a <span className="primaryDark">python</span> backend to manage the collection, parsing and processing of data with a <span className="primaryDark">react</span> frontend.</h3>
            <h3 className="light" style={{ width: "700px", marginTop: "18px"}}>i plan to extend this further with more complex <span className="primaryDark">natural language processing</span> techniques and build a paper trader based on <span className="primaryDark">sentiment</span> along with other <span className="primaryDark">trading analysis indicators</span>.</h3>

            <h3 style={{ marginTop: "18px"}}><span>python</span>, html/css, js, react, flask, nltk</h3>
          </div>

          <div className="d-f fd-c jc-sa h-100">
            <img className="projectImg" src={tsmHome} />
            <img className="projectImg" src={tsmPage} />
          </div>
        </div>

        <div className="d-f al-c project jc-sb">
        <div className="d-f fd-c jc-sa h-100">
          <img className="projectImg" src={finance} />
        </div>
          <div className="">
            <div className="d-f jc-sb al-c">
              <h3>currently in development</h3>
            </div>
            <h1>crypto trader poc</h1>

            <h3 className="light" style={{ width: "700px", marginTop: "18px" }}>a basic crypto <span className="primaryDark">back testing</span> and <span className="primaryDark">trading visualiser</span> using the <span className="primaryDark">python</span> module <span className="primaryDark">backtester</span>.</h3>
            <h3 className="light" style={{ width: "700px", marginTop: "18px" }}>the trading strategy currently used is based on <span className="primaryDark">relative strength index</span> and <span className="primaryDark">money flow index</span>.</h3>
            <h3 className="light" style={{ width: "700px", marginTop: "18px" }}>the frontend, built with <span className="primaryDark">react</span>, shows information on open and closed trades, allows a user to <span className="primaryDark">execute a trade</span> and shows the <span className="primaryDark">rsi/mfi</span> parameters and signals.</h3>
            <h3 style={{ marginTop: "18px"}}><span>python</span>, html/css, js, react, flask, backtester</h3>
          </div>
        </div>
      </div>
    )
  }

  const renderExperience = () => {
    return (
      <div className="d-f" style={{ marginLeft: "55px", marginRight: "55px" }}>
        <div className="d-f w-100 jc-sb">
          <div className="d-f fd-c">
            <h1>experience</h1>
            <div className="d-f fd-c">
              <div className="d-f fd-c" style={{ width: "550px", marginRight: "25px", marginBottom: "45px" }}>
                <div className="d-f jc-sb al-c">
                  <h2><span className="primaryDark">mellio</span>, dublin</h2>
                  <h4>aug 20 - current</h4>
                </div>
                <h2>product manager & developer</h2>
                <p className="mb-4 mt-0">participated in the development of an saas product which enables mechanical workshops to manage, monitor and reward employees</p>
                <p className="mb-4 mt-0">managed stakeholder communication</p>
                <p className="mb-4 mt-0">and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
                <p className="mb-4 mt-0">participated in the development of an saas product which enables mechanical workshops to manage, monitor and reward employees</p>
              </div>

              <div className="d-f fd-c" style={{ width: "550px", marginRight: "25px", marginBottom: "45px" }}>
                <div className="d-f jc-sb al-c">
                  <h2><span className="primaryDark">shutterstock</span>, dublin</h2>
                  <h4>apr 19 - sept 19</h4>
                </div>
                <h2>software engineer intern</h2>
                <p className="mb-4 mt-0">worked, using agile & scrum methods, alongside a team developing an application which would provide a critical connectivity channel between stakeholders.</p>
                <p className="mb-4 mt-0">translated designs to high quality & reusable react components.</p>
                <p className="mb-4 mt-0">collaborated with editors to gather feedback for iterative design</p>
                <p className="mb-4 mt-0">deployed code which met company standards of 85% test coverage (via jest) & participated in peer code reviews for adherence to coding standards.</p>
                <p className="mb-4 mt-0">experienced developing back end services (Typescript)</p>
                <p className="mb-4 mt-0">participated in a company hackathon.</p>
              </div>

              <div className="d-f fd-c" style={{ width: "550px", marginRight: "25px", marginBottom: "45px" }}>
              <div className="d-f jc-sb al-c">
                  <h2><span className="primaryDark">dublin city university</span>, dublin</h2>
                  <h4>jan 19 - feb 19</h4>
                </div>
                <h2>lab assistant</h2>
                <h4>feb 2019 - mar 2019</h4>
                <p className="m-0">worked, using agile & scrum methods, alongside a team developing an application which would provide a critical connectivity channel between stakeholders.</p>
                <p className="m-0">translated designs to high quality & reusable react components.</p>

              </div>
            </div>
          </div>

          <div className="d-f fd-c" style={{ marginLeft: "40px" }}>
            <h1>recent work</h1>

            <div class="content">
              <a href="https://www.romacoutdoorspaces.ie" target="_blank">
                <div class="content-overlay"></div>
                <img class="content-image" src={romac} />
                <div class="content-details fadeIn-bottom">
                  <h2 className="light">www.romacoutdoorspaces.ie</h2>
                </div>
              </a>
            </div>

            <div class="content">
              <a href="https://www.mellio.com" target="_blank">
                <div class="content-overlay"></div>
                <img class="content-image" src={mellio} />
                <div class="content-details fadeIn-bottom">
                  <h2 className="light">www.mellio.com</h2>
                </div>
              </a>
            </div>

            <div class="content">
              <a href="https://wwww.cavancbt.ie" target="_blank">
                <div class="content-overlay"></div>
                <img class="content-image" src={cavancbt} />
                <div class="content-details fadeIn-bottom">
                  <h2 className="light">www.cavancbt.ie</h2>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    )
  }

  const tabs = [renderHome, renderAbout, renderExperience, renderProjects];

  return (
    <div className="App">
      <div className="container d-f fd-c">  
        <Nav state={state} setState={setState} />
        { tabs[state.tab]() }
      </div>
    </div>
  );
}

export default App;
