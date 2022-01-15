import React from 'react'

function Footer() {
	return (
		<div className='mt-32 flex flex-col items-center h-38 w-full bg-gray-900/80'>
			<h1 className='text-3xl font-bold font-mono text-gray-300 mb-2'><span className='text-blue-500'>A</span>SAD<span className='text-blue-500'>U</span>LLAH</h1>
			<p className='font-bold text-gray-300'>Your Complete Web Solution</p>
			<div className='flex w-1/6 justify-between mt-2 mb-2'>
					<p className='text-gray-300 border-2 border-gray-400 px-2 py-1 rounded-full'>FB</p>
					<p className='text-gray-300 border-2 border-gray-400 px-2 py-1 rounded-full'>IN</p>
					<p className='text-gray-300 border-2 border-gray-400 px-2 py-1 rounded-full'>TW</p>
			</div>
			<p className='text-gray-300'>Copyright &copy 2022 Asadullah. All rights reserved </p>
		</div>
	)
}

export default Footer
