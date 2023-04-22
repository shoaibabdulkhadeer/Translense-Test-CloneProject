import React from 'react'
import Global from '../images/global.png'
import bulb from '../images/bulb.png'
import protect from '../images/protect.png'
import helmer from '../images/helmet.png'

const Programs = () => {



  return (
    <div className=''>

<p className='text-center text-5xl font-bold'>Our Continued Project <br></br> Assistance Programs</p>

   <div className='flex flex-wrap justify-center items-center p-10 gap-10 mt-5' > 
       <div className='w-96 mx-10 '>
        <img src={Global} alt='' />
        <p className='font-bold text-2xl my-5' >Reduce Global Warming Now</p>
        <p className='w-80'>The warming of the atmosphere has an impact on weather patterns, causing more frequent and severe droughts and storms worldwide.</p>
       </div>
    
      
       <div className='w-96 mx-10 '>
        <img src={protect} alt=''  />
        <p className='font-bold text-2xl my-5'>Protecting Ecosystems</p>
        <p className='w-80'>Higher temperatures are shortening the seasons and, in some places, have already exceeded safe levels for ecosystems and humans.</p>
       </div>
          

       <div className='w-96 mx-10'>
        <img src={bulb} alt='' />
        <p className='font-bold text-2xl my-5'>Shift Towards Clean Energy</p>
        <p className='w-80'>This energy transition has the potential to impact many aspects of life, including the environment, society, the economy, and governance.</p>
       </div>


       <div className='w-96 mx-10'>
        <img src={helmer} alt='' />
        <p className='font-bold text-2xl my-5'>Safe Coastal Livelihoods</p>
        <p className='w-80'>Sustainable aquaculture, e.g. grouper aquaculture, meets the high demand for reef fish while potentially preserving coastal communities' livelihoods.</p>
       </div>


       <div className='w-96 mx-10'>
        <img src={Global} alt='' />
        <p className='font-bold text-2xl my-5'>Stop Toxic Chemical in Air </p>
        <p className='w-80'>Solubility is differentiated by whether the substance is easily dissolved in organic solvents under normal environmental conditions of temperature & pressure.</p>
       </div>


       <div className='w-96 mx-10'>
        <img src={protect} alt='' />
        <p className='font-bold text-2xl my-5'>Ban Radioactive Contamination</p>
        <p className='w-80'>Radioactive materials released into the environment can contaminate the air, water, surfaces, soil, plants, buildings, people & animals.</p>
       </div>
    </div>

    
    </div>
  )
}

export default Programs
