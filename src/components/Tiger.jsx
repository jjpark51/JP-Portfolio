import React from 'react'
import '../static/home.scss'
import { Fade } from "react-awesome-reveal";


function Tiger() {
  return (
    <div className='tiger'>
          <Fade duration={5500}>

        <h1>Hi, I'm <span style={{color: '#f96815'}}>Jinsuk</span>. <br /> <span>I'm a <span style={{color:'#f96815'}}>Front-end</span> Developer<span style={{color: '#f96815'}}>.</span></span></h1>
        </Fade>

    </div>

  )
}

export default Tiger
