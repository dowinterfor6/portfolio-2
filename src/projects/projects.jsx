import React from 'react';
import ProjectItem from './project_item';
import '../assets/css/projects.css';
import flappybaraCode from '../assets/images/flappybaraCode.png';
import gochellaCode from '../assets/images/gochellaCode.png';
import discourseCode from '../assets/images/discourseCode.png';
import shadowfightCode from '../assets/images/shadowfightCode.png';

const Projects = () => {
  const flappybaraDescription = 
    <p>
      Inspired by the popular Flappy Bird game, Flappybara 
      follows the flying adventures of a capybara. Built using 
      Unity and C# (with Mono).
    </p>;
  
  const shadowFightDescription = 
    <p>
      A fighting game where you can punch your opponent to death 
      with a backdrop of falling sakura petals or snow. Built using 
      JavaScript and HTML5 Canvas.
    </p>;

  const discourseDescription =
    <p>
      An application that provides a platform for live text chat in 
      private servers and channels. Built using React/Redux and 
      Ruby on Rails.
    </p>

  const gochellaDescription = 
    <p>
      An event planning web app to help organizers plan which acts 
      their group will be attending throughout an event. Built 
      using MongoDB and React/Redux.
    </p>

  return (
    <section className="projects-container">
      <ProjectItem 
        name="Flappybara" 
        description={flappybaraDescription}
        background={flappybaraCode}
      />
      <ProjectItem
        name="Go-Chella"
        description={gochellaDescription}
        background={gochellaCode}
      />
      <ProjectItem
        name="Discourse"
        description={discourseDescription}
        background={discourseCode}
      />
      <ProjectItem
        name="Shadow Fight"
        description={shadowFightDescription}
        background={shadowfightCode}
      />
    </section>
  )
};

export default Projects;