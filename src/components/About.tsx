import React , {useState} from 'react'
import '../static/about.scss'
import Person2Icon from '@mui/icons-material/Person2';
import SchoolIcon from '@mui/icons-material/School';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import MilitaryTechIcon from '@mui/icons-material/MilitaryTech';
import { Fade } from "react-awesome-reveal";


function About() {


  return (
    <div className='about'>

        <Fade  duration={3500}>
      <div className='container'>
            <div className='title'>About Me</div>    
            <div className='profile'></div>
            <div className='Name'><div className='box1'>< Person2Icon /> </div > <div className='box2'><span>이름</span></div><div className='box3'>박진석</div></div>
            <div className='School'> <div className='box1'><SchoolIcon /></div> <div className='box2'><span>학교</span></div><div className='box3'>성균관대학교 (휴학) <br/> 소프트웨어학과</div></div>
            <div className='Email'> <div className='box1'><EmailIcon /></div><div className='box2'>이메일</div><div className='box3'>jjpark57@hotmail.com</div> </div>
            <div className='Github'><div className='box1'><GitHubIcon /></div><div className='box2'>Github</div> <div className='box3'><a href="https://github.com/jjpark51" style={{color: 'whitesmoke'}}>jjpark51</a></div> </div>
            <div className='Military'><div className='box1'><MilitaryTechIcon /></div><div className='box2'>군대</div><div className='box3'>산업기능요원 보충역</div> </div>
       </div>   

       </Fade> 
    </div>
  )
}

export default About
