import { Container } from '@mui/material'
import React from 'react'

function Contact() {
  return (
    <div className='mt-44 mb-32'>
      <div className='flex flex-col items-center justify-center w-full'>
        <h1 className='text-6xl font-mono text-gray-600 mb-2'>CONTACT <span className='text-blue-500'>INFO</span></h1>
        <div className='h-1 w-1/4 bg-gray-300 rounded-full mb-10'>

        </div>
        <Container maxWidth="md">
          <div className='grid grid-cols-3 gap-8 '>
            <div className="p-4" style={{ boxShadow: 'rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px' }}>
              <p className='font-mono  text-3xl text-black'>Phone</p>
              <p className='text-gray-400'>3113678930</p>
            </div>
            <div className="p-4" style={{ boxShadow: 'rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px' }}>
              <p className='font-mono  text-3xl text-black'>Email</p>
              <p className='text-gray-400'>asadullahshaikh713@gmail.com</p>
            </div>
            <div className="p-4" style={{ boxShadow: 'rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px' }}>
              <p className='font-mono  text-3xl text-black'>Studying</p>
              <p className='text-gray-400'>Mehran University Jamshoro</p>
            </div>
          </div>
        </Container>
      </div>
    </div>
  )
}

export default Contact
