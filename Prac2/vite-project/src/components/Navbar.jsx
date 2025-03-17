import React from 'react'

function Navbar() {
  return (
    <nav className='flex justify-between bg-slate-600 text-white p-2 text-xl'>
        <div className='logo'>
            <span className='font-bold'>iTask</span>
        </div>
        <ul className='flex gap-8'>
            <li className='cursor-pointer hover:font-bold transition-all'>Home</li>
            <li className='cursor-pointer hover:font-bold transition-all'>Your tasks</li>
            <li className='cursor-pointer hover:font-bold transition-all'>Your tasks</li>
            
        </ul>
    </nav>
  )
}

export default Navbar