import React from 'react'
import './Icon.css'
import Button from 'react'

function Icon({silhouette, link, size=40}:{silhouette:string,link:string,size:number}){
    return(
        <div className='icon-parent'>
            
            <button className='button-icon'
            style={{ width: `${size}px`, height: `${size}px`}}
            >
                
                <a href={link} className='link-icon' target="_blank" rel="noopener noreferrer">
                    <div className='silhouette'>
                        <img src={silhouette} 
                        className='img-sil' 
                        alt=''
                        style={{ width: `${size - 10}px`}} // Inline styles for dynamic sizing
                        ></img>
                    </div>
                </a>
            </button>
        </div>
        
        
    )
}
export default Icon