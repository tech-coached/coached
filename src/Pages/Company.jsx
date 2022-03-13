import React from 'react'
import CompanyCard from '../Components/CompanyCard'
import Navbar from '../Components/Navbar'
import Title from '../Components/Title'
import CompaniesCarousel from '../Components/CompaniesCarousel'
import Target from '../Assets/target.svg'
import CompanyHiringpartner from '../Components/CompanyHiringpartner'
import Footer from '../Components/Footer'
import Warrior from '../Components/Warrior'

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
  autoplaySpeed: 3000000,
  dots: false,
}

const Company = () => {
  return (
    <div>
      <Navbar />
      <Title />
      <CompanyCard />
      <CompaniesCarousel companies={companies} settings={slicksettings} />
      <CompaniesCarousel
        companies={companies}
        settings={{ ...slicksettings, rtl: true }}
      />
      {/* <CompanyHiringpartner /> */}
      <Warrior />
      <Footer />
    </div>
  )
}

export default Company
