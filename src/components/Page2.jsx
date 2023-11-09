import React from 'react'
import circleimg from '../images/circleimg.png'
import Vector from '../images/Vector.png'
function Page2() {
  return (
    <div className='flex item'>
    <div className='w-[50vw] bg-[#ffff] h-1/2 '>
    <img className='rounded-full w-[28vw] h-[28vw] mt-[45%] ml-[50%] translate-x-[-60%] translate-y-[-50%] relative drop-shadow-2xl' src={circleimg} alt="circle child img"/>
    <div id="cir" className='w-[8.2vw] h-[8vw] bg-[#490D59] text-[#ffff] font-bevan rounded-full  absolute top-[84vw] z-50 left-[8vw]'>
        <h1 className='text-bold text-lg font-popp ml-[54%] mt-[30%] translate-x-[-50%] translate-y-[-50%]'>100%</h1>
        <h2 className='text-bold text-lg font-popp ml-[44%] mt-[2%] translate-x-[-50%] translate-y-[-50%]'>A+results</h2>
    </div>
    </div>
   <div className='w-[50vw] bg-[#fff] z-20 h-1/2 pt-[10vw] ml-[-5vw]'>
     <p className='w-[40vw] font-normal text-xl font-baloo mt-[-6vw]'>Little Dots offers an enriching environment where your child can expand their imagination with the best learning experience.
</p>

    <h1 className='font-semibold font-baloo text-2xl text-[#000] mt-[4vh] mb-[2vh]'>Book Your Appointment</h1>
    <div className='flex gap-[3vw]'>
        <div className='w-[25vw] '>
        <h3 className='text-[#C20000] mb-[0.5vw] text-lg font-baloo'>Working Days</h3>
    <h3 className='mb-[2vh] font-baloo'>Tues to Sun</h3>
    <svg className='mb-[3vh]' xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 48 48"><g fill="none"><g clip-path="url(#healthiconsHealthNegative0)"><path fill="#ff7a00" fill-rule="evenodd" d="M48 0H0v48h48V0ZM27.408 6.8a5.537 5.537 0 0 0-5.737 0L19.72 7.995c-3.267 1.996-7.248 2.374-11.101 2.74c-.873.083-1.74.166-2.59.266c0 0-.024 1.845 0 2.689l.209 7.128c.179 6.133 2.906 11.948 7.585 16.174c2.448 2.211 5.13 4.037 8.158 5.477c1.622.77 3.546.7 5.101-.187c2.623-1.496 4.906-3.297 7.113-5.29c4.678-4.226 7.406-10.041 7.585-16.174l.209-7.151c.024-.832.001-2.666.001-2.666a70.828 70.828 0 0 0-3.162-.426c-3.27-.392-6.526-.781-9.383-2.528l-2.037-1.245ZM22 15v7h-7v4h7v7h4v-7h7v-4h-7v-7h-4Z" clip-rule="evenodd"/></g><defs><clipPath id="healthiconsHealthNegative0"><path d="M0 0h48v48H0z"/></clipPath></defs></g></svg>
    <h2 className='font-semibold text-xl mb-[1vw] font-baloo'>Our Approach</h2>
    <p className='w-[15vw] font-baloo'>Little Dots is founded on the belief that every child deserves a bright and happy future. That’s why your child will get the learning environment as per your choice.
</p>
    </div>
    <div>
        <h3 className='text-[#C20000] mb-[0.5vw] mt-[0.5vw] text-lg font-baloo'>Working Hours</h3>
        <h3 className='mb-[2vh] font-baloo'>12PM to 7PM</h3>
        <img className='mb-[3vh]' src={Vector} alt="" />
       <h2 className='font-semibold font-baloo text-xl mb-[1vw]'>Parent and Family Support</h2>
    <p className='w-[15vw] font-baloo'>We understand that parents and families play a critical role in a child's development. We offer guidance and support to help families understand and navigate their child's unique needs.</p>
        </div></div>
 
  </div>
  
    </div>
  )
}

export default Page2
