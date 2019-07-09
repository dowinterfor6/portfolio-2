import React from 'react';

const ProjectItem = ({ name, description, background }) => (
  <div className="project-item-container">
    <img className="project-item-background" src={background} alt={`${name} code`}/>
    <div className="project-item">
      <h4>{name}</h4>
      {description}
    </div>
  </div>
);

export default ProjectItem;