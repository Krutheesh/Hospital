import React from 'react'
import { Fade} from 'react-awesome-reveal'

function ContentImg({photo,content}) {
  content = content.split('\n')
console.log(content)
  return (
    <div>
      <div className=''>
      <Fade>
       

        <div className='flex flex-col md:flex-row-reverse justify-between items-center  overflow-hidden space-y-10 md:space-y-0'>
          <div className='md:w-[45%] flex justify-end   '>
            <img src={photo} alt="" className='  ' />
          </div>
          <div className='md:w-[50%] '>
            {
              content&&content.map((ele,ind) => (
                ele ==='/n'?<br/>:<p key={ind} className='  mx-auto text-center md:text-start '>{ele}</p>
                
              ))
            }
            
          </div>
        </div>
      </Fade>
    </div>
      
    </div>
  )
}

export default ContentImg
