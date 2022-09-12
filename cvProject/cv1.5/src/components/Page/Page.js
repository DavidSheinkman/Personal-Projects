import React from 'react';


import './Page.css';
import Right from './Right';
import Left from './Left';

const Page = (props) => {
  return (
      <div class="resume">    
          <Right />
          <Left />
      </div>   
  );
}

export default Page;
