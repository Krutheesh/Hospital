import React from 'react'
import Listing from '../speciality/Listing'
import Listing2 from '../speciality/Listing'
import cardio from "../../assets/cardio.jpg"
function Neurology() {
  const procedure1=[
  "KEY CONDITIONS TREATED "
, "Stroke "
, "Dementia "
, "Epilepsy "
, "Parkinsonism "


  ]
  const procedure2 =[
    "",
    "Amyotrophic Lateral sclerosis (ALS) "
," Multiple sclerosis "
, "Alzheimer's Disease "
, "Tourette's Syndrome "
, "Neuromuscular diseases "
, "Congenital spine disorders "

  ]
  const procedure3 = [
    "	TECHNOLOGY & FACILITIES "
, "Expertise in stroke management in the golden hour (thrombolysis-clotlysis)" 
, "Experience in epilepsy management, combined heart attack, brain attack (stroke) and neuralgias "
, "Round-the-clock trauma care services, dedicated ICUs "
," Management of all kinds of tumours and spine disorders, and haemorrhagic strokes "
, "Expert combined surgeries for carotid and coronary arteries "
, "State-of-the-art EEG and ENMG lab "
, "24/7 availability of CT scan and extended MRI scan "
, "OT equipped with operating microscope, high speed drills, C-arm and micro instruments"

  ]
  return (
    <>
    <div className='flex flex-col md:flex-row py-[1rem] justify-center md:space-x-5'>
        
        <div className='md:w-[35%] w-[100%] p-2'>
        River NIMS Neurosurgery Department has an integrated team of neurologists, neurosurgeons, neuroanesthetists, neuro physicians and intensivists along with rehabilitation specialists. . <br/>
        The expert team provides the best care to treat neurological disorders with advanced radiological imaging techniques, combined with emergency and elective neurosurgeries. The neurologists and neurosurgeons are experts at high-end surgical treatments using minimally invasive techniques that help decrease the mortality and morbidity associated with surgery.
        </div>
        <div  className='md:w-[35%] w-[100%] p-2'>
        State-of-the-art infrastructure and HEPA filtered Operation Theatres to minimize post-operative infections, are the highlights of the Department. River NIMS will soon be setting up advanced facilities including a world class Brain Stroke Unit and providing leadership that shapes the future of Neurology in the District.
       
      </div>
    </div>
    <div className='flex flex-col md:flex-row py-[1rem] justify-center md:space-x-5'>
        
        <div  className='md:w-[35%] w-[100%] p-2'>
        <Listing photo={cardio} procedures={procedure1}/>
        </div>
          
          <div  className='md:w-[35%] w-[100%] p-2'>
          
         <Listing2 procedures={procedure2}/>
         
        </div>
      </div> 

      <div className='flex flex-col md:flex-row py-[1rem] justify-center md:space-x-5'>
      <div  className='md:w-[35%] w-[100%] p-2'>
          
          <Listing2 procedures={procedure3}/>
          
         </div>
         <div  className='md:w-[35%] w-[100%] p-2'>
        <Listing photo={cardio} procedures={""}/>
        </div>

      </div>
    </>
  )
}

export default Neurology
