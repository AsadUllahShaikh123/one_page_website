import { Container } from '@mui/material'
import React from 'react'

function Services() {
    return (
        <div className='mt-44'>
            <div className='flex flex-col w-full items-center mb-16'>
                <h1 className='text-5xl font-mono mb-2 '>SERV<span className='text-red-600'>I</span>CES</h1>
                <div className='h-1 w-1/6 bg-gray-300 rounded-full mb-10'>

                </div>
                <p className='w-1/2 text-center font-mono'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae reiciendis fuga eos ipsam dolore, autem maxime? Expedita nihil repellat, voluptatibus eum aperiam, delectus facere placeat laboriosam tempore labore, sed repudiandae hic alias.</p>
            </div>
            <Container>
                <div className='grid grid-cols-4 gap-1'>
                    <div className='border-2 p-6 rounded-lg bg-gray-800/70'>
                        <p className='text-2xl text-gray-200  font-mono'>WEB DESIGN</p>
                        <p className='text-gray-400 font-mono'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, dicta labore? Perspiciatis consequuntur quam voluptas quidem!</p>
                    </div>
                    <div className='border-2 p-6 rounded-lg bg-gray-800/70'>
                        <p className='text-2xl text-gray-200 font-mono'>WEB DESIGN</p>
                        <p className='text-gray-400 font-mono'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, dicta labore? Perspiciatis consequuntur quam voluptas quidem!</p>
                    </div>
                    <div className='border-2 p-6 rounded-lg bg-gray-800/70'>
                        <p className='text-2xl text-gray-200 font-mono'>WEB DESIGN</p>
                        <p className='text-gray-400 font-mono'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, dicta labore? Perspiciatis consequuntur quam voluptas quidem!</p>
                    </div>
                    <div className='border-2 p-6 rounded-lg bg-gray-800/70'>
                        <p className='text-2xl text-gray-200 font-mono'>WEB DESIGN</p>
                        <p className='text-gray-400 font-mono'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, dicta labore? Perspiciatis consequuntur quam voluptas quidem!</p>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Services
