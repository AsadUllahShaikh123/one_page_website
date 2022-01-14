import React from 'react'
import image from '../bg.jpg'

function ImageComponent() {
    return (
        <div style={{backgroundImage:`url(${image})`,backgroundSize:'100% 100%',backgroundPosition:'center'}}>
                
        </div>
    )
}

export default ImageComponent
