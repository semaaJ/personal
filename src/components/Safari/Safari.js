import React, { useState } from 'react';
import mellio from '../../static/safari/mellio.png';
import romac from '../../static/safari/romac.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Draggable from 'react-draggable'
import { faChevronLeft, faChevronRight, faListAlt, faSync, faShareAlt } from '@fortawesome/free-solid-svg-icons';
import './Safari.css';

const Safari = (props) => {
  const { topWindow, setTopWindow } = props;
  const [tabState, setTabState] = useState(0);
  const tabInfo = [
    { 
      tabName: "Mellio - Boost...", 
      image: mellio,
      address: "https://www.mellio.com"
    }, 
    {
      tabName: "Romac",
      image: romac,
      address: "https://wwww.romacoutdoorspaces.com"
    }
  ]

  const updateTab = (index) => setTabState(index);
  const isTopWindow = topWindow === "Safari" ? "window topIndex" : "window";

  return (
      <Draggable> 
        <div class="window" onClick={() => setTopWindow("Safari")}>
        <div class="top">
          <div class="panel">
            <span class="first"></span>
            <span class="second"></span>
            <span class="third"></span>
          </div>
          <div class="nav">
            <span class="set"><FontAwesomeIcon icon={faListAlt} /></span>
            <span class="prev active"><FontAwesomeIcon icon={faChevronLeft} /></span>
            <span class="next"><FontAwesomeIcon icon={faChevronRight} /></span>
            
            <span class="address">
              <input type="text" value={tabInfo[tabState].address} class="address" editable="true" />
              <FontAwesomeIcon icon={faSync} />
            </span>
          </div>

          <div class="nav right">
            <span class="share"><FontAwesomeIcon icon={faShareAlt} /></span>
            <span class="tabs">
              <span class="square front"></span>
              <span class="square behind"></span>
            </span>
          </div>
          
          <span class="new">
            <span class="plus x"></span>
            <span class="plus y"></span>
          </span>
        
        </div>

        <div className="tabBar">
            {
              tabInfo.map((tab, value) => {
                const isTabActive = value === tabState;
                return (
                  <div className={isTabActive ? "tab active" : "tab inactive"} onClick={() => updateTab(value)}>{tab.tabName}</div>
                )
              }
            )
            }
          </div>

          <div className="webpageContainer">
            <img className="webpage" src={tabInfo[tabState].image} />
          </div>
      </div>
    </Draggable>
  )
}   

export default Safari;