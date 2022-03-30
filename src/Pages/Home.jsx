import React, { Suspense } from 'react'
import Target from '../Assets/target.svg'
import company2 from '../Assets/company2.svg'
import company3 from '../Assets/company3.svg'
import company4 from '../Assets/company4.svg'
import company5 from '../Assets/company5.svg'
import company6 from '../Assets/company6.svg'
import company7 from '../Assets/company7.svg'
import company8 from '../Assets/company8.svg'
import company9 from '../Assets/company5.svg'
import ScrollToTop from '../Components/ScrollToTop'
import Loader from '../Components/Loader'
const Introduction = React.lazy(() => import('../Components/Introduction'))
const Navbar = React.lazy(() => import('../Components/Navbar'))
const CompaniesCarousel = React.lazy(() =>
  import('../Components/CompaniesCarousel')
)
const Process = React.lazy(() => import('../Components/Process'))
const Cohorts = React.lazy(() => import('../Components/Cohorts'))
const Experience = React.lazy(() => import('../Components/Experience'))
const Records = React.lazy(() => import('../Components/Records'))
const Tweets = React.lazy(() => import('../Components/Tweets'))
const Footer = React.lazy(() => import('../Components/Footer'))

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
  slidesToShow: 5,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  dots: false,
}

const Home = () => {
  return (
    <div className='w-[100%]'>
      <Suspense fallback={<Loader />}>
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
      </Suspense>
    </div>
  )
}

export default Home
