import { Button, Container } from '@mui/material'
import React from 'react'

function Hero() {
    return (
        <Container>
            <div className='text-gray-300 text-5xl font-bold leading-normal flex  w-1/2 items-center justify-center flex-col h-screen '>
                <h1>
                    Hello ,
                    <br />
                    My Name is
                    <br />
                    ASADULLAH
                </h1>
                <div style={{ width: '50%' }}>
                    <Button fullWidth variant='contained' sx={{ color: 'white', fontSize: '1.1rem', fontWeight: 'bold' }} >
                        PORTFOLIO
                    </Button>
                </div>
            </div>
        </Container>
    )
}

export default Hero
