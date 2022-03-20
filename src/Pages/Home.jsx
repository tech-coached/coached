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
import company2 from '../Assets/company2.svg'
import company3 from '../Assets/company3.png'
import company4 from '../Assets/company4.svg'
import company5 from '../Assets/company5.svg'
import company6 from '../Assets/company6.svg'
import company7 from '../Assets/company7.svg'
import company8 from '../Assets/company8.svg'
import company9 from '../Assets/company5.svg'
import ScrollToTop from '../Components/ScrollToTop'

const companies = [
  Target,
  company2,
  company3,
  company4,
  company5,
  company6,
  company7,
  company8,
  company9,
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
      <ScrollToTop />
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
