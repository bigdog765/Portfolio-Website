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
                            
                            <Link to="/skills">Skills</Link>
                        </li>
                        <li>
                            <Link to="/work">Work Expirience</Link>
                        </li>
                    </ul>
                </div>
                <div className='nav-title'>
                    <Link to="/">{title}</Link>
                </div>
                <div className='nav-list-r'>
                    <ul>
                        <li>
                            <Link to="/projects">Projects</Link>
                        </li>
                        <li>
                            <Link to="/contact">Contact</Link>
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