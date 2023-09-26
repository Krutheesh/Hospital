import React from 'react'
import Listing from '../speciality/Listing'
import Listing2 from '../speciality/Listing'
import cardio from '../../assets/cardio.jpg'
function Medical() {
  const procedure1 =[
    	"TECHNOLOGIES & FACILITIES ",
    	"190 series Endoscopy, Colonoscopy "
,	"Diagnostic and therapeutic Endoscopic Retrograde "
,	"Cholangiopancreaticography (ERCP)" 
,	"Diagnostic and therapeutic Flexible Sigmoidoscopy"


  ]
  const procedure2 = [""
    ,	"Endoscopic ultrasound "
,	"Advanced HD Laparoscopy systems "
    ,	"24-hour pH metry "
    ,	"Hydrogen breath test "
    ,	"Diagnostic and therapeutic Endosonography "
    ,	"Manometry "
    ,	"Dedicated Gastro OTs with modular, laminar flow "
    ,	"Suites to perform Colonoscopy & Endoscopy" 
    
    
  ]
  const procedure3 = [
  "KEY PROCEDURES "
,	"Management of Cholangio Carcinoma " 
,	"Management of acute upper and lower GI haemorrhages" 
,	"Removal of polyps from large intestine  "
,"	Stent placement in food pipe, colon, small intestine, bile duct and pancreatic duct "
,	" Management of bile duct and pancreatic duct stones "
,	"Surgical management of necrotising and chronic pancreatitis "

  ]
const procedure4 = [
  '',
  ,	"Surgical management of ulcerative colitis  "
,	"Colorectal, oesophageal & gastric cancer surgery  "
,	"Management of liver trauma"


]
  return (
    <>
    <div className='flex flex-col md:flex-row py-[1rem] justify-center md:space-x-5'>
        
        <div className='md:w-[35%] w-[100%] p-2'>
        River NIMS has a full-fledged Gastroenterology Department that provides cutting-edge Medical and Surgical Gastroenterology services with a team of expert medical and surgical gastroenterologists  <br/>
        At River NIMS we treat GI diseases like colon polyps, GI cancer, liver cirrhosis, peptic ulcer disease, colitis, pancreatitis etc. Our experts also have extensive experience in the successful treatment of Luminal Gastroenterology, particularly IBD, biliary and pancreatic disease.
        </div>
        <div  className='md:w-[35%] w-[100%] p-2'>
          <p>
          Our mission is to become a Centre of Excellence in Gastroenterology that is recognized for the finest medical facilities in endoscopic procedures and advanced laparoscopic surgeries combined with compassionate care. Our specialisations span:
          </p>
        
        <ul className='py-[1rem] list-disc pl-5'>
          <li className=' list-disc'>Medical Gastroenterology </li>
          <li className=' list-disc'>Surgical Gastroenterology </li>
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
          
          <Listing2 procedures={procedure3}/>
          
         </div>
         <div  className='md:w-[35%] w-[100%] p-2'>
        <Listing photo={cardio} procedures={procedure4}/>
        </div>

      </div>
    </>
  )
}

export default Medical
