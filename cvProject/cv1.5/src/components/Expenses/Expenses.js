import React from 'react';


import './Expenses.css';
import Project from './Project';

const Expenses = (props) => {
  return (
    
      <div class="resume">
        <div class="resume_right">
    <div class="resume_item resume_about">
        <div class="title">
           <p class="bold">Junior Front-End React Developer</p>
         </div>
        <p>I recently completed my bachelor's degree in software engineering,
           in the past year i developed full stack apps,
            using technologies such as reactjs/angular/express/mongodb and more,
             specifically more focused on the front end and the reactjs framework.</p>
             <p>Now my goal is to find a company where i will make my journey from junior developer to senior developer</p>
    </div>
    <div class="resume_item resume_work">
        <div class="title">
           <p class="bold">React Projects</p>
         </div>
        <ul>
            
            <li>
            <Project title="React Basics" subTitle="Resume Web Site" p1="Basic react project to understand the basic concepts of reactjs, such as info passing and states." p2="Technologies: ReactJs" p3="#TechnicalSkills" />
            </li>
            
            <li>
            <Project title="Redux" subTitle="Food Health Calculator" p1="More advanced react concepts such as redux." p2="Technologies: Reactjs" p3="#TechnicalSkills #AdvensedConsepts" />
            </li>
            
            <li>
            <Project title="UX/UI" subTitle="Video Background Night Mode" p1="After getting interested in UX I developed this web site where I used video background to implement night mode." p2="Technologies: Reactjs" p3="#creativity #design" />
            </li>
            
            <li>
            <Project title="In Process..." subTitle="Protest social/messaging Platform" p1="Web site that helps people create and get info about protests. One of us is working on the backend while two of us(me including) working on a the front end. Currently we implemented routing,forms and http requests with a database." p2="Technologies: Reactjs, Express, MongoDB" p3="#TechnicalSkills #TeamWork" />
            </li>
            
        </ul>
    </div>
    <div class="resume_item resume_work">
        <div class="title">
           <p class="bold">Other Projects</p>
         </div>
        <ul>
            
            <li>
            <Project title="Final School Project" subTitle="Mobile App and Web Site for a Restaurant" p1="In this final year project we helped a small business   get an app for the customers and a website for the workers.I learned about project design ,development and management ,furthermore key concepts of Fullstack and FrontEnd. 
                      I took part in all parts of the projects but contributed more on the frontEnd part." p2="Technologies: Angular, Ionic, NestJs, MongoDB" p3="#teamPlay #projectManagmant #developingProccess" />
            </li>
            
            <li>
            <Project title="Accessibility" subTitle="Live stream chat accessibility for visually impaired" p1="After finding out there is no such solution on the internet i developed a website that allows visually impaired hear the chat massages of live streams." p2="Technologies: JS, CSS, HTML, Seleniuom, Dejango" p3="#Inovation #ProblemSolving #API #DataMining" />
            </li>
           
        </ul>
    </div>
    <div class="resume_item resume_education">
      <div class="title">
           <p class="bold">Education</p>
         </div>
      <ul>
            <li>
                <div class="date">2017-2022</div> 
                <div class="info">
                     <p class="semi-bold">Software Engineering (SCE)</p> 
                  <p>I graduated from one of Israel's top engineering schools with really good grades.</p>
                </div>
            </li>
            
        </ul>
    </div>
    
  </div>

  <div class="resume_left">
     <div class="resume_profile">
     <img src='https://miro.medium.com/max/1400/1*aboH2BJkZoe82iN312S1Sw.jpeg' alt="Logo" />
       
     </div>
     <div class="resume_content">
       <div class="resume_item resume_info">
         <div class="title">
           <p class="bold">David Sheinkman</p>
           <p class="regular">Front End React Developer</p>
         </div>
         <ul>
           
           <li>
             <div class="icon">
               <i class="fas fa-mobile-alt"></i>
             </div>
             <div class="data">
               054-3053911
             </div>
           </li>
           <li>
             <div class="icon">
               <i class="fas fa-envelope"></i>
             </div>
             <div class="data">
               davidreactdev@gmail.com
             </div>
           </li>
           <li>
             <div class="icon">
               <i class="fab fa-weebly"></i>
             </div>
             <div class="data">
             github.com/DavidReactDev
             </div>
           </li>
         </ul>
       </div>
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
       
     </div>
  </div>
   
      </div>
    
  );
}

export default Expenses;
