import React from 'react'
import Facebook from "../images/Facebook.png"
import LinkedIn from "../images/LinkedIn.png"
import Twitter from "../images/Twitter.png"
import Instgram from "../images/Insta.png"
import Hand from "../images/Hand.png"

const SocialLinks = () => {
  return (
    <div className='min-h-[30px] bg-[#0E0E0E] md:min-h-[33.97px] text-[#FFFFFF]  flex justify-between items-center'>
       
       <div className='ml-5 flex items-center gap-5 md:ml-20'>
     <a href="/">  <img src={Facebook} alt="" />  </a> 
     <a href='/'>  <img src={LinkedIn} alt="" /> </a> 
     <a href='/'> <img src={Twitter} alt="" />  </a>
       <a href='/'>  <img src={Instgram} alt="" /> </a>
       </div>
    
     <div className='mr-5 flex md:mr-20  items-center'>
        <img src={Hand} alt=""/> 
        <p className='text-sm '>Join the fight, Become a Volunteer</p>
     </div>

    </div>

  )
}

export default SocialLinks