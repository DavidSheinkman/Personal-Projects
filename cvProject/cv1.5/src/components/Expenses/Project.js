import React from 'react';


import './Project.css';

const Project = (props) => {
  return (
    <React.Fragment>
    <div class="date">{props.title}</div> 
    <div class="info">
    <p class="semi-bold">{props.subTitle}</p> 
         
         <p>{props.p1}</p>
         <br></br>
         <p>{props.p2}</p>
         <p>{props.p3}</p>
         <span>Git: </span><a href="github.com/david">github.com/DavidReactDev</a>
    </div>
    </React.Fragment>
    );
}

export default Project;
