import React, { Suspense } from 'react'
import Loader from '../Components/Loader'
import Target from '../Assets/target.svg'
import company2 from '../Assets/company2.svg'
import company3 from '../Assets/company3.png'
import company4 from '../Assets/company4.svg'
import company5 from '../Assets/company5.svg'
import company6 from '../Assets/company6.svg'
import company7 from '../Assets/company7.svg'
import company8 from '../Assets/company8.svg'
import company9 from '../Assets/company5.svg'
import ScrollToTop from '../Components/ScrollToTop'
import StudentTitle from '../Components/StudentTitle'
const Navbar = React.lazy(() => import('../Components/Navbar'))
const Footer = React.lazy(() => import('../Components/Footer'))
const Questions = React.lazy(() => import('../Components/Questions'))
const FewTweet = React.lazy(() => import('../Components/FewTweet'))
const CompaniesCarousel = React.lazy(() =>
  import('../Components/CompaniesCarousel')
)
const Instagram = React.lazy(() => import('../Components/Instagram'))
// const StudentTitle = React.lazy(() => import('../Components/StudentTitle'))
const Fees = React.lazy(() => import('../Components/Fees'))
const Domain = React.lazy(() => import('../Components/Domain'))
const StudentChorts = React.lazy(() => import('../Components/StudentChorts'))
// const Title = React.lazy(() => import('../Components/Title'))

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
      <Suspense fallback={<Loader />}>
        <ScrollToTop />
        <Navbar />
        <StudentTitle />
        {/* <Title /> */}
        <Domain />
        <StudentChorts />
        {/* <Mentor /> */}
        <CompaniesCarousel companies={companies} settings={slicksettings} />
        <CompaniesCarousel
          companies={companies}
          settings={{ ...slicksettings, rtl: true }}
        />
        <Fees />
        <FewTweet />
        <Instagram />
        <Questions />
        <Footer />
      </Suspense>
    </div>
  )
}

export default Student
