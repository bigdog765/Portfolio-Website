import React from 'react'
import './Card.css'
import RenderModel from './RenderModel.tsx'


function Card({title, imgUrl, body}: {title:string,imgUrl:string,body:string}){
    const isModel = imgUrl.includes('.glb')
    return(
        <div className='card-parent'>
            <div className='card-container'>
                <div className='img-container'>
                    {isModel ? <RenderModel modelPath={imgUrl} width={300} height={300} /> :
                    <img src={imgUrl} className='imgcss' alt=''></img>}
                </div>
                <div className='card-content'>
                    <div className='card-title'>
                        <h3>{title}</h3>
                    </div>
                    <div className='card-body'>
                        <p>{body}</p>
                    </div>
                </div>
            </div>
            
        </div>
        
        
    )
}
export default Card