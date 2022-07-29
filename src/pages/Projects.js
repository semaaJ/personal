import { FaGithubSquare, FaStar } from 'react-icons/fa';
import tsmHome from '../static/tsmhome.png';
import finance from '../static/finance.png';
import tsmPage from '../static/tsmpage.png';

const Projects = () => {
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

export default Projects;