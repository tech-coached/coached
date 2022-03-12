import React from 'react'
import Introduction from '../Components/Introduction'
import Navbar from '../Components/Navbar'
import CompaniesCarousel from '../Components/CompaniesCarousel'
import Target from '../Assets/target.svg'
import Process from '../Components/Process'
import Cohorts from '../Components/Cohorts'
import Experience from '../Components/Experience'
import Records from '../Components/Records'
import Tweets from '../Components/Tweets'
import Footer from '../Components/Footer'

const companies = [
  Target,
  Target,
  Target,
  Target,
  Target,
  Target,
  Target,
  Target,
]
const slicksettings = {
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  dots: false,
}

const Home = () => {
  return (
    <div className='w-[100%]'>
      <Navbar />
      <Introduction />
      <CompaniesCarousel companies={companies} settings={slicksettings} />
      <CompaniesCarousel
        companies={companies}
        settings={{ ...slicksettings, rtl: true }}
      />
      <Process />
      <Cohorts />
      <Experience />
      <Records />
      <Tweets />
      <Footer />
    </div>
  )
}

export default Home
