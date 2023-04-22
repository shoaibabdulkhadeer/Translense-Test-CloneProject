import React from 'react'
import Girl from "../images/girl.png"

const Donate = () => {
  return (
    <div className='flex items-center justify-center p-10'>
        
          <div>
            <img src={Girl} alt=''/>
          </div>
             
           <div  className='w-[406px] p-2 ml-10 '>
           <h1 className='text-4xl font-semibold'>Take Action. Let’s Get In Touch</h1>
            <p className='my-5'>Given the limited resources, the issues we address, from hunger & clean drinking water to disease prevention and homelessness, can be taxing.</p>
            <button className='bg-green-900 p-3 text-white w-40'>Donate Now</button>

           </div>
         
    </div>
  )
}

export default Donate
