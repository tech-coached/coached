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
import StudentChorts from '../Components/StudentChorts'
import Fees from '../Components/Fees'
import company2 from '../Assets/company2.svg'
import company3 from '../Assets/company3.png'
import company4 from '../Assets/company4.svg'
import company5 from '../Assets/company5.svg'
import company6 from '../Assets/company6.svg'
import company7 from '../Assets/company7.svg'
import company8 from '../Assets/company8.svg'
import company9 from '../Assets/company9.svg'

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

const Student = () => {
  return (
    <div>
      <Navbar />
      <StudentTitle />
      <Domain />
      <StudentChorts />
      {/* <Mentor /> */}
      <CompaniesCarousel companies={companies} settings={slicksettings} />
      <CompaniesCarousel
        companies={companies}
        settings={{ ...slicksettings, rtl: true }}
      />
      <Fees/>
      <FewTweet />
      <Instagram />
      <Questions />
      <Footer />
    </div>
  )
}

export default Student
