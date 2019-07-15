import React from 'react';

class ProjectItem extends React.Component {
  constructor(props) {
    super(props);
    this.name = props.name;
    this.description = props.description;
    this.background = props.background;

    this.state = {
      hover: false
    };

    this.enterHandler = this.enterHandler.bind(this);
    this.leaveHandler = this.leaveHandler.bind(this);
  }

  enterHandler(e) {
    e.stopPropagation();
    this.setState({ hover: true });
    console.log("enter");
  }
  
  leaveHandler(e) {
    e.stopPropagation();
    this.setState({ hover: false })
    console.log("leave");
  }

  render() {
    let descriptionElement = this.state.hover ? <p>{this.description}</p> : null;

    return (
      <div 
        className="project-item-container" 
        onMouseEnter={this.enterHandler} 
        onMouseLeave={this.leaveHandler}
      >
        <img className="project-item-background" src={this.background} alt={`${this.name} code`}/>
        <div className="project-item">
          <h4>{this.name}</h4>
          {descriptionElement}
        </div>
      </div>
    )
  }
};

export default ProjectItem;