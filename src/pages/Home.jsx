import React from 'react'
import Hero from '../components/Hero'
import Strip from '../components/Strip'
import Speciality from '../components/Speciality'
import AboutUs from '../components/AboutUs'

function Home() {
  return (
    <div className='text-color-primary'>
      <Hero/>
      <Strip/>
      <Speciality/>
      <AboutUs/>
    </div>
  )
}

export default Home