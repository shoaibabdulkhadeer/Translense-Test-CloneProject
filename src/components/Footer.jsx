import React from 'react'

const Footer = () => {
  return (
    <div className='flex w-full justify-between bg-green-800 text-white p-28'>
       <div>
        <h1>ENVIRONMENTAL</h1>
       </div>
   

   <div>
     <div>
        <ul className='flex gap-16'>
            <li>Our Cause</li>
            <li>Contact Us</li>
            <li>Cases</li>
            <li>Our Benefactors</li>
        </ul>
     </div>

     <div className='mt-9'>
        <h1 className='mb-5'>Join our Cause, Become a Member</h1>
        <div className='flex'>
            <input className='p-3 w-56 bg-green-700 text-white'  type='text ' placeholder='Enter your email address'/>
            <button className='bg-orange-300 w-24'>JOIN</button>
        </div>
     </div>
   </div>



   <div className='w-[400px]'>
     <p >
     4517 Washington Ave. Manchester,
Kentucky 39495
(505) 555-0125, (406) 555-0120
binhan628@gmail.com
manhhachkt08@gmail.com
     </p>
   </div>



       
    </div>
  )
}

export default Footer
