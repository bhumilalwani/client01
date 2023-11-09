import React from 'react'
import children from '../images/children.png'
function Appoint() {
  return (
    <div className='w-full h-full '>
        <img className='mt-[15.7vw] w-full h-full relative' src={children} alt="" />
        <div id="purpplediv" className='w-3/4 h-3/4 bg-[#bd7acb64] absolute mt-[-46vw] ml-[50vw] translate-x-[-38vw]'>
            <div id="left">
                <h1>Fix An Appointment</h1>
                
            </div>
            <div id="right"></div>
        </div>
    </div>
  )
}

export default Appoint
