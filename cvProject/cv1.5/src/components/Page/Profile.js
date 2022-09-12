import React from 'react';


import './Profile.css';

const Profile = (props) => {
  return (
    <React.Fragment>
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
    </React.Fragment>
    );
}

export default Profile;