import React from 'react'
import Listing from '../speciality/Listing'
import Listing2 from '../speciality/Listing2'
import cardio from '../../assets/cardio.jpg'
function Anaesthesiology() {
  const procedure1 =[
    "KEY PROCEDURES",
    "Primary PTCA for Acute MI "
,	"Coronary Angioplasty including multi,vessel/complex PTCA Interventional "
     ,        " Cardiology "
,"	Graft Angioplasty "
,	"Fractional flow reserve "
,	" IVUS, Rotablation "
,	"Balloon valvuloplasty like PBMV, PBAV, PBPV "
,	"Pericardiocentesis "
,	"Peripheral angioplasty including renal carotids "
,"	Aortic interventions "
,	"Venous interventions like IVC Filter "
,	"EPS and RF ablation of arrhythmia "
,	"Beating heart surgery" 
,	"Minimally invasive cardiac surgery "

  ]
  const procedure2=[
    ,	"Aneurysm surgery" 
,	"Surgery for peripheral vascular disease "
,	"Pacemaker implantation "
,	"Angioplasty + Stenting"
,	"CT coronary angiography"
,	"Peripheral angiogram and angioplasty (carotid, subclavian, iliac, femoral, renal)"
,	"Radial angiography and angioplasty "
,	"Rotablation "
,	"Bradycardia pacing "
,	"Coronary artery stenting" 
,	"Intravascular ultrasound "
,	"Non-surgical closure of holes in the heart such as Atrial Septal Defect (ASD)" 
  , "Ventricular Septal Defects (VSD), and Patent Ductus Arteriosus (PDA"

  ]
  
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
        <Listing photo={cardio} procedures={procedure1}/>
        </div>
          
          <div  className='md:w-[35%] w-[100%] p-2'>
          
         <Listing2 procedures={procedure2}/>
         
        </div>
      </div> 

      <div className='flex flex-col md:flex-row py-[1rem] justify-center md:space-x-5'>
      <div  className='md:w-[35%] w-[100%] p-2'>
          
          <Listing2 procedures={procedure1}/>
          
         </div>
         <div  className='md:w-[35%] w-[100%] p-2'>
        <Listing photo={cardio} procedures={procedure2}/>
        </div>

      </div>
   </>
  )
}

export default Anaesthesiology
