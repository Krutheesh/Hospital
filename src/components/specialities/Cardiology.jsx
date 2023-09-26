import React from 'react'
import Listing from '../speciality/Listing'
import Listing2 from '../speciality/Listing'
function Cardiology() {
  return (
    <>
    <div className='flex flex-col md:flex-row py-[1rem] justify-center md:space-x-5'>
        
        <div className='md:w-[35%] w-[100%] p-2'>
        At River NIMS, our full-fledged Cardiac Sciences facility
    offers the expertise of internationally trained cardiologists,
    excellent paramedical staff, technicians, and state-of-theart
    equipment. <br/>
    The Cardiology team is ever ready to take on the
    challenges of virtually any type of heart surgery and
    cardiac disease treatment. Our intent is to excel in
    Interventional Cardiology and be the first to perform Open
    Heart Surgery in Nalgonda District. We believe heart
        </div>
        <div  className='md:w-[35%] w-[100%] p-2'>
        <p>
        disease can be prevented at an early stage and are experts
    are always available to advice patients on tailor-made
    plans for heart health management. <br/>
    Our expertise spans a variety of cardiac treatments and
    interventions up to the most complex procedures:
        </p>
        <ul className='py-[1rem] list-disc pl-5'>
          <li className=' list-disc'>Interventional Cardiology</li>
          <li className=' list-disc'>Cardiothoracic Surgery</li>
        </ul>
       
      </div>
    </div>
    
    <div className='flex flex-col md:flex-row py-[1rem] justify-center md:space-x-5'>
        
        <div  className='md:w-[35%] w-[100%] p-2'>
        <Listing photo={photo} procedures={procedures}/>
        </div>
          
          <div  className='md:w-[35%] w-[100%] p-2'>
          
         <Listing2 procedures={procedures}/>
         
        </div>
      </div> 

      <div className='flex flex-col md:flex-row py-[1rem] justify-center md:space-x-5'>
      <div  className='md:w-[35%] w-[100%] p-2'>
          
          <Listing2 procedures={procedures}/>
          
         </div>
         <div  className='md:w-[35%] w-[100%] p-2'>
        <Listing photo={photo} procedures={procedures}/>
        </div>

      </div>
      </>
  )
}

export default Cardiology

