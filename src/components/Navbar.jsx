import React from 'react'
import Logo1 from "../images/Logo1.png"
import Logo2 from "../images/Logo2.png"

const Navbar = () => {
  return (
    <div className='min-h-[60px] p-4 bg-[#146356] md:min-h-[84.92px] flex items-center justify-between'>
        
        <div className='flex ml-5'>
            <img src={Logo1} alt="" className='h-10 '/>
            <img src={Logo2} alt="" className='h-5'/>
        </div>

        <div>
            <ul className='flex font-light text-white text-[13.5871px] gap-10 md:text-[13.5871px] '>
                <li>Home</li>
                <li>Our Cause</li>
                <li>Contact Us</li>
                <li>Cases</li>
                <li>Our Benefactors</li>
            </ul>
        </div>

        <button className='text-[13px] h-[39.06px] md:text-[13.5871px] text-white bg-[#FFA17A] w-[145.21px]  rounded-[3.39678px]'>Help Us fight</button>

    </div>
  )
}

export default Navbar