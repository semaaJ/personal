import romac from '../static/romachomee.png';
import mellio from '../static/mellio.png';
import cavancbt from '../static/cavancbt.png';

const Experience = () => {
    return (
        <div className="d-f" style={{ marginLeft: "55px", marginRight: "55px" }}>
          <div className="d-f w-100 jc-sb">
            <div className="d-f fd-c">
              <h1>experience</h1>
              <div className="d-f fd-c">
                <div className="d-f fd-c mb-22" style={{ width: "550px", marginRight: "25px" }}>
                  <div className="d-f jc-sb al-c">
                    <h2><span className="primaryDark">mellio</span>, dublin</h2>
                    <h4>aug 20 - current</h4>
                  </div>
                  <h2>product manager & developer</h2>
                  <p className="mb-4 mt-0">participated in the development of an saas product which enables mechanical workshops to manage, monitor and reward employees</p>
                  <p className="mb-4 mt-0">managed stakeholder communication</p>
                  <p className="mb-4 mt-0">and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
                  <p className="mb-4 mt-0">participated in the development of an saas product which enables mechanical workshops to manage, monitor and reward employees</p>
                  <hr className="divide"/>
                </div>
  
                <div className="d-f fd-c" style={{ width: "550px", marginRight: "25px", marginBottom: "25px"}}>
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
                  <hr className="divide"/>
                </div>
  
                <div className="d-f fd-c" style={{ width: "550px", marginRight: "25px", marginBottom: "25px"}}>
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
  
              <div class="content mb-22">
                <a href="https://www.romacoutdoorspaces.ie" target="_blank">
                  <div class="content-overlay"></div>
                  <img class="content-image" src={romac} />
                  <div class="content-details fadeIn-bottom">
                    <h2 className="light">www.romacoutdoorspaces.ie</h2>
                  </div>
                </a>
              </div>
  
              <div class="content mb-32">
                <a href="https://www.mellio.com" target="_blank">
                  <div class="content-overlay"></div>
                  <img class="content-image" src={mellio} />
                  <div class="content-details fadeIn-bottom">
                    <h2 className="light">www.mellio.com</h2>
                  </div>
                </a>
              </div>
  
              <div class="content mb-32">
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

export default Experience;