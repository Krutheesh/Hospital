import React from 'react'
import "../App.css"
import { Link } from 'react-router-dom'
import { Fade } from "react-awesome-reveal";
import bed from '../assets/bed.jpg'
import hospital from '../assets/hospital.png'
import ContentImg from '../components/ContentImg';
import chairman from '../assets/chairman.png'
import f1 from '../assets/f1.png'
import Slotfix from '../components/Slotfix';
import Footer from '../components/Footer';
function About() {
  const contentHospital = "River NIMS is founded by expert medical professionals who believe that world-class medical care needs to be accessible and affordable to all especially in non-metro cities. Backed by this conviction they established River NIMS as the first tertiary hospital in Nalgonda. The Founders who are experts in their respective specialisations bring to the table wealth of experience, professionalism and, above all, deep commitment to ensuring good health for all. As a result, River NIMS delivers best-inclass treatments and healthcare services in its multi-speciality areas. Each Department offers treatment backed by the highest expertise, advanced technology, and facilities to ensure that patients receive high-quality treatment and care. River NIMS is a 100-bed facility that meets the needs of patients with its team of medical professionals, nurses, allied health professionals, support staff, and palliative care specialists who strive relentlessly to provide modern healthcare services."
 const chairmanMessage = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
 const founders = [
  {
    image:f1,
    name:"Dr. N. Ravinder Reddy",
    designation:"MBBS, MD (General Medicine)",
    role:"Consultant General Physician"

  },
  {
    image:f1,
    name:"Dr. S. Sai Krishna Reddy",
    designation:"MBBS, MD, DM (Neurology)(MAMC, GB Pant Hospital, Delhi)",
    role:"Consultant Cardiologist"

  },
  {
    image:f1,
    name:"Dr. Rajesh Reddy Pasham",
    designation:"MBBS, MD, DM (Neurology)(MAMC, GB Pant Hospital, Delhi)",
    role:"Consultant Neurologist"

  }

 ]
  return (
<div>

<Slotfix/>
<div className='space-y-[4rem]'>
      
      <Fade>
      <div className='flex text-white md:py-[2rem] py-[1rem] md:px-[6rem] px-[2rem] font-semibold justify-between items-center mainColor'>
      <Fade>
      
      <span className='md:text-[2rem] text-[1.6rem] '>ABOUT US</span>
      <Link to='/' ><span className=' hover:border-b-2' >
        Home</span></Link> 
        </Fade>

      </div>
      </Fade>
      {/* -----------hospital and its content----------- */}
      <div className='md:px-[6rem] px-[2rem]'>
      <ContentImg  photo={hospital} content={contentHospital}/>

      </div>
  {/* chairman message */}
  <Fade>
  <div className='mainColor text-white md:px-[6rem] px-[2rem] py-[2rem]'>
   
    
   <div className=''>
   <Fade>
    

     <div className='flex flex-col md:flex-row-reverse justify-between items-center   overflow-hidden space-y-10 md:space-y-0'>
       <div className='md:w-[20%] flex justify-end   '>
         <img src={chairman} alt="" className='  ' />
       </div>
       <div className='md:w-[80%] '>
       <h2 className='py-[1rem]  text-[1.5rem] font-semibold  md:text-start text-center'>CHAIRMAN MESSAGE</h2>
         <p className='  mx-auto  text-center md:text-start font-semibold'>{chairmanMessage}</p>
       </div>
     </div>
   </Fade>
 </div>
   
 
</div>
  </Fade>


{/* vision, mission and values */}
<Fade>
<div className='md:px-[6rem] px-[2rem] space-y-5 md:space-y-0'>
  <div className='w-[70%]  mx-auto text-center space-y-[1rem]'>

    <h2 className='textColor text-[1.6rem] font-semibold  '> STRONG VISION, MISSION AND VALUES</h2>
    <p>The dedicated management, medical professionals and support staff at River NIMS are led
by strong Vision, Mission and Values that reflect the hospital's deep commitment</p>
  </div>

  <div className='flex flex-col md:flex-row justify-between items-center space-y-[2rem]'>
    <div className='md:w-[20%]'>
      <h3 className='font-semibold text-[1.6rem] py-2'>VISION</h3>
      <p>To be recognized as a
Centre of Excellence in
Healthcare for advanced
treatments, with
unparalleled reputation
for Service Quality, that is
accessible to all.</p>
    </div>
    <div className='md:w-[30%]' >
      <img src={hospital} alt="" className='w-full' />
    </div>
    <div className='md:w-[20%]'>
      <h3 className='font-semibold text-[1.6rem] py-2'>MISSION</h3>
      <p>Providing Patient-Centric
care with Excellence in
Quality, Accessibility and
Affordability.</p>
    </div>
  </div>

  <div className='mx-auto md:w-[50%] pt-[2rem]'>
    <h3 className='font-semibold text-[1.6rem] text-red-600 py-2'>VALUES</h3>
    <p> <span className='text-red-600'>Accountability -</span>
    we hold ourselves responsible
for the well-being and welfare of patients
through their treatment with us, and even after.
</p>
<p> <span className='text-red-600'>Compassion -</span>
    we hold ourselves responsible
for the well-being and welfare of patients
through their treatment with us, and even after.
</p>
<p> <span className='text-red-600'>Integrity -</span>
we are guided by strong ethics and
uphold the highest levels of honesty and
transparency in everything we do.
</p>
<p> <span className='text-red-600'>Respect -</span>
we value life and safeguard it by
always delivering the best level of healthcare.
</p>


  </div>
</div>

</Fade>

 {/* meet founders */}
<Fade>
<div className='px-[6rem]'>
<h2 className='py-[2rem]  text-[1.5rem] font-semibold  md:text-start text-center textColor'>MEET FOUNDERS</h2>
<div className='flex flex-col md:flex-row md:justify-between items-center'>
  {
founders && founders.map( (ele,index) => (
<div className=' w-[70%] md:w-[20%] object-cover py-5  '>
    <div>
      <img src={ele.image} className='w-[90%]' alt="founder" />
    </div>
    <div className='py-[0.7rem] text-[0.7rem]  md:text-[0.7rem] md:w-[90%]  md:p-1 '>
      <p className='text-red-600 font-semibold'>{ele.name}</p>
      <p className=''>{ele.designation}</p>
      <p>{ele.role}</p>
      
    </div>
   </div>
)

)
  }
   
</div>
</div>

</Fade>


      
    </div>
    <Footer/>
</div>
    
  )
}

export default About