import React from 'react'
import littledotslogo from '../images/littledotslogo.png'
function Nav() {
  return (
    <nav className='flex bg-[#ffff] content-between items-center gap-x-12 max-h-28'>
      <img className='w-41 h-40 mr-[10vw] ml-[3vw]' src={littledotslogo} alt="logo" />
      <h3 className='text-black text-xl font-semibold ml-5'>Home</h3>
      <h3 className='text-black text-xl font-semibold'>About Us</h3>
      <h3 className='text-black text-xl font-semibold'>Team</h3>
      <h3 className='text-black text-xl font-semibold'>Gallery</h3>
      <h3 className='text-black text-xl font-semibold'>Blogs</h3>
      <h3 className='text-black text-xl font-semibold'>Internships</h3>
      <h3 className='text-black text-xl font-semibold'>Contact Us</h3>
    </nav>
  )
}

export default Nav
