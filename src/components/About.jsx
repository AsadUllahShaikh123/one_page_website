import { Button } from '@mui/material'
import React from 'react'
import image from '../myProfile.png'
function About() {
  return (
    <div className='mt-64'>
      <div className='w-full flex justify-center '>
        <div className='flex justify-around w-10/12 relative'>
          <div className='w-80 h-80 rounded-full border-2 border-gray-600'>
            <img src={image} alt="my-profile" class="w-80 h-80 rounded-full absolute left-24 bottom-14" />
          </div>
          <div className='w-1/2'>
            <h1 className='text-6xl font-mono text-gray-600   mb-2'>ABOUT <span className='text-blue-500'>ME</span></h1>
            <div className='h-1 w-1/4 bg-gray-300 rounded-full mb-2'>

            </div>
            <p className='font-bold font-mono text-1xl text-gray-700 mb-2 '>FRONT END DEVELOPER</p>
            <div className='h-1 w-1/4 bg-gray-300 rounded-full mb-6'>

            </div>
            <p className='font-mono text-gray-600 font-bold mb-6'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error, omnis. Quis cumque eaque nemo dolorum nihil recusandae, numquam aliquid, magnam qui quia commodi accusamus? Voluptate iste perspiciatis alias molestiae quasi veniam consectetur consequatur ad, excepturi error numquam. Quibusdam facilis doloremque, iste eius expedita ducimus commodi voluptas et unde saepe. Mollitia!</p>
            <Button variant='contained'>DOWNLOAD RESUME</Button>
          </div>
        </div>

      </div>
    </div>
  )
}

export default About
