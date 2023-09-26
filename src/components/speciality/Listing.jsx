import React from 'react'

function Listing({photo,procedures}) {
  
  return (
    
      <>
            <h2 className='font-semibold textColor text-[1.6rem] uppercase pb-[1rem]'>{procedures[0]}</h2>
            <div>
            <img src={photo} alt="" className=' w-[100%] p-1' />
            </div>
            <ul className=' pl-5'>
            { procedures&&procedures.slice(1).map((ele,ind)=> (
              <li key={ind} className=' list-disc'>{ele} </li>
            )
            )
              
            }
            </ul>
            
          </>
    
  )
}

export default Listing
