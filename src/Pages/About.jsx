import React, { Suspense } from 'react'
import Loader from '../Components/Loader'
import ScrollToTop from '../Components/ScrollToTop'
const AboutTitle = React.lazy(() => import('../Components/AboutTitle'))
const AboutIntro = React.lazy(() => import('../Components/AboutIntro'))
const Navbar = React.lazy(() => import('../Components/Navbar'))
const Founders = React.lazy(() => import('../Components/Founders'))
const Footer = React.lazy(() => import('../Components/Footer'))

const About = () => {
  return (
    <div>
      <Suspense fallback={<Loader />}>
        <ScrollToTop />
        <Navbar />
        <AboutTitle />
        <AboutIntro />
{/*         <Founders /> */}
        <Footer />
      </Suspense>
    </div>
  )
}

export default About
