import React from 'react';

import Project from './Project';
import './Projects.css';

const Projects = (props) => {
  return (
    <React.Fragment>
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
    </React.Fragment>
    );
}

export default Projects;
