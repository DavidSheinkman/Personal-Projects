import React from 'react';


import './Skills.css';

const Skills = (props) => {
  return (
    <React.Fragment>
      <div class="resume_item resume_skills">
         <div class="title">
           <p class="bold">React skills</p>
         </div>
         <ul>
           <li>
             <div class="skill_name">
               useState,useEffect,useReduce
             </div>
             
           </li>
           <li>
             <div class="skill_name">
               Context
             </div>
             
           </li>
           <li>
             <div class="skill_name">
               Redux
             </div>
             
           </li>
           <li>
             <div class="skill_name">
               HttpRequests 
             </div>
             
           </li>
           <li>
             <div class="skill_name">
               Forms
             </div>
             
           </li>
           <li>
             <div class="skill_name">
               Routing
             </div>
             
           </li>
           <li>
             <div class="skill_name">
               UnitTests
             </div>
             
           </li>
         </ul>
       </div>
    <div class="resume_item resume_skills">
         <div class="title">
           <p class="bold">Other skills</p>
         </div>
         <ul>
         <li>
             <div class="skill_name">
               NodeJs
             </div>
             
           </li>
           <li>
             <div class="skill_name">
               Express
             </div>
             
           </li>
           <li>
             <div class="skill_name">
               MongoDB
             </div>
             
           </li>
           <li>
             <div class="skill_name">
               Angular
             </div>
             
           </li>
           
         </ul>
       </div>
    </React.Fragment>
    );
}

export default Skills;