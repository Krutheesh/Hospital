import React from 'react'
import Listing from '../speciality/Listing'
import Listing2 from '../speciality/Listing'
import cardio from '../../assets/cardio.jpg'
function Nephrology() {
  const procedure1 = [
    	"KEY CONDITIONS TREATED"
    ,	"Diabetic nephropathy"
    ,	"Acute kidney injury"
    ,	"Collagen vascular disease"
    ,	"Chronic kidney disease"
    ,	"All types of Glomerular diseases- Acute glomerulonephritis",
    "Nephrotic syndrome"
    
  ]
  const procedure2 = [
    '',
    ,	"Immunological kidney diseases including SLE, Vasculitis"
,	"Cystic kidney disease"
,	 "Congenital kidney disorders"
,	"Obstructive nephropathy"
,	"Renal stone diseases"
,	"Hypertension"
,	"Reno vascular disease"
,	"Acute & chronic renal failure"
,	"Urinary tract infections"
,	"Hypertensive nephrosclerosis"
,	"Renal tubular disorders"
,	"Childhood (paediatric) kidney diseases"


  ]
  const procedure3 = [
    	"INFRASTRUCTURE"
,	"Dialysis unit"
,	"Hemodialysis"
,	"Peritoneal dialysis – IPD, CAPD, APD, CCPD, DAPD, NIPD"
,	"ICU with Continuous Renal Replacement Therapies (CRRT)"


  ]
  return (
    <>
      <div className='flex flex-col md:flex-row py-[1rem] justify-center md:space-x-5'>
        
        <div className='md:w-[35%] w-[100%] p-2'>
        The Department of Nephrology and Urology at River NIMS provides comprehensive care of the highest standard to patients with kidney disease.  <br/>
        Our team of highly qualified and experienced Nephrologists and Urologists offer treatment services for both adult and paediatric urological conditions.
        
        </div>
        <div  className='md:w-[35%] w-[100%] p-2'>
        Going forward we envision ourselves to the first hospital in Nalgonda district to perform kidney transplants. 
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

export default Nephrology
