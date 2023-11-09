import React from 'react'
import {FiPhone} from 'react-icons/fi'
import {FiMail} from 'react-icons/fi'
import {PiClockBold} from 'react-icons/pi'
function Purpple() {
  return (
    <div className='flex items-center justify-between bg-[#9C29B2] p-3 px-8 font-ogg'>
       <h1 className='text-white flex gap-x-4 items-center'>
                <FiPhone></FiPhone>
                91+ 8657420227</h1>
            <h1 className='text-white flex gap-x-4 items-center'>
                <FiMail></FiMail>
            info@littledotscdc.com
            </h1>
            <h1 className='text-white flex gap-x-4 items-center'>
                <PiClockBold></PiClockBold>
                Tues to Sun: 12pm to 7pm</h1>
    </div>
  )
}

export default Purpple
