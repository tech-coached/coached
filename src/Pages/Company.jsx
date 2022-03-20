import React from 'react'
import CompanyCard from '../Components/CompanyCard'
import Navbar from '../Components/Navbar'
import Title from '../Components/Title'
import CompaniesCarousel from '../Components/CompaniesCarousel'
import Target from '../Assets/target.svg'
import CompanyHiringpartner from '../Components/CompanyHiringpartner'
import Footer from '../Components/Footer'
import Warrior from '../Components/Warrior'
import company2 from '../Assets/company2.svg'
import company3 from '../Assets/company3.png'
import company4 from '../Assets/company4.svg'
import company5 from '../Assets/company5.svg'
import company6 from '../Assets/company6.svg'
import company7 from '../Assets/company7.svg'
import company8 from '../Assets/company8.svg'
import company9 from '../Assets/company5.svg'
import ScrollToTop from '../Components/ScrollToTop'

const companies1 = [
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
  // autoplaySpeed: 3000000,
  dots: false,
}

const Company = () => {
  return (
    <div>
      <ScrollToTop />
      <Navbar />
      <Title />
      <CompanyCard />
      <CompaniesCarousel companies={companies1} settings={slicksettings} />
      <CompaniesCarousel
        companies={companies1}
        settings={{ ...slicksettings, rtl: true }}
      />
      <CompanyHiringpartner />
      <Warrior />
      <Footer />
    </div>
  )
}

export default Company
