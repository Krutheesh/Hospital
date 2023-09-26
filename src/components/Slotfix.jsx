import React from 'react'
import {FaAmbulance} from 'react-icons/fa'
import {SlCalender} from 'react-icons/sl'
import { Link } from 'react-router-dom'
function Slotfix() {
  return (
    <div className='fixed right-0 top-[10rem] z-10'>
      <div className=' md:p-2 p-1 bg-red-600 contact-card text-white font-bold'>
          <div className='flex flex-col items-center justify-center'>
            <FaAmbulance className='text-[1.5rem] '/>
            <span className='italic text-[0.7rem] '>24*7</span>
            <span className='text-[0.7rem]'>Emergency</span>
            <span className='text-[0.6rem]'>9121212541/ 42 /43</span>
          </div>
      </div>
      
      <div className='md:p-3 p-1 mainColor  contact-card text-white font-bold'>
      <Link to='/slotbook'><div className='flex flex-col items-center justify-center'>
            <SlCalender className='text-[1.5rem] '/>
            <span className=' text-[0.6rem] '>Book an</span>
            <span className='text-[0.6rem]'>Appointment</span>
          </div></Link>
      </div>
      
    </div>
    
  )
}

export default Slotfix
