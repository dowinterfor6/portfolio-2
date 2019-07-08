import React from 'react';

const ProjectItem = ({ projectName, projectDescription }) => (
  <div className="project-item">
    <p>this is a project item</p>
    <p>{projectName}</p>
    {projectDescription}
  </div>
);

export default ProjectItem;