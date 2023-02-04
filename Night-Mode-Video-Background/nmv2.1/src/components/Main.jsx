import React, { useState } from 'react';
import videoBgd from '../assets/day.mp4'
import videoBgn from '../assets/night.mp4'
import { DarkModeToggle } from '@anatoliygatt/dark-mode-toggle';

const Main = () => {

  const [mode2, setMode2] = useState('day');
  const [video, setVideo] = useState(videoBgd);
  const [btn_class, setBtn_class] = useState("nightButton");
  const [ov_class, setOv_class] = useState("overlay");
  const [p1_class, setP1_class] = useState("p12");
  const [p2_class, setP2_class] = useState("p22");
  const [content_class, setContent_class] = useState("content");
  const [mode, setMode] = useState('light');
  const changeNightMode = (event) => {

    if (mode2 === 'day'){
      console.log(mode)
      setMode2('night');
      setVideo(videoBgn);
      setBtn_class("nightButton")
      setOv_class("overlay2")
      setP1_class("p11")
      setP2_class("p21")
      setContent_class("contentn")
    } else {
      console.log(mode2)
      setMode2('day');
      setVideo(videoBgd);
      setBtn_class("dayButton")
      setOv_class("overlay")
      setP1_class("p12")
      setP2_class("p22")
      setContent_class("content")
    }
    
    
    
  };



  return (
    <div className='main'>
        <div className={ov_class}></div>
        <video src={video} autoPlay loop muted />
        <div className="content2">
        
        
        
        <div className={content_class}>
          <div className="content2">
          <DarkModeToggle 
                
                mode={mode}
                dark="Dark"
                light="Light"
                size="lg"
                inactiveTrackColor="#e2e8f0"
                inactiveTrackColorOnHover="#f8fafc"
                inactiveTrackColorOnActive="#cbd5e1"
                activeTrackColor="#334155"
                activeTrackColorOnHover="#1e293b"
                activeTrackColorOnActive="#0f172a"
                inactiveThumbColor="#1e293b"
                activeThumbColor="#e2e8f0"
                
                onChange={(mode) => {
                  setMode(mode);
                  changeNightMode();
                }}
            />
          </div>
        
            <h1 ><span className={p1_class}>UI</span>/<span className={p2_class}>UX</span> Project</h1>
            <p >This is an exmple of how to use <span >video backroung</span> </p>
            <p >and <span >night mode</span> to implement good looking <span >UI</span> and unique <span >UX</span></p>
            

            


        </div>
        </div>
    </div>
  )
}

export default Main