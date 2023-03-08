import React from 'react'
import '../static/project.scss'
import { Fade } from "react-awesome-reveal";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';


type ProjProps = {
    name: string
    date: string
    img: string
    demo: string
    description: Array<string>
    github: string
    tech: Array<string>
    type:string
}



function ProjCard({name, date, img, demo, description, github, tech, type}: ProjProps) {
  

  let show: boolean = true

  if(demo.length === 0) {
    show = false
  }

const techArray = tech

const DescArray = description;
console.log(DescArray[0])
  
  return (
    <>
        <div className='proj-title'>
            <center><span>{name}</span><br/><a style={{color: '#214832'}}> _____________________________________________ </a></center>
        </div>
        <div className='proj-date'> {date}</div>
      <div className='proj-image' style={{backgroundImage: `url(${img})`}}>
      </div>
      <div className='proj-desc'>
        {
          DescArray.map((e, index) => (
            <div key={index}>{e}<br /><br/> </div>
          ))
        }
      </div>
      <div className='proj-tech'><CheckCircleIcon style={{color: '#f96815'}}/><b> 기술 스텍: </b>{techArray.map(e => {
        <>
        </>
                return(
          e)
      })} </div>
      <div className='proj-type'><CheckCircleIcon style={{color: '#f96815'}}/><b> 유형: </b> {type}</div>

      <div className='buttons'>
      <button className='proj-github'><a href={github} style={{color: 'whitesmoke'}} target="_blank">Source Code</a></button>
      
      {  show ? 
      
      <button className='proj-demo'><a href={demo} style={{color: 'whitesmoke', fontWeight: 'bolder'}} target="_blank">Demo</a></button>
      : <></>
      }
      </div>
</>   
  )
}

export default ProjCard
