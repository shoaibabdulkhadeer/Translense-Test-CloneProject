import React, { useState } from 'react'
import Logo1 from "../images/Logo1.png"
import Logo2 from "../images/Logo2.png"
import { GiHamburgerMenu} from 'react-icons/gi';
import { ImCross} from 'react-icons/im';

const Navbar = () => {


  const [change,setChange] = useState(false)

 const goahead = () => {
setChange(prev => prev = !prev)
 }


  return (
    <div className='min-h-[60px] p-4 bg-[#146356] md:min-h-[84.92px] flex items-center justify-between'>
        
        <div className='flex ml-5'>
            <img src={Logo1} alt="" className='h-10 '/>
            <img src={Logo2} alt="" className='h-5'/>
        </div>

        <div>
            <ul className='hidden md:flex font-light text-white text-[13.5871px] gap-10 md:text-[13.5871px] '>
                <li>Home</li>
                <li>Our Cause</li>
                <li>Contact Us</li>
                <li>Cases</li>
                <li>Our Benefactors</li>
            </ul>
        </div>

        <button className='hidden md:flex items-center justify-center  text-[13px] h-[39.06px] md:text-[13.5871px] text-white bg-[#FFA17A] w-[145.21px]  rounded-[3.39678px]'>Help Us fight</button>


        {change? <ImCross className='md:hidden cursor-pointer'  size={35} onClick={goahead} /> :    <GiHamburgerMenu  className='md:hidden cursor-pointer'  size={35} onClick={goahead}/>  }
 


 {/* mobile */}

 {change ?    <div className='absolute top-[102px] h-full w-full left-0 z-50 bg-green-900'>
            <ul className=' flex flex-col items-center justify-center  text-white text-3xl gap-5 mt-7'>
                <li>Home</li>
                <li>Our Cause</li>
                <li>Contact Us</li>
                <li>Cases</li>
                <li>Our Benefactors</li>
            </ul>
        </div> :
        null}
    






    </div>
  )
}

export default Navbar