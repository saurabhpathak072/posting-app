import React from 'react'

import './Main.css'
import { Container } from 'react-bootstrap'
import AboutMe from '../../Container/AboutMe/AboutMe'
// import HeroBanner from '../../Container/HeroBanner/HeroBanner'

const Main = () => {
  return (
    <div className='Main'>
     
        {/* <HeroBanner/> */}
        <Container>
          <div className='py-3'>

          <AboutMe/>
          </div>
        </Container>
      
    </div>
  )
}

export default Main