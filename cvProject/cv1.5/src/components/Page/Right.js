import React from 'react';


import './Right.css';

import Profile from './Profile';
import Projects from './Projects';
import Education from './Education';

const Right = (props) => {
    return (
      <React.Fragment>
        <div class="resume_right">
          <Profile />
          <Projects />
          
          <Education />
        </div>
      </React.Fragment>
      );
  }
  
  export default Right;
  