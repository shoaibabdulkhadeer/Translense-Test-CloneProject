import React from 'react'
import gloves from '../images/gloves.png'
import Public from "../images/public.png"
import Hand from "../images/handshake.png"


const Counts = () => {
  return (
    <div className='flex flex-col md:flex-row justify-center items-center gap-36 p-28'>
          
          <div className='flex flex-col items-center justify-center gap-5 font-bold mx-5'> 
          <div className='border  border-green-900 rounded-full p-10'>
          <img  src={gloves} alt='' width={50}/>
          </div>
             <p className='text-6xl text-green-900 font-bold'>5,898</p>
             <p className='text-2xl text-black font-bold'>Trees Planted</p>
          </div>


          <div className='flex flex-col items-center justify-center gap-5 font-bold  mx-5 '> 
          <div className='border  border-green-900 rounded-full p-10'>
          <img  src={Public} alt='' width={50}/>
          </div>
             <p className='text-6xl text-green-900 font-bold'>5,898</p>
             <p className='text-2xl text-black font-bold'>Trees Planted</p>
          </div>

          <div className='flex flex-col items-center justify-center gap-5 font-bold  mx-5'> 
          <div className='border  border-green-900 rounded-full p-10'>
          <img  src={Hand} alt='' width={50}/>
          </div>
             <p className='text-6xl text-green-900 font-bold'>5,898</p>
             <p className='text-2xl text-black font-bold'>Trees Planted</p>
          </div>


          <div className='flex flex-col items-center justify-center gap-5 font-bold  mx-5'> 
          <div className='border  border-green-900 rounded-full p-10'>
          <img  src={gloves} alt='' width={50}/>
          </div>
             <p className='text-6xl text-green-900 font-bold'>5,898</p>
             <p className='text-2xl text-black font-bold'>Trees Planted</p>
          </div>
    </div>
  )
}

export default Counts
