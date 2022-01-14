import React from 'react'
import ImageComponent from './ImageComponent'
import SubComponent from './SubComponent'
function Projects() {
  return (
    <div className='mt-60'>
      <div className='flex flex-col  items-center w-full'>
        <p className='text-5xl font-mono mb-2 '>PRO<span className='text-red-600'>J</span>ECTS</p>
        <div className='h-1 w-1/6 bg-gray-300 rounded-full mb-10'>

        </div>
      </div>
      <div className='w-full flex justify-center'>
        <div className='border-2 border-gray-500 w-2/3 '>
          <div className='grid grid-cols-2 gap-0'>
            <SubComponent/>
            <ImageComponent/>
            <ImageComponent/>
            <SubComponent/>            
            <SubComponent/>    
            <ImageComponent/>
        
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects
