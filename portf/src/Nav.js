import React from 'react'
import './Nav.css'


function Nav({title}){
    return(
        <div className='nav-container'>
            <div className='nav-list-l'>
                <ul>
                    <li>
                        <a href=''>Skills</a>
                    </li>
                    <li>
                        <a href=''>Work Experience</a>
                    </li>
                </ul>
            </div>
            <div className='nav-title'>
                <h1>{title}</h1>
            </div>
            <div className='nav-list-r'>
                <ul>
                    <li>
                        <a href=''>Projects</a>
                    </li>
                    <li>
                        <a href=''>Contact</a>
                    </li>
                </ul>
            </div>
            
        </div>
    )
}
export default Nav