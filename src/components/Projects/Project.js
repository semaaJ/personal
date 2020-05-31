import React, { useState } from 'react';
import Icon from '@mdi/react'
import { mdiGithub, mdiStar } from '@mdi/js'
import './Project.css';

const Project = props => {
    const {
        index,
        image,
        gif,
        projectTitle,
        projectDescription,
        projectTechnologies,
        githubLink,
        githubStars,
    } = props;

    const [isHovered, setIsHovered] = useState(false);
    const handleMouseOver = () => {
      setIsHovered(true);
    }
    const mouseOutHandler = () => {
      setIsHovered(false);
    }

    return (
        <div className={index % 2 === 0 ? "projectContainerReverse" : "projectContainer"}>
            { image && !isHovered && <img className="photo" src={image} onMouseOver={handleMouseOver} onMouseOut={mouseOutHandler} /> }
            { isHovered && <img className="photo hovered" src={gif} onMouseOver={handleMouseOver} onMouseOut={mouseOutHandler} /> }

            <div className="projectInfo">
                <p className="projectTitle">{ projectTitle }</p>
                <hr />
                { projectDescription.map(line => <div className="description">{ line} </div>) }
                
                <div className="technologies">
                    { projectTechnologies.map(technology => <div className="tech">{ technology }</div>) }
                </div>
                { githubLink &&
                     <div className="github">
                        <a href={githubLink}>
                            <Icon
                                path={mdiGithub} 
                                size={1}
                            />
                        </a>
                    
                        <Icon 
                            className="stars"
                            path={mdiStar} 
                            size={1}
                        />
                        { githubStars }
    
                    </div>
                }
            </div>
        </div>
    );
}

export default Project;