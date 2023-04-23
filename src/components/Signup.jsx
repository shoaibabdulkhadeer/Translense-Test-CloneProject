import React from 'react'

const Signup = () => {
  return (
    <div className='flex  justify-center items-center'>
      <div className='w-[600px] p-10 flex flex-col justify-center'> 
        <h1 className='text-4xl font-bold my-5'>Sign Up For Environment <br></br> News & Alerts</h1>
        <p className='my-5'>We are bringing worldwide concerns and solutions fresh to your emails. As opposed to what others do, we make our contributions timely.</p>
        <input className=' p-4' type='text' placeholder='Enter your email address'/>
        <button className='bg-green-800 w-40 p-3 mt-5 text-white'>Subscribe</button>
      </div>
        
        <img src='/images/boy.png' alt='' width={350}/>

    </div>
  )
}

export default Signup
