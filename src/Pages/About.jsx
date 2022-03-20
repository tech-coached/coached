import React from 'react'
import AboutIntro from '../Components/AboutIntro'
import AboutTitle from '../Components/AboutTitle'
import Footer from '../Components/Footer'
import Founders from '../Components/Founders'
import Navbar from '../Components/Navbar'
import ScrollToTop from '../Components/ScrollToTop'

const About = () => {
  return (
    <div>
      <ScrollToTop />
      <Navbar />
      <AboutTitle />
      <AboutIntro />
      <Founders />
      <Footer />
    </div>
  )
}

export default About
