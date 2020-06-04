import React from 'react';
import Shell from './components/Shell/Shell';
import Experience from './components/Experience/Experience';
import Logo from './components/Logo/Logo';
import Navigation from './components/Navigation/Navigation';
import Footer from './components/Footer/Footer';
import Project from './components/Projects/Project';
import Contact from './components/Contact/Contact';
import homepage from './components/Projects/comet_homepage.png';
import gif from './components/Projects/dynamic.gif';
import './App.css';

function App() {
  return (
    <div className="App">
      <Logo />
      <Navigation />
        <div id="about" className="contentTitle">01. About</div>
        <div className="contentContainer">
          <Shell />
        </div>

        <div id="experience" className="contentTitle">02. Experience</div>
        <div className="contentContainer">
          <Experience />
        </div>

        <div id="projects" className="contentTitle">03. Projects</div>
        <div className="contentContainer">
          <Project
            index={1}
            image={homepage}
            gif={gif}
            projectTitle="Comet 2020"
            projectDescription={[
              "Comet is a powerful, comprehensive and user-friendly code metrics and static analysis utility.",
              "Calculates quantitative metrics that offer insights into the maintainavbility, efficiency and performance of a system.",
              "Metrics calculated: Cyclomatic Complexity, Logical Lines of Code, Afferent/Efferent Coupling, Instability, Maximum Nesting Depth & Maximum Inheritance Depth",
              "Also produces relevant dynamic graphical representations of the system: Class Diagram, Inheritance Tree, Dependency Graph, Abstract Syntax Tree & Control Flow Graph"
            ]}
            projectTechnologies={["Python", "Javascript ES6", "React/Redux", "Django", "Django REST Framework"]}
          />

          <Project
            index={2}
            projectTitle="Donald Trump Stock Monitor 2016"
            projectDescription={[
              "Originally written during the American 2016 Presidential Elections when I noticed a correlation between Donald Trump's tweets containing companies and their share price.",
              "A script that monitors Donald Trump's tweets and upon the mentioning of a company name, tracks said companies share price for a week.",
              "These results were stored and a Flask web application was used to display them."
            ]}
            projectTechnologies={["Python", "Flask"]}
            githubLink="https://github.com/semaaJ/TwitterStockMonitor"
            githubStars={236}
          />
        </div>

        <div id="contact" className="contentTitle">04. Contact</div>
        <div className="contentContainer">
          <Contact />
        </div>
        
        <div className="contentContainer">
          <Footer />
        </div>
    </div>
  );
}

export default App;
