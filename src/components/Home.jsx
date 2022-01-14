import React from 'react'
import Header from './Header'
import Hero from './Hero'
import image from '../bg.jpg'
function Home() {
    return (
        <div style={{height:'100vh',backgroundImage:`url(${image})`,backgroundAttachment:'fixed',backgroundSize:'100% 100%',backgroundPosition:'center'}}>
            <Header/>
            <Hero/>
        </div>
    )
}

export default Home
