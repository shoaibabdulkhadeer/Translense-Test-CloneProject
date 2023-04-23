import React from 'react'

const Case = () => {
  return (
    <div className='flex flex-col items-center justify-center'>
    <h1 className='text-4xl font-bold mb-10'>Case study</h1>
     
     <div className='flex flex-col items-center p-10  justify-center md:flex-row bg-green-800 md:p-0 text-white'>
        <img className='w-52 md:w-96' src='/images/sky.png' alt=''/>
        <div className='items-center flex flex-col md:items-start  justify-center pl-10'>
            <p>DISASTER MITIGATION</p>

            <div className='flex flex-col items-center md:flex-row w-[700px] justify-between' >
            <h1 className='text-2xl w-[300px]'>Switching to Clean Energy & Preserving our Abode, Earth.</h1>
            <button className='bg-white my-5 text-green-700 font-bold md:mb-10  w-48 hover:bg-slate-200'> Donate Now </button>
            </div>
         

            <p className=' w-[300px] md:w-[800px] '>Planning and zoning are examples of mitigation actions, 
            as are floodplain protection, property acquisition and relocation, and public outreach projects. Installing disaster warning systems, purchasing radio communications equipment, and conducting emergency response training are examples of preparedness actions. Disaster mitigation is at the heart of emergency management.
            </p>
        </div>

     </div>
       
    </div>
  )
}

export default Case
