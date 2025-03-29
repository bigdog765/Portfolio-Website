import React from 'react'
import './Icon.css'
import Button from 'react'

function Icon({silhouette, link}:{silhouette:string,link:string}){
    return(
        <div className='icon-parent'>
            
            <button className='button-icon'>
                
                <a href={link} className='link-icon' target="_blank" rel="noopener noreferrer">
                    <div className='silhouette'>
                        <img src={silhouette} className='img-sil' alt=''></img>
                    </div>
                </a>
            </button>
        </div>
        
        
    )
}
export default Icon