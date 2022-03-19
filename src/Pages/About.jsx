import React from 'react'
import AboutIntro from '../Components/AboutIntro'
import AboutTitle from '../Components/AboutTitle'
import Footer from '../Components/Footer'
import Founders from '../Components/Founders'
import Navbar from '../Components/Navbar'

const About = () => {
  return (
    <div>
      <Navbar />
      <AboutTitle />
      <AboutIntro />
      <Founders />
      <Footer />
    </div>
  )
}

export default About
