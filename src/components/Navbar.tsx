import React, {useState, useEffect} from 'react'
import {Link ,animateScroll }  from 'react-scroll'
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import '../static/navbar.scss'

function Navbar() {

    const [nav, setNav] = useState(false)
    const [color, setColor] = useState('black')
    const [textColor, setTextColor] = useState('white')

    const handleNav = ()=> {
        setNav(!nav)
    }

    // useEffect(()=> {
    //     const changeColor = () => {
    //         if(window.scrollY >= 90) {
    //             setColor('whitesmoke')
    //             setTextColor('black')
    //         } else {
    //             setColor('black')
    //             setTextColor('whitesmoke')
    //         }
    //     }
    //     window.addEventListener('scroll', changeColor)
    // }, []);

  return (

    
 
    <div   className='container'>
      <div style={{backgroundColor: `${color}`}} className='monitor-container'>
        <ul style={{color: `${textColor}`}} className='box'>
            <div>
                <Link to='tiger'  smooth={true} duration={500}>Home</Link>
            </div>
            <div>
                <Link to='about'  smooth={true} duration={500} offset={-50}>About</Link>
            </div>
            <div>
                <Link to='skill-section'  smooth={true} duration={500} offset={-90}>Skills</Link>
            </div>
            <div>
                <Link to='projects'  smooth={true} duration={500} offset={-90}>Projects</Link>
            </div>
            <div>
                <a href="https://www.notion.so/e1690d1a99e1499ba9b9dde1b08e06b8?pvs=4" style={{color: '#f96815'}}>Resume</a>            
            </div>
             </ul>
        </div>
      </div>

  )
}

export default Navbar
