import React from 'react'
import './Card.css'
import RenderModel from './RenderModel.tsx'
import { Link } from 'react-router-dom'


function Card({title, imgUrl, body, scrollTo}: {title:string,imgUrl:string,body:string, scrollTo: string}){
    
    return(
        <div className='card-parent'>
            
                <div className='card-container'>
                    <Link to={`/projects#${scrollTo}`}>
                        <div className='img-container'>
                            
                            <img src={imgUrl} className='imgcss' alt=''></img>
                        </div>
                        <div className='card-content'>
                            <div className='card-title'>
                                <h3>{title}</h3>
                            </div>
                            <div className='card-body'>
                                <p>{body}</p>
                            </div>
                        </div>
                    </Link>
                </div>
            
        </div>
        
        
    )
}
export default Card