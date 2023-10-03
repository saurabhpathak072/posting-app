import React from 'react'
import './AboutMe.css'
import { PROFILE_DATA } from '../../Resources/data'

const AboutMe = () => {
  return (
    <div>
     <h3>About Me</h3> 
     <hr/>
     {PROFILE_DATA.about_me}
     <div className='d-flex justify-content-around mt-4'>
      {PROFILE_DATA.skills.map((skill,index)=>{
       return <span className='aboutme_skill' key={index}>{skill}</span>
      })}
     </div>
      </div>
  )
}

export default AboutMe