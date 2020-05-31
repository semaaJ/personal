import React, { useState } from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import './Experience.css';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

const Experience = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
        <div className="root">
          <Tabs
            orientation="vertical"
            value={value}
            onChange={handleChange}
            className="tabs"
          >
            <Tab id="Shutterstock" label="Shutterstock" />
            <Tab id="DCU" label="Dublin City University" />
          </Tabs>

          <TabPanel value={value} index={0}>
            <div className="tabContentContainer">
              <div className="title">Software Engineer Intern @ <a className="employerLink" href="http://shutterstock.com/">Shutterstock</a></div>
              <div className="date">Apr 1 - 13 Sep 2019</div>
              <ul className="jobDetails">
                <li>
                  Worked, using agile & scrum methods, alongside a team developing an application which would provide a critical connectivity channel between stakeholders
                </li>
                <li>
                  Translated designs to high quality & reusable React components
                </li>
                <li>
                  Collaborated with editors to gather feedback for iterative design
                </li>
                <li>
                  Deployed code which met company standards of 85% test coverage (via Jest) & participated in peer code reviews for adherence to coding standards
                </li>
                <li>
                  Experienced developing back end services (Typescript)
                </li>
                <li>
                  Participated in a company hackathon
                </li>
                <li>
                  Utilised Javascript ES6, React, Redux, Node.js, Docker, RESTful APIs & Git
                </li>
              </ul>
            </div>
          </TabPanel>

          <TabPanel value={value} index={1}>
            <div className="tabContentContainer">
              <div className="title">
                Programming Tutor @ <a className="employerLink" href="https://www.computing.dcu.ie/event/computety">ComputeTY</a></div>
                Jan 22nd - 28th 2018
              <ul className="jobDetails">
                <li>
                  Selected for DCU's ComputeTY program which invites Transition Year students to attend a 3 week course introducing them to computer programming and encouraging them to study computer science
                </li>
                <li>
                  Worked alongside the students creating basic Android applications and games via Scratch.
                </li>
                <li>
                  Clarified, resolved and educated students on any issues encountered and the reasons behind these issues
                </li>
              </ul>
            </div>
          </TabPanel>    
        </div>
  );
}

export default Experience;