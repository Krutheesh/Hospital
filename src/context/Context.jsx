import { Context, createContext, useContext } from "react";
import { useState } from "react";
import f1 from '../assets/f1.png'
import cardio from '../assets/cardio.jpg'
import Anaesthesiology from "../components/specialities/Anaesthesiology";
import Cardiology from "../components/specialities/Cardiology";
import Cardiothoracic from '../components/specialities/Cardiothoracic'
import Dermatology from '../components/specialities/Dermatology'
import Diabetology from "../components/specialities/Diabetology";
import Maxillofacial from "../components/specialities/Maxillofacial";
import Medical from "../components/specialities/Medical";
import Nephrology from "../components/specialities/Nephrology";
import Neurology from "../components/specialities/Neurology";
import Oncology from '../components/specialities/Oncology'
import Ortho from "../components/specialities/Ortho";
import Pain from "../components/specialities/Pain";
import Pulmonology from "../components/specialities/Pulmonology";
import Physiotherapy from "../components/specialities/Physiotherapy"
import Radiology from "../components/specialities/Radiology";
import Urology from '../components/specialities/Urology'
import Vascular from "../components/specialities/Vascular";
import Critical from "../components/specialities/Critical";
import Laparoscopic from '../components/specialities/Laparoscopic'
const MyContext = createContext()



export const  ContextProvider = ({children}) => {
  const doctors = [
    {
      id:1,
      photo:f1,
      department:"Cardiology",
      name:"Dr. S. Sai Krishna Reddy",
      designation:'MBBS, MD,DM (Cardiology) (AIIMS, Delhi)',
      role:'Consultant Cardiologist'

    },
    {
      id:2,
      photo:f1,
      department:"Nephrology",
      name:"Dr. S. Sai Krishna Reddy",
      designation:'MBBS, MD,DM (Cardiology) (AIIMS, Delhi)',
      role:'Consultant Cardiologist'

    },
    {
      id:3,
      photo:f1,
      department:"Oncology",
      name:"Dr. S. Sai Krishna Reddy",
      designation:'MBBS, MD,DM (Cardiology) (AIIMS, Delhi)',
      role:'Consultant Cardiologist'

    },
    {
      id:4,
      photo:f1,
      department:"Neurology",
      name:"Dr. S. Sai Krishna Reddy",
      designation:'MBBS, MD,DM (Cardiology) (AIIMS, Delhi)',
      role:'Consultant neurology'

    },
    {
      id:5,
      photo:f1,
      department:"Cardiology",
      name:"Dr. S. Sai  Reddy",
      designation:'MBBS, MD,DM (Cardiology) (AIIMS, Delhi)',
      role:'Consultant Cardiologist'

    },
    {
      id:6,
      photo:f1,
      department:"card",
      name:"Dr. S. Sai Krishna Reddy",
      designation:'MBBS, MD,DM (Cardiology) (AIIMS, Delhi)',
      role:'Consultant Cardiologist'

    },
    {
      id:7,
      photo:f1,
      department:"Cardiology",
      name:"Dr. S. Sai Krishna Reddy",
      designation:'MBBS Delhi)',
      role:'Consultant Cardiologist'

    }

  ]
  const diffSpecialities = [
    {
    id:1,
    name:"Anaesthesiology",
    color:'bg-red-600',
   img:cardio,
    discription:<Anaesthesiology/>

    
  },
  { id:2,
    name:"Critical Care",
    color:'bg-red-600',
    discription: <Critical/>
    
  },
  {
    id:3,
    name:"Cardiology",
    img:cardio,
    discription: <Cardiology/>,
  
    
  },

  {id:4,
    name:"Cardiothoracic Surgery",
    discription: <Cardiothoracic/>,
    
  },
  { id:6,
    name:"Dermatology & Cosmetology",
    discription: <Dermatology/>,
  },
  {
    id:7,
    name:"Medical & Surgical Gastroenterology",
    discription: <Medical/>,
    
  },
  { id:8,
    name:"General & Laparoscopic Surgery",
    discription: <Laparoscopic/>,
  },
  { id:9,
    name:"General Medicine & Diabetology",
    discription: <Diabetology/>,
  },
  { id:10,
    name:"Maxillofacial Surgery",
    discription: <Maxillofacial/>,
  },
  { id:11,
    color:'bg-blue-600',
    name:"Neurology & Neurosurgery",
    discription: <Neurology/>,

    
  },
  { id:12,
    color:'bg-green-600',
    name:"Nephrology",
    discription: <Nephrology/>,
    
  },
  {
    id:13,
    name:"Oncology & Onco Surgery",
    discription: <Oncology/>,
  },
  { id:14,
    color:'bg-gray-600',
    name:"ORTHOPAEDICS ",
    discription: <Ortho/>,
  },
  { id:15,
    name:"Pain Management",
    
  },
  {
    id:16,
    name:"Physiotherapy",
    discription: <Physiotherapy/>,
  },
  {
    id:17,
    name:"Pulmonology",
    discription: <Pulmonology/>,
    
  },
  { 
    id:18,
    color:"bg-orange-600",
    name:"Radiology & Imaging",
    discription: <Radiology/>,
    
  },
  {
    id:19,
    name:"Urology",
    
  },
  {
    id:20,
    name:"Vascular & Endovascular Surgery",
    
  }
]
  const [changeDoctors,setChangeDoctors] = useState(doctors)


  return(
    
    <MyContext.Provider value={{doctors,diffSpecialities, changeDoctors,setChangeDoctors}}>
  {children}
    </MyContext.Provider>
  )
}


export const customUseContext = () => useContext(MyContext)
  
