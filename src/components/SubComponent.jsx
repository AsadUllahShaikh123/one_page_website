import React from 'react'
import {Typography} from '@mui/material'
function SubComponent() {
    return (
        <div className=' bg-gray-700 px-4 py-8'>
                <Typography variant='h3' className='text-white font-mono ' style={{marginBottom:'0.5rem'}} >Project 1 </Typography>
                <Typography variant='p' className='text-white block font-bold font-mono' style={{marginBottom:'0.5rem'}}>Coding is Love</Typography>
                <Typography variant='p' className='text-gray-400 font-mono' style={{marginBottom:'0.5rem'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus dignissimos dolore, culpa nobis temporibus esse nisi. Minima vel quam corrupti repellat nihil. Veniam blanditiis enim soluta rerum cupiditate reprehenderit quos facere pariatur fugiat eligendi asperiores officia ratione, odit, earum corrupti.</Typography>
            </div>
    )
}

export default SubComponent
