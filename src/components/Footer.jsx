import React from 'react'

import { Link } from 'react-router-dom'
import { customUseContext } from '../context/Context'
import {MdEmail,MdLocationOn,MdPhoneInTalk} from 'react-icons/md'
import {FaInstagram,FaFacebookSquare,FaYoutube} from 'react-icons/fa'
import { Fade } from 'react-awesome-reveal'
function Footer() {
  const {diffSpecialities} = customUseContext()
  const footer1 = [
   " Home",
"About Us",
"Specialities",
"Services",
"Find a Doctor",
"Videos",
"Contact Us"
  ]
  const footer2 =[
"Critical Care",
"Cardiology",
"Cardiothoracic Surgery",
"Dermatology & Cosmetology",
"Medical & Surgical Gastroenterology",
"General & Laparoscopic Surgery",
"General Medicine & Diabetology",
"Maxillofacial Surgery",
"Neurology & Neurosurgery",
  ]

  const footer3 = [
    "Nephrology",
"Oncology & Onco Surgery",
"Ortho, Poly Trauma & Joint Replacement Surgery",
"Pain Management",
"Physiotherapy",
"Pulmonology",
"Radiology & Imaging",
"Urology",
"Vascular & Endovascular Surgery"
  ]
  const icons = [
    {
      content:"RIVER NIMS HOSPITALS Ramagiri Road, Opp. SPT Market Nalgonda, Telangana - 508 002",
      icon:<MdLocationOn/>
    },
    {
      content:"91212 12541 / 42 / 43",
      icon:<MdPhoneInTalk/>
    },
    {
      content:"info@rivernimshospitals.com",
      icon:<MdEmail/>
    }
  ]
  return (
    <div>
      <Fade>
      <div className='flex flex-col md:flex-row space-y-5 md:space-y-0 justify-between items-start mainColor py-[2rem] text-white text-[0.8rem] px-[2rem] md:px-[8rem]'>
      <div className='md:w-[20%] space-y-2'>
      {
        icons&&icons.map((ele,ind) => (
          <div key={ind} className='flex space-x-5'>
            <div className='text-[1.5rem]'> {ele.icon}</div>
            <div>{ele.content} </div> 
             </div>
        ))
      }
          <li className='flex justify-start space-x-3 py-2  '>
            
           <FaInstagram className='text-[1.5rem]'/>
           <FaFacebookSquare className='text-[1.5rem] md:w-[25%]'/>
           <FaYoutube className='text-[1.5rem]'/>
            </li>
      </div>
      <ul  className='md:w-[20%] space-y-2'>
      <li className='hover:text-red-600' >
      <Link  to='/'>Home</Link></li>
      <li className='hover:text-red-600' >
      
      <Link  to='/about'>About</Link></li>
      <li className='hover:text-red-600' >
      <Link  to='/doctors'>Find a doctor</Link></li>
      <li className='hover:text-red-600' >
      <Link to='/videos'>Our Videos</Link></li>
      <li className='hover:text-red-600' >
      <Link to='/contact'>Contact us</Link> </li> 
      </ul>
      <ul  className='md:w-[20%] space-y-2'>
      {
diffSpecialities.slice(0,9).map(ele => (
  <li key={ele.name} className='hover:text-red-600' >
      <Link  to={`speciality/${ele.id}`}>{ele.name}</Link>
  </li>
)) 

  }
      </ul>
      <ul  className='md:w-[20%] space-y-2'>
      {
diffSpecialities.slice(9,20).map(ele => (
  <li key={ele.name} className='hover:text-red-600' >
      <Link  to={`speciality/${ele.id}`}>{ele.name}</Link>
  </li>
)) 

  }
      </ul>
    </div>
    <div className='py-[0.5rem] text-center text-[0.8rem]'>
    © Copyright 2023 - River NIMS Hospitals
    </div>
    </Fade>
    </div>
  )
}

export default Footer
