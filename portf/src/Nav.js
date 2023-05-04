import React from 'react'
import './Nav.css'


import { Outlet, Link } from "react-router-dom";

function Nav({title}){
    return(
        <>
        <div className='nav-wrap'>
            <div className='nav-container'>
                
                <div className='nav-list-l'>
                    <ul>
                        <li className='skill-margin'>
                            
                            <Link to="/skills">SKILLS</Link>
                        </li>
                        <li>
                            <Link to="/work">WORK EXPIRIENCE</Link>
                        </li>
                    </ul>
                </div>
                <div className='nav-title'>
                    <Link to="/">{title}</Link>
                </div>
                <div className='nav-list-r'>
                    <ul>
                        <li>
                            <Link to="/projects">PROJECTS</Link>
                        </li>
                        <li>
                            <Link to="/contact">CONTACT</Link>
                        </li>
                    </ul>
                </div>
                
            </div>
        </div>
        <Outlet/>
        </>
        
        
    )
}
export default Nav