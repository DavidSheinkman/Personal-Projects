import React from 'react';


import './Education.css';

const Education = (props) => {
  return (
    <React.Fragment>
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
    </React.Fragment>
    );
}

export default Education;