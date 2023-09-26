import React from 'react'
import Listing from '../speciality/Listing'
import Listing2 from '../speciality/Listing'
import cardio from '../../assets/cardio.jpg'
function Ortho() {
  const procedure1 = [
    "	KEY PROCEDURES"
, "Trauma & Emergency "
, "Total joint replacement "
, "Arthroscopy & Sports Injuries "
," Paediatric orthopaedics "
, "Spine surgeries"


  ]
  return (
    <>
      <div className='flex flex-col md:flex-row py-[1rem] justify-center md:space-x-5'>
        
        <div className='md:w-[35%] w-[100%] p-2'>
        River NIMS specialises in Orthopaedics and offers advanced treatment solutions for the musculoskeletal problems of all age groups.   <br/>
        The comprehensive orthopaedic care is patient-centric, and individualised. Our Orthopaedists have trained at international centres and bring with them the latest and best surgical techniques. 
        </div>
        <div  className='md:w-[35%] w-[100%] p-2'>
        The latest cutting-edge technology, operating rooms, recovery areas and advanced physiotherapy facilities, complete the Orthopaedics Department.
       
      </div>
    </div>

    <div className='flex flex-col md:flex-row py-[1rem] justify-center md:space-x-5'>
        
        <div  className='md:w-[35%] w-[100%] p-2'>
        <Listing photo={cardio} procedures={""}/>
        </div>
          
          <div  className='md:w-[35%] w-[100%] p-2'>
          
         <Listing2 procedures={procedure1}/>
         
        </div>
      </div> 

      
    </>
  )
}

export default Ortho
