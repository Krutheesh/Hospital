import React from 'react'
import Listing from '../speciality/Listing'
import Listing2 from '../speciality/Listing'
import cardio from "../../assets/cardio.jpg"
function Critical() {
  const procedure1 = [
    	"KEY EMERGENCIES HANDLED"
,	"Cardiac emergencies"
,	"Myocardial infarction"
,	

  ]
const procedure2=["","Surgical complications"
,	"Strokes"
  ,	"Poisoning and drug abuse"
,	"Environmental emergencies and water accidents"
,	"Poisoning"
,	"Emergency care for the elderly, handicapped, terminally ill or patients with multi-system failure"
,"	Mass casualties and disaster victims"
,"	Obstetric and gynecological emergencies"
,	"Pediatric emergencies"
,	"Accidents, weapons and burns injuries"

]
const procedure3 = [
  
"SERVICES AVAILABLE 24/7"
,	"Comprehensive emergency medical services "
,	"Ventilators and life support enabled ambulances, with trained emergency medical personnel"
,	"Holter monitoring and blood pressure monitoring"
,	"Life-saving medicines and equipment needed for resuscitation"
,	"State-of-the-art emergency care equipment"
,	"Staff qualified and experienced in emergency medical care (BLS & ACLS)"

]
  return (
    <>
      <div className='flex flex-col md:flex-row py-[1rem] justify-center md:space-x-5'>
        
        <div className='md:w-[35%] w-[100%] p-2'>
        At River NIMS, the highest levels of skill, expertise and infrastructure come to the fore at our Emergency Care centre. <br/>
        Our swift response, and highly specialised care is backed by the unstinted efforts of Cardiologists, Neurologists, Orthopedists, Physicians, Anesthesiologists and well-trained paramedical staff who are available 24/7 to deliver crucial care in critical cases.
        </div>
        <div  className='md:w-[35%] w-[100%] p-2'>
        The dedicated emergency complex is located on the ground floor and has a special entry for emergency cases to ensure minimum response time. Soon we will be getting into innovative research in improved care of critically ill patients.
       
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
          
          <Listing photo={cardio} procedures={''}/>
          
         </div>
         

      </div>
    </>
  )
}

export default Critical
