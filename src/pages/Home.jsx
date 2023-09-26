import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ContentImg from "../components/ContentImg";
import hospital from "../assets/hospital.png";
import handshake from '../assets/handshake.jpg'
import cardiology from '../assets/cardiology.png'
import Swiper from '../components/Swiper'
import chairman from '../assets/chairman.png'
import HeroSwiper from '../components/HeroSwiper'
import {BsFillAlarmFill} from 'react-icons/bs'
import {MdCall} from 'react-icons/md'
import {GrEmergency} from 'react-icons/gr'
import {Fade} from 'react-awesome-reveal'
import '../App.css'
import BookSlot from "./BookSlot";
import Slotfix from "../components/Slotfix";
import { Link } from "react-router-dom";
function Home() {
  const swiper = [
    {
      image:chairman,
      name:"Dr. N. Ravinder Reddy",
    designation:"MBBS, MD (General Medicine)",
    role:"Consultant General Physician"
    },
    {
      image:chairman,
      name:"Dr. N. Ravinder Reddy",
    designation:"MBBS, MD (General Medicine)",
    role:"Consultant General Physician"
    },
    {
      image:chairman,
      name:"Dr. N. Ravinder Reddy",
    designation:"MBBS, MD (General Medicine)",
    role:"Consultant General Physician"
    },
    {
      image:chairman,
      name:"Dr. N. Ravinder Reddy",
    designation:"MBBS, MD (General Medicine)",
    role:"Consultant General Physician"
    },{
      image:chairman,
      name:"Dr. N. Ravinder Reddy",
    designation:"MBBS, MD (General Medicine)",
    role:"Consultant General Physician"
    },
    {
      image:chairman,
      name:"Dr. N. Ravinder Reddy",
    designation:"MBBS, MD (General Medicine)",
    role:"Consultant General Physician"
    },
    {
      image:chairman,
      name:"Dr. S. Sai Krishna Reddy",
    designation:"MBBS, MD,DM (Cardiology) (AIIMS, Delhi)",
    role:"Consultant Cardiologist"
    },{
      image:chairman,
      name:"Dr. N. Ravinder Reddy",
    designation:"MBBS, MD (General Medicine)",
    role:"Consultant General Physician"
    },{
      image:chairman,
      name:"Dr. N. Ravinder Reddy",
    designation:"MBBS, MD (General Medicine)",
    role:"Consultant General Physician"
    },
    {
      image:chairman,
      name:"Dr. N. Ravinder Reddy",
    designation:"MBBS, MD (General Medicine)",
    role:"Consultant General Physician"
    },
    {
      image:chairman,
      name:"Dr. N. Ravinder Reddy",
    designation:"MBBS, MD (General Medicine)",
    role:"Consultant General Physician"
    }
  ]
  const specialities = [
    {
      name:"cardiology",
      photo:hospital
    }
  ]
  const diffSpecialities = [
    {
    name:"Anaesthesiology",
    photo:cardiology
  },
  {
    name:"Critical Care",
    photo:cardiology
  },
  {
    name:"Cardiology",
    photo:cardiology
  },

  {
    name:"Cardiothoracic Surgery",
    photo:cardiology
  },
  {
    name:"Dermatology & Cosmetology",
    photo:cardiology
  },
  {
    name:"Medical & Surgical Gastroenterology",
    photo:cardiology
  },
  {
    name:"General & Laparoscopic Surgery",
    photo:cardiology
  },
  {
    name:"General Medicine & Diabetology",
    photo:cardiology
  },
  {
    name:"Maxillofacial Surgery",
    photo:cardiology
  },
  {
    name:"Neurology & Neurosurgery",
    photo:cardiology
  },
  {
    name:"Nephrology",
    photo:cardiology
  },
  {
    name:"Oncology & Onco Surgery",
    photo:cardiology
  },
  {
    name:"Ortho, Poly Trauma & Joint Replacement Surgery Oncology & Onco Surgery ",
    photo:cardiology
  },
  {
    name:"Pain Management",
    photo:cardiology
  },
  {
    name:"Physiotherapy",
    photo:cardiology
  },
  {
    name:"Pulmonology",
    photo:cardiology
  },
  {
    name:"Radiology & Imaging",
    photo:cardiology
  },
  {
    name:"Urology",
    photo:cardiology
  },
  {
    name:"Vascular & Endovascular Surgery",
    photo:cardiology
  },
  
  





]
const carousalImg =[hospital,handshake,cardiology]
  let contentHospital =
    "River NIMS has been established with the intent to set up a world-class medical institution that revolutionises medical care in Nalgonda and transforms the lives of people in the community. \n As the region's first tertiary 100-bed hospital, River NIMS ispoised to raise standards of healthcare with its expertise,state-of-the-art infrastructure, advanced technology, team ofhighly qualified and experienced specialists, range of core specialities, preventive healthcare services, 24/7 emergencycare, reliable diagnostic services, and accreditation from national boards.";
  return (
    <div>
     
      
     
     <div className="mt-[7rem] md:mt-0">
      <Fade>
      <HeroSwiper carousalImg={carousalImg}/>
      </Fade>
     </div>

<div  className="space-y-[5rem] px-[2rem]  ">
<div className="flex md:flex md:flex-row flex-col items-center space-y-5 md:space-y-0 justify-between lg:px-[6rem] text-center pt-[4rem] text-[0.9rem] leading-7">
        
        <div className="mainColor text-white md:w-[30%] w-[100%] p-[2rem] md:p-[1rem] lg:p-[2rem]">
        <Fade><div className="py-1"><BsFillAlarmFill className="mx-auto text-[2rem]"/></div>
         <p className="font-semibold">Working Hours</p>
          <div  className="flex justify-between items-center border-sky-600 border-b-2 py-2 " >
            <span>Monday-Friday</span>
            <span>00:00-00:00</span>
          </div>
          <div  className="flex justify-between items-center border-sky-600 border-b-2">
            <span>Saturday</span>
            <span>00:00-00:00</span>
          </div>
          <div  className="flex justify-between items-center border-sky-600 border-b-2">
            <span>sunday</span>
            <span>00:00-00:00</span>
          </div>
          </Fade> 
         </div>
         
         
         <div className="bg-red-600 text-white md:w-[30%] w-[100%]  p-[2rem] md:p-[1rem] lg:p-[2rem]">
         <Fade>
         <div className="py-1"><MdCall className="mx-auto text-[2rem]"/></div>
          <p className="font-semibold py-1">Appointment</p>
          <p>To book an appointment call:</p>
          <p>9121212541/ 42 /43</p>
          <Link to ='/slotbook'>
          <button className="bg-red-700 px-2 py-1">
            Book an appointment
          </button>
          </Link>
          </Fade>
         </div>
         
         <div className="mainColor text-white md:w-[30%] w-[100%]  p-[2rem] md:p-[1rem] lg:p-[2rem]" >
         <Fade><div className="py-1"><GrEmergency className="mx-auto text-[2rem]"/></div>
  
          <p className="font-semibold">Emergency</p>
          <div>
            <div className="font-bold italic py-2 text-[1.6rem]">
              <h2 >24*7</h2>
              <p>SERVICES</p>
            </div>
  
          </div>
          <p>9121212541 / 42 /43</p>
          </Fade>
         </div>
         
        </div>
         
          
       
  
        <div className="lg:px-[6rem]   ">
          
          <h3 className="text-red-600 font-semibold"><Fade> WELCOME TO </Fade></h3>
          <p className=" text-[1.6rem] font-semibold pb-2 "><Fade>NALGONDA’S FIRST TERTIARY HOSPITAL </Fade></p>
          <ContentImg photo={hospital} content={contentHospital} />
         
        </div>
</div>

<div className='relative flex justify-start items-center my-[5rem]'>
      <img src={handshake} alt="handshake" className='w-[100vw] h-[37vh] object-cover  ' />
      <p className='font-semibold text-[1.6rem] z-50 text-white text-center absolute w-full md:px-[10rem]'> Lorem, ipsum dolor sit Lorem ipsum dolor sit amet. amet consectetur adipisicing elit. Sit, corporis.</p>
      <div class="absolute inset-0 mainColor opacity-80"></div>
     </div>

     <div className="space-y-[5rem] px-[2rem]  ">
      
      
<div className="md:px-[4rem] ">
<div className="text-center md:px-[8rem] ">
<Fade>
      <h2 className="textColor font-semibold text-[1.6rem] py-5">THE ENTIRE SPECTRUM OF CORE SPECIALTIES</h2>
      <p >River NIMS offers multi-super speciality services that address every healthcare concern. Starting from diagnostics
and consultations to surgical interventions and post-operative care in an array of specialty areas, River NIMS is the
ultimate destination for healthcare and healing, in its region.</p>
</Fade>
     </div>

     <div className="grid grid-cols-3 md:grid-cols-5 pt-[2rem] gap-2 text-[0.8rem] ">
      {
        diffSpecialities&&diffSpecialities.map((ele,ind) => (
          <div key={ind} className=" flex flex-col items-center">
           
            <div className="md:shadow flex justify-center w-[8rem] py-[1rem] ">
              <img src={ele.photo} alt="" className="h-[3rem] w-[3rem]" />
            </div>
            <p  className="w-[80%] font-semibold  truncate removeTruncate  py-2 text-center">{ele.name}</p>
           
            </div>
        ))
      }
     </div>
</div>
     

  {/* our specialists */}
  <div className="md:px-[6rem] ">
    <div className="text-center ">
      <Fade>
      <h2 className="textColor font-semibold text-[1.6rem] text-center " >OUR MEDICAL SPECIALISTS</h2>
      <p className="md:w-[60%] mx-auto">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
It is simply dummy text of the printing and typesetting industry.</p>
</Fade>
    </div>
    <div >
      <Swiper swiper={swiper}/>

    </div>
  </div>
      
    </div>
   
    
    </div>
    
  );
}

export default Home;
