import React from 'react'

function Header() {
    return (
        <header className='bg-gray-900/80 z-50 h-12 flex justify-around items-center fixed inset-x-0 top-0'>
            <p className='text-2xl text-gray-300 font-bold '><span className='text-blue-500'>A</span>SAD<span className='text-blue-500'>U</span>LLAH</p>
            <nav className='flex justify-between  w-4/12  text-gray-300 font-bold'>
                <p className='hover:cursor-pointer hover:text-gray-200'>HOME</p>
                <p className='hover:cursor-pointer hover:text-gray-200'>SERVICES</p>
                <p className='hover:cursor-pointer hover:text-gray-200'>PROJECTS</p>
                <p className='hover:cursor-pointer hover:text-gray-200'>ABOUT</p>
                <p className='hover:cursor-pointer hover:text-gray-200'>SERVICES</p>
            </nav>
        </header>

    )
}

export default Header
