import React from 'react';

import { ReactComponent as PhoneSvg } from './phone-solid.svg';
import { ReactComponent as EnvelopeSvg } from './envelope-solid.svg';
import { ReactComponent as GithubSvg } from './github.svg';

import './Left.css';
import Skills from './Skills';
const Left = (props) => {
    return (
      <React.Fragment>
        <div class="resume_left">
          
     <div class="resume_profile">
     <img src='https://i.imgur.com/fW2FPpB.png' alt="Logo" />
       
     </div>
     <div class="resume_content">
       <div class="resume_item resume_info">
         <div class="title">
           <p class="bold">David Sheinkman</p>
           
           <p class="regular">Front End React Developer</p>
         </div>
         <ul>
           
           <li>
             
             
             
             <div class="data">
               054-3053911
             </div>
           </li>
           <li>
           
              
            
              
              
             <div class="data">
               DavidSheinkman7@gmail.com
             </div>
           </li>
           <li>
           
              
           
             
             
             <div class="data">
             github.com/DavidSheinkman
             </div>
           </li>
         </ul>
       </div>
       
       <Skills />
       
       
     </div>
  </div>
      </React.Fragment>
      );
  }
  
  export default Left;
  