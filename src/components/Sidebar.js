import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  
import logo2 from '../assets/logo4.jpg'
function Sidebar() {
    return (
        <div className='h-screen flex flex-col text-white font-sans text-lg '>
            <div className='upperslidebar flex flex-col basis-3/12' >
                <Link to="/" >
                <img className='flex justify-center'  src={logo2} alt="Logo"/>
                <h1 className='text-lg flex justify-center' >Giri</h1>
                </Link>
                <h1 className='flex justify-center'>Software engineer</h1>
            </div>
            <div className='middleslidebar px-5 py-10 flex flex-col basis-6/12'>
                <button className='py-3 border-y border-black hover:text-cyan-600'><Link to="/about">About</Link></button>
                <button className='py-3 border-b border-black hover:text-cyan-600'><Link to="/skill">Skill</Link></button>
                <button className='py-3 border-b border-black hover:text-cyan-600'><Link to="/work">Work</Link></button>
                <button className='py-3 border-b border-black hover:text-cyan-600'><Link to="/contact">Contact</Link></button>
                
            </div>
            <div className='lowwerslidebar flex flex-row basis-3/12'>
                    <button>github</button>
                    <button>linkedin</button>
                    <button>instagram</button>
            </div>
        </div>
    )
}

export default Sidebar
