import reactLogo from '../assets/react.svg'
import React from 'react'
import {Link} from 'react-router-dom'

function NavBar(){
    return(
        <>
            <div className='flex gap-2 pl-3 py-4 items-center'>
            <img className='h-[50px]' src={reactLogo}/>

            <Link to='/' className='text-blue-500 font-mono font-bold text-2xl pl-3 pr-3' >
                Get Started
            </Link>

            <Link to='/guide' className='text-blue-500 font-mono font-bold text-2xl pl-3 pr-3' >
                Guide
            </Link>
            <Link to='/author' className='text-blue-500 font-mono font-bold text-2xl pl-3 pr-3' >
                Authors
            </Link>
            <Link to='/author' className='text-blue-500 font-mono font-bold text-2xl pl-3 pr-3' >
                AI Recommendation
            </Link>

            </div>

        </>
    )
}

export default NavBar;


