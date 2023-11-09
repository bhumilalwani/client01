import React from 'react'
import {BsTelephoneFill} from 'react-icons/bs';
import {IoLocationSharp} from 'react-icons/io5';
import counselling from '../images/counselling.png'
function Counsell() {
  return (
    <div className=''>
        <img className='w-full h-3/4 ' src={counselling} alt="" />
      <h1 className='text-[#ffff] text-3xl font-baloo text-semibold mt-[-35vw] ml-[10vw]'>Schedule a Counseling Session Now</h1>
      <h3 className='text-[#ffff] text-xl font-baloo  text-normal ml-[10vw] mt-[2vw] flex gap-[2vw]'><BsTelephoneFill/> 91+ 8657420227</h3>
      <h3 className='text-[#ffff] text-xl font-baloo  text-normal ml-[10vw] mt-[2vw] flex gap-[2vw] w-[30vw]'><IoLocationSharp/>Room No. 1 Kesarinath CHSL opp vijaysales, SV road, goregaon west</h3>
    <div id="btns" className='flex gap-[6vw] pl-[15vw] pt-[4vw]'>
        <button className='bg-[#FF7A00] px-[78px] py-[12px]'><h2 className='text-semibold text-xl font-baloo text-[black]'>Fix An Appointment</h2></button>
        <button className='bg-[#26C2E5] px-[78px] py-[12px]'><h2 className='text-semibold text-xl font-baloo text-[black]'>Take a Consultant</h2></button>
    </div>
    </div>
  )
}

export default Counsell
