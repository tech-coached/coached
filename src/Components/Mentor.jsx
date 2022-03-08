import React from 'react'
import '../Styles/mentor.scss'
import CompaniesCarousel from '../Components/CompaniesCarousel'
import Target from '../Assets/target.svg'
import diamond from '../Assets/diamond.svg'
import MentorCarosel from './MentorCarosel'
import Mentor1 from '../Assets/mentor1.svg'

const companies = [
  {
    name: 'Mentor1',
    designation: 'Software Engineer',
    company: Target,
    profile: Mentor1,
  },
  {
    name: 'Mentor1',
    designation: 'Software Engineer',
    company: Target,
    profile: Mentor1,
  },
  {
    name: 'Mentor1',
    designation: 'Software Engineer',
    company: Target,
    profile: Mentor1,
  },
  {
    name: 'Mentor1',
    designation: 'Software Engineer',
    company: Target,
    profile: Mentor1,
  },
]
const slicksettings = {
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  dots: false,
  arrows: false,
}

const Mentor = () => {
  return (
    <div className='mentor px-14 py-6'>
      <button className='flex justify-start items-center bg-[#7316FB] rounded-[10px] px-6 py-4 mb-4'>
        <img src={diamond} alt='' />
        <span className='text-[#ffffff] px-4'>Mentor Showcase</span>
      </button>
      <span className='text-3xl font-bold text-[#ffffff]'>
        Our Chief Educators are here to make your journey seamless
      </span>
      <MentorCarosel companies={companies} settings={slicksettings} />
    </div>
  )
}

export default Mentor
