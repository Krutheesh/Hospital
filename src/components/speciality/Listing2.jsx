import React from 'react'

function Listing2({procedures}) {
  return (
    <>
     <ul className='pt-5 pl-5'>
            { procedures&&procedures.map((ele,ind)=> (
              <li key={ind} className=' list-disc'>{ele} </li>
            )
            )
              
            }
            </ul>
      
    </>
  )
}

export default Listing2
