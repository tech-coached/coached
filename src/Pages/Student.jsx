import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import Questions from '../Components/Questions'
import FewTweet from '../Components/FewTweet'
import CompaniesCarousel from '../Components/CompaniesCarousel'
import Target from '../Assets/target.svg'
import Instagram from '../Components/Instagram'
import StudentTitle from '../Components/StudentTitle'
import Domain from '../Components/Domain'
import Mentor from '../Components/Mentor'

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

const Student = () => {
  return (
    <div>
      <Navbar />
      <StudentTitle />
      <Domain />
      <Mentor />
      <CompaniesCarousel companies={companies} settings={slicksettings} />
      <CompaniesCarousel
        companies={companies}
        settings={{ ...slicksettings, rtl: true }}
      />
      <FewTweet />
      <Instagram />
      <Questions />
      <Footer />
    </div>
  )
}

export default Student
