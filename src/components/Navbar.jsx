import React,{useState} from 'react'
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom'
import { customUseContext } from '../context/Context'

function Navbar() {
  const {diffSpecialities} = customUseContext()
  const [services, setServices] = useState(false)
  const [special, setSpecial] = useState(false)
  const [ham, setHam]  = useState(false)
  return (
    
    
<div className="w-full absolute  shadow md:relative  text-gray-700 bg-white lg:px-[4rem]  top-0 z-50 ">
  <div className="flex flex-col max-w-screen-xl px-1  mx-auto md:items-center md:justify-between md:flex-row md:px-6 lg:px-8">
    <div className="py-4  md:w-[20%] w-[100%] md:hidden lg:flex flex flex-row items-center justify-between">
 
 <div className='w-[25%] flex justify-center   lg:w-[80%]'>
 <img src={logo} className='w-full ' alt="logo" />
 </div>
 
      <div>
      <button className="md:hidden  focus:outline-none focus:shadow-outline" onClick={() => {setHam(!ham)}}>
        <svg fill="currentColor" viewBox="0 0 20 20" className={`${ham ? 'hidden':'block'} w-10 h-11 `} >
          
          <path x-show="!open" fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z" clip-rule="evenodd"></path>
        </svg>
        <svg  fill="currentColor" viewBox="0 0 20 20" className={`${ham ? 'block':'hidden'} w-10 h-10 `}>
        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path>

        </svg>
      </button>
      </div>
    </div>

    <div>
    <div className='hidden md:flex md:justify-between lg:justify-end items-center border-b border-gray-400 py-[1rem] mx-1'>
    <div className='w-[25%] flex justify-center  md:w-[20%]  lg:hidden'>
 <img src={logo} className='w-full ' alt="logo" />
 </div >
        <div className=''>
        <div className='flex '>
          <img src="" alt="clock" />
          <p className='px-5'>OP timings</p>
          </div>
            
            <p className='font-semibold'>9am to 2pm - 5pm to 9pm</p>
          
        </div>
        <div className='flex'>
          <img src="" alt="appointment" />
          <img src="" alt="ambulence" />
        </div>
        
      </div>

     
        <nav    className={`${ham ? 'block':'hidden'} py-[1rem] md:pt-0   md:pb-[0.5rem] md:relative textColor  w-[90vw]  font-bold top-14 left-0 px-[1rem] md:top-0  md:px-0  md:w-auto md:h-auto  flex md:flex flex-col flex-grow mt-[1rem] pb-4   md:justify-end md:flex-row`}>
      
      <Link to='/' className="mx-1 my-2 p-1 border-white border-b-2 lg:text-[1rem]  hover:text-red-600 md:hover:border-red-600 md:hover:border-b-2 text-sm       md:mt-0 " onClick={() => setHam(!ham)} >HOME</Link>
      <Link to='/about' className="mx-1 my-2 p-1 border-white border-b-2 lg:text-[1rem] hover:text-red-600 md:hover:border-red-600 md:hover:border-b-2 text-sm  bg-transparent     md:mt-0 md:ml-4 " >ABOUT</Link>
      <div className='hidden md:block mx-1  pt-[1px]'>
        <li className="flex group flex-row items-center  w-full   border-white border-b-2 md:hover:border-b-2 text-sm  text-left bg-transparent     md:w-auto md:inline md:mt-0 md:ml-4 ">
          <span className='hover:text-red-600 lg:text-[1rem]'>SPECIALITIES</span>
          <svg fill="currentColor" viewBox="0 0 20 20"  className="inline w-4 h-4 mt-1 ml-1 transition-transform duration-200 transform md:-mt-1"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
          <div class="group-hover:block dropdown-menu absolute right-0 left-0 hidden h-auto">

<div className='flex relative text-semibold shadow py-[2rem]  justify-around uppercase bg-white z-50'>
<ul class="top-0 flex flex-col  bg-white space-y-3 md:w-[35%] px-6 ">
  {
diffSpecialities.slice(0,10).map(ele => (
  <li key={ele.name} className='hover:text-red-600 '>
      <Link to={`speciality/${ele.id}`}>{ele.name}</Link>
  </li>
)) 

  }
    
    
</ul>

<ul class="top-0 flex flex-col  bg-white space-y-3 md:w-[40%]  px-6 ">
  {
diffSpecialities.slice(10,20).map(ele => (
  <li key={ele.name} className='hover:text-red-600' >
      <Link  to={`speciality/${ele.id}`}>{ele.name}</Link>
  </li>
)) 

  }
    
    
</ul>
</div>
</div>
       
        </li>
        
      
      </div>

      <div className='block md:hidden'>
        <button onClick={
          () => {
            setServices(!services);
             setSpecial(false)}
             } className="flex flex-row items-center w-full mx-1 my-2 p-1 border-white border-b-2 hover:text-red-600 md:hover:border-red-600 md:hover:border-b-2 text-sm  text-left bg-transparent     md:w-auto md:inline md:mt-0 md:ml-4 ">
          <span className='uppercase'>SPecialities</span>
          <svg fill="currentColor" viewBox="0 0 20 20"  className="inline w-4 h-4 mt-1 ml-1 transition-transform duration-200 transform md:-mt-1"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
        </button>
        {
          services?<div className=" w-full mt-2  shadow-lg ">
          <div className=" py-2 flex flex-col items-start bg-white  shadow ">
            {
              diffSpecialities.map(ele => (
                <li key={ele.name} className='hover:text-red-600 list-none px-2'>
                                <Link to={`speciality/${ele.id}`} className="block px-2 my-2 p-1 border-white border-b-2 hover:text-red-600 md:hover:border-red-600 md:hover:border-b-2 text-sm  bg-transparent    md:mt-0 " >{ele.name}</Link>

                </li>
              ))

            }

          </div>
        </div>:<div/>
        }
      
      </div> 
      {/* <div className="relative">
        <button onClick={
          () => {
            setServices(!services);
             setSpecial(false)}
             } className="flex flex-row items-center w-full mx-1 my-2 p-1 border-white border-b-2 hover:text-red-600 md:hover:border-red-600 md:hover:border-b-2 text-sm  text-left bg-transparent     md:w-auto md:inline md:mt-0 md:ml-4 ">
          <span>SERVICES</span>
          <svg fill="currentColor" viewBox="0 0 20 20"  className="inline w-4 h-4 mt-1 ml-1 transition-transform duration-200 transform md:-mt-1"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
        </button>
        {
          services?<div className="absolute right-0 w-full mt-2 origin-top-right z-50  shadow-lg md:w-40">
          <div className=" py-2 flex flex-col items-center  bg-white  shadow ">
            <Link className="block px-2 my-2 p-1 border-white border-b-2 hover:text-red-600 md:hover:border-red-600 md:hover:border-b-2 text-sm  bg-transparent    md:mt-0 " >Link #1</Link>
            <Link className="block px-2 my-2 p-1 border-white border-b-2 hover:text-red-600 md:hover:border-red-600 md:hover:border-b-2 text-sm  bg-transparent    md:mt-0 " >Link #2</Link>
            <Link className="block px-2  my-2 p-1 border-white border-b-2 hover:text-red-600 md:hover:border-red-600 md:hover:border-b-2 text-sm  bg-transparent    md:mt-0 " >Link #3</Link>
          </div>
        </div>:<div/>
        }
      
      </div>  */}
      <Link onClick={()=> setHam(!ham)} to='/doctors' className="mx-1 my-2 p-1 lg:text-[1rem] border-white border-b-2 hover:text-red-600 md:hover:border-red-600 md:hover:border-b-2 text-sm  bg-transparent     md:mt-0 md:ml-4 " >FIND A DOCTOR </Link>
      <Link  onClick={()=> setHam(!ham)} className="mx-1 my-2 p-1 lg:text-[1rem] border-white border-b-2 hover:text-red-600 md:hover:border-red-600 md:hover:border-b-2 text-sm  bg-transparent     md:mt-0 md:ml-4 " >CAREERS</Link>
      <Link  onClick={()=> setHam(!ham)} to='/videos' className="mx-1 my-2 p-1 lg:text-[1rem] border-white border-b-2 hover:text-red-600 md:hover:border-red-600 md:hover:border-b-2 text-sm  bg-transparent     md:mt-0 md:ml-4 " >VIDEOS</Link>
      <Link onClick={()=> setHam(!ham)} to='/contact' className="mx-1 my-2 p-1 lg:text-[1rem] border-white border-b-2 hover:text-red-600 md:hover:border-red-600 md:hover:border-b-2 text-sm  bg-transparent     md:mt-0 md:ml-4 " >CONTACT US</Link>


    </nav> 
     
    </div>
    
  </div>
</div>
    
  )
}

export default Navbar
