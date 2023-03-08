import React from 'react'
import '../static/project.scss'
import NotesIcon from '@mui/icons-material/Notes';
import ProjCard from './ProjCard'
import project from '../assets/project.json'
import { Fade } from "react-awesome-reveal";


function Projects() {
  return (
    <div className='projects'>
      <Fade duration={3500}>
        <center><div className='title'><NotesIcon style={{fontSize: '40pt', color: 'whitesmoke'}} /><span>Projects</span></div></center>
        <div className='projects-container'>
        <div>{ project.map((e,key) => {
            return (
                <div className='project'>
                    < ProjCard key={key}
                    name={e.name}
                    date={e.date}
                    img={e.img}
                    description={e.description}
                    demo={e.demo}
                    github={e.github}
                    tech={e.tech}
                    type={e.type}

                    />
                 </div>
    
        )})}</div>


    </div>
    </Fade>
    </div>
    
  )
}

export default Projects