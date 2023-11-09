import React from 'react'
import dangmam from '../images/dangmam.png'
import people from '../images/people.png'
import onlineCounsellingImg from '../images/onlineCounsellingImg.png'
function Page3() {
  return (
    <div>
      <div className='w-full h-screen relative pt-1 flex'>
      <div id='leftMost'>
        <h1 className='-rotate-90 text-gray-200 absolute z-50 ml-[-10vw] mt-[17vh] text-[8.5vw] font-algerian'>ABOUT US</h1>
      </div>
      <div id='left' className='w-[24vw] bg-orange-300 h-[65vh] ml-[23vw] mt-[-4vw] p-1 mr-[5vh]'>

            <img className='w-[22vw] h-[60vh] object-center ml-[50%] mt-[50%] translate-x-[-50%] translate-y-[-35%] relative' src={dangmam} alt="" />
            <div id="rect"className='w-[25vw] h-[15vh] bg-[#D9D9D9] absolute top-[45vh] left-[41.5vh] opacity-80 pl-6 pt-2'>
                <h2 className='text-[#E02727] font-normal text-3xl font-baloo'>A Live Therapy Session by</h2>
                <h2 className='text-[#000000] font-normal text-3xl font-baloo'>Dr. Sheela Dang</h2>
            </div>
      </div>
      <div id='right'className='relative bg-[#ffff] w-1/3 h-1/2 mt-[-2vw] ml-[4vw]'>
        <h2 className='text-[#000] text-2xl font-normal mb-[2vw] mt-[-2vw]'>About Us</h2>
        <h1 className='text-3xl text-[black] mb-[1vw] font-arial'>We believe every child is unique so their way of handling them should be
</h1>

 
        <div><img className='w-[3vw] h-[3vw] mt-[4vw]' src={onlineCounsellingImg} alt="counselling" /><h2 className='font-semibold font-arial p-2 pt-6 text-xl '>Online Counseling</h2>
        <p className='w-[28vw] font-arial'>We also offer Online counselling to understand your child's unique strengths and challenges. You can get a personalised plan to support your child's growth and development.</p></div>
        <div><img className='w-[3vw] h-[3vw] mt-[4vw]' src={people} alt="counselling" /><h2 className='font-semibold p-2 pt-6 text-xl'>Behavioral Interventions</h2>
        <p className='w-[28vw] font-arial'>We also offer Online counselling to understand your child's unique strengths and challenges. You can get a personalised plan to support your child's growth and development.</p></div>
        <button className='mt-[5vh] px-[26px] font-arial py-[16px] bg-[#26C2E5] text-[#ffff] rounded-2xl'>Book Session</button>
 
      </div>
    </div>
    </div>
  )
}

export default Page3
