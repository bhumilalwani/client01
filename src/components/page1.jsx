import React from 'react'
import topimg from '../images/topimg.png'
function Page1() {
  return (
    <div className='' >
      <div style={{ position: 'relative'}}>
  <img className='relative w-screen h-screen object-cover' src={topimg} alt="" />

  <h1 className='text-white text-6xl font-bold absolute top-[40vh] left-[18vw] font-grand'>Empower your child with Imagination </h1>
  <button className='font-inter font-bold text-lg bg-[#9C29B2] rounded-[50px] px-[26px] py-[14px] top-[-24vw] left-[45vw] relative z-50 text-[#fff] font-inter'>Book A Visit</button>
  <div className="w-[15vw] h-[15vw] bg-[#ffff] absolute top-[90vh] left-[-2vw] rounded-full"></div>
  <div className="w-[18vw] h-[18vw] bg-[#ffff] absolute top-[85vh] left-[12vw] rounded-full"></div>
  <div className="w-[14vw] h-[14vw] bg-[#ffff] absolute top-[91vh] left-[23vw] rounded-full"></div>
  <div className="w-[8vw] h-[8vw] bg-[#ffff] absolute top-[88vh] left-[32vw] rounded-full"></div>
  <div className="w-[16vw] h-[16vw] bg-[#ffff] absolute top-[85vh] left-[38vw] rounded-full"></div>
  <div className="w-[20vw] h-[20vw] bg-[#ffff] absolute top-[90vh] left-[44vw] rounded-full"></div>
  <div className="w-[5vw] h-[5vw] bg-[#ffff] absolute top-[95vh] left-[62vw] rounded-full"></div>
  <div className="w-[13vw] h-[13vw] bg-[#ffff] absolute top-[90vh] left-[65vw] rounded-full"></div>
  <div className="w-[18vw] h-[18vw] bg-[#ffff] absolute top-[85vh] left-[70vw] rounded-full"></div>
  <div className="w-[18vw] h-[18vw] bg-[#ffff] absolute top-[90vh] left-[79vw] rounded-full"></div>
  <div className="w-[16vw] h-[16vw] bg-[#ffff] absolute top-[85vh] left-[82.7vw] rounded-full"></div>
    {/* <h3 className='text-[1.3vw] font-semibold relative z-50 mt-[2vw] ml-[4vw] text-[#DA1414]'>PART OF THE FAMILY SINCE 2001</h3> */}
    <h1 className='text-[2.5vw] font-semibold relative z-50 ml-[4vw] font-baloo w-[60vw]'>Your child will grow and learn with the best environment
</h1>
</div>
    </div>
  )
}

export default Page1
