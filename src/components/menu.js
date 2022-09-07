import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  
  import InstagramIcon from '@mui/icons-material/Instagram';
import logo2 from '../assets/logo4.jpg'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import MoreVertIcon from '@mui/icons-material/MoreVert';
function Menu(setmenu) {
    return (
        <div classname="">
        <div className='hidden' >
        </div>
        <div className='h-screen flex flex-col text-white font-sans text-lg '>
            <div className=' upperslidebar flex flex-col basis-3/12' >
                <Link to="/" >
                <img className='flex justify-center'  src={logo2} alt="Logo"/>
                <h1 className='text-lg flex justify-center' >Giri</h1>
                </Link>
                <h1 className='flex justify-center text-sm'>Software engineer</h1>
            </div>
            <div className='middleslidebar py-10 flex flex-col basis-6/12'>
                <button className='py-3 border-y border-gray-800 hover:text-red-600 hover:bg-white' onClick={setmenu(false)}><Link to="/about">About</Link></button>
                <button className='py-3 border-b border-gray-800 hover:text-red-600 hover:bg-white'><Link to="/skill">Skill</Link></button>
                <button className='py-3 border-b border-gray-800 hover:text-red-600 hover:bg-white'><Link to="/contact">Contact</Link></button>
                <button className='py-3 border-b border-gray-800 hover:text-red-600 hover:bg-white'><Link to="/work">Work</Link></button>
                <button className='py-3 border-b border-gray-800 hover:text-red-600 hover:bg-white'><Link to="/work">Resume</Link></button>
                
            </div>
            <div className='lowwerslidebar flex flex-row basis-3/12 px-2 '>
                    <a href="https://github.com/">
                        <button className='px-2 hover:text-red-600 ' ><GitHubIcon/></button>
                    </a>
                    <a href="https://linkedin.com/">
                    
                    <button className='px-2 hover:text-red-600  '><LinkedInIcon/></button>
                    </a>
                    <a href="https://instagram.com/">
                    <button className='px-2 hover:text-red-600 '><InstagramIcon/></button>
                    </a>
            </div>
        </div>
        </div>
    )
}

export default Menu
