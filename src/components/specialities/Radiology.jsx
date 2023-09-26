import React from 'react'
import Listing from '../speciality/Listing'
import Listing2 from '../speciality/Listing'
import cardio from "../../assets/cardio.jpg"
const procedure1 = [
  "TECHNOLOGY & FACILITIES"
,"	16-channel 1.5T MRI"
,	"128-slice C T"
,	"3D & 4D Ultrasound"
,	"Digital X-ray"

]
function Radiology() {
  return (
    <>
      <div  className='w-[70%] mx-auto py-[2rem]'> Our Radiology services are open 24/7 to provide emergency care and routine diagnostic services. Our highly skilled Radiologists works are committed to providing prompt and accurate diagnosis that will result in the best patient outcomes. </div>
      <div className='flex flex-col md:flex-row py-[1rem] justify-center md:space-x-5'>
        
        <div  className='md:w-[35%] w-[100%] p-2'>
        <Listing photo={cardio} procedures={''}/>
        </div>
          
          <div  className='md:w-[35%] w-[100%] p-2'>
          
         <Listing2 procedures={procedure1}/>
         
        </div>
      </div> 

     
    
    </>
  )
}

export default Radiology
