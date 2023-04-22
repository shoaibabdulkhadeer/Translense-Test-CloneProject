import React from 'react'
import Bg  from "../images/Bg.png"

const Main = () => {
  return (
    <div className='min-h-[100vh] '>
           
           <div>
            <img className='w-full min-h-[80vh]' src={Bg} alt=''/>

           </div>
       
          <div className='absolute text-white top-[30%] left-10 ml-5'>
          <p className='text-4xl '>   Help Today for   </p>
          <p className='text-8xl ml-28' > Brighter Tomorrow</p>
          <p className='mt-10 text-xl'> Leaders across the country are tackling the most challenging and pressing issues <br></br> of our time. Earth Let us all join to deal with unprecedented threats to Earth's life.</p>
        
        <div className='mt-10 font-bold'> 
        <button className='bg-white text-green-700 font-bold p-4 w-48 hover:bg-slate-200'> Donate Now </button>
         <button className='border border-white  p-4 w-48 mx-7 hover:bg-slate-200 hover:text-green-700'> Contact US</button>
    
        </div>
      
          </div>



    </div>

  )
}

export default Main
