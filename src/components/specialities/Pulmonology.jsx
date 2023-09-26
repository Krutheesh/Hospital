import React from 'react'
import Listing from '../speciality/Listing'
import Listing2 from '../speciality/Listing'
import cardio  from '../../assets/cardio.jpg'
function Pulmonology() {
  const procedure1 = [
    "KEY TREATMENT AREAS"
,	"Pneumonia"
,	"Tuberculosis"
,	"Bronchial Asthma"


  ]
  const procedure2=[
    '',
    ,	"Chronic Obstructive Pulmonary Disease (COPD)"
,"	Acute Respiratory Distress Syndrome (ARDS)"
,	"Pulmonary Hypertension (PH)"
,	"Sleep Disorders"
,	"Pulmonary Fibrosis"
,	"Lung Cancer"
,	"Interstitial Lung Diseases"
  ]
  return (
    <>
      <div className='flex flex-col md:flex-row py-[1rem] justify-center md:space-x-5'>
        
        <div className='md:w-[35%] w-[100%] p-2'>
        River NIMS is well equipped to prevent and manage pulmonary disease through the integration of innovative patient care, bronchoscopic procedures and sleep studies.  <br/>
        The full-fledged Pulmonology Department treats all kinds of respiratory tract diseases by leveraging the expertise of eminent chest specialists who are internationally trained and have experience in dealing with critical and complex pulmonary conditions
        </div>
        <div  className='md:w-[35%] w-[100%] p-2'>
        . We rely on the latest technology to provide efficacy in treatment and are equipped with Imaging diagnostics, a Bronchoscopy unit, and Pulmonary Function Lab.
       
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

      
    </>
  )
}

export default Pulmonology
