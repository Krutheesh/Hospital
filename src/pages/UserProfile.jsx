import React from 'react';
import f1 from '../assets/f1.png'
import { useParams } from 'react-router-dom';

import { customUseContext } from '../context/Context';
import Slotfix from '../components/Slotfix';
function UserProfile() {

  const {id } = useParams()
  console.log(id)
  const {doctors} = customUseContext()
  const doctor = doctors.filter((ele) => ele.id == id.slice(1))
console.log(doctor)
  console.log(doctors)
  return (
    <section className="bg-white md:px-[8rem] ">
      <Slotfix/>
    <div className="grid max-w-screen-xl px-4 py-8 mx-auto md:space-x-10 lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
    <div className=" lg:mt-0 lg:col-span-3 mx-auto lg:flex">
            <img src={f1} alt="doctor"/>
        </div> 
        
        <div className="mr-auto place-self-center lg:col-span-8 w-[63%]  px-4  pt-[2rem] mx-auto ">
            <h1 className="max-w-2xl mb-4 text-2xl font-semibold tracking-tight leading-none text-red-600 ">{doctor[0].name}</h1>
            <p className="max-w-2xl mb-6 font-light  lg:mb-8 md:text-lg lg:text-xl ">{doctor[0].designation}
              &nbsp; {doctor[0].role}
</p>

            
        </div>
                       
    </div>
</section>
  );
}

export default UserProfile;
