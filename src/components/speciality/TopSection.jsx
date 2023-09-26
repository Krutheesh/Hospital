import React from 'react'
import f1 from '../../assets/f1.png'
import Listing from './Listing'
import Listing2 from './Listing2'
import { customUseContext } from '../../context/Context'
import { useParams,Link } from 'react-router-dom'
import {FaAngleLeft} from 'react-icons/fa6'
import Slotfix from '../Slotfix'
import Footer from '../Footer'
function TopSection({title,photo,description}) {
  const {diffSpecialities} = customUseContext()
  const {id} = useParams()
  console.log(id)
  const speciality = diffSpecialities.filter(ele => ele.id == id)
  console.log(speciality)
  return (
    <section >
      <Slotfix/>
      <span className='absolute top-10 left-7   border-[#284580] shadow-lg bg-white hover:bg-[#284580] rounded-2xl'>
        <Link to='/'>
        <FaAngleLeft className='textColor hover:text-white font-bold p-1 text-[2rem]'/>

        </Link>
      </span>
      <div className='flex flex-col md:flex-row justify-between    '>
        <div className={`md:w-[50%] w-[100%] h-[35vh] flex ${speciality[0].color} justify-center items-center`}>
          <h2 className='text-[2.5rem]  font-semibold text-white uppercase'>{speciality[0].name}</h2>
        </div> 
        <div className='md:w-[50%]  w-[100%]  '>
          <img src={speciality[0].img} alt="cardiology" className=' w-[100vw] md:w-[50vw] h-[35vh] object-cover '/>
        </div>

        
      </div>
      <div className='px-[2rem]'>
      {speciality[0]?.discription}
      </div>

      <Footer/>
    </section>
  )
}

export default TopSection
