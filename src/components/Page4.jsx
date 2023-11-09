import React from 'react'

function Page4() {
  return (
    <div className='w-full h-screen bg-[#ffff] mt-[-4vw] pt-[2vw]'>
        <h1 className=' flex font-normal mb-[1.4vw] text-3xl justify-center '>What we offer:</h1>
        <h1 className='flex font-normal text-2xl justify-center'>Psychological Services</h1>
        <div id="boxes" className='flex gap-[6vw] p-[8vw] pt-[4vw]'>
        <div id="box1" className='bg-[red] w-[24vw] h-[27vw] shadow-2xl shadow-gray-600 p-5 text-center'>
            <h2 className='text-2xl '>Dating & Relationship</h2>
        <p className='text-lg text-[#000000] mt-[1.8vw]'>Scelerisque eleifend done pretium vulputate sapien treat pationet.</p>
        <img src="" alt="" />
        </div>
        <div id="box2" className='bg-[green] w-[24vw] h-[27vw] shadow-2xl shadow-gray-600 shadow-gray-600 p-5 text-center'>
            <h2 className='text-2xl '>Dating & Relationship</h2>
        <p className='text-lg text-[#000000] mt-[1.8vw]'>Scelerisque eleifend done pretium vulputate sapien treat pationet.</p>
        <img src="" alt="" />
        </div>
        <div id="box3" className='bg-[red] w-[24vw] h-[27vw] shadow-2xl shadow-gray-600 shadow-gray-600 p-5 text-center'>
            <h2 className='text-2xl '>Dating & Relationship</h2>
        <p className='text-lg text-[#000000] mt-[1.8vw]'>Scelerisque eleifend done pretium vulputate sapien treat pationet.</p>
        <img src="" alt="" />
        </div>
     </div>  
      <button className='px-[24px] py-[12px] bg-[#26C2E5] rounded-xl ml-[47vw] -mt-[15vw]'>See More...</button>
    </div>
  )
}

export default Page4
