import React from 'react'
import bgImage from '../Assets/bg-records.svg'
// import Target from '../Assets/target.svg'
// import Mentor1 from '../Assets/mentor1.svg'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick'
import '../Styles/record.scss'
import company1 from '../Assets/company-logo1.svg'
import company2 from '../Assets/company-logo2.svg'
import company3 from '../Assets/company-logo3.svg'
import company4 from '../Assets/company-logo4.svg'
import mentor1 from '../Assets/mentor1.svg'
import mentor2 from '../Assets/mentor2.svg'
import mentor3 from '../Assets/mentor3.svg'
import mentor4 from '../Assets/mentor4.svg'

const companies = [
  {
    name: 'Anand Rao',
    designation: 'Software Engineer',
    company: company1,
    profile: mentor1,
  },
  {
    name: 'Siddhant Gambhir ',
    designation: 'Sr Specialist - Evaluation & Testing',
    company: company2,
    profile: mentor2,
  },
  {
    name: 'Rohan Nagarad',
    designation: 'Senior Software Engineer',
    company: company3,
    profile: mentor3,
  },
  {
    name: 'Aditya Naik',
    designation: 'UX/UI Design Consultant ',
    company: company4,
    profile: mentor4,
  },
]

const settings = {
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 5000,
  dots: false,
  arrows: false,
  fade: true,
}

const Records = () => {
  return (
    <div className='pt-14 record-top-wrap'>
      <span className='text-3xl font-bold pl-14 records-title'>
        In 2021, we have gone beyond and above to serve our students
      </span>
      <div className='pt-10 pb-2 px-14 grid grid-cols-4 gap-4 records-numbers'>
        <div className='flex justify-start items-start flex-col record-num'>
          <span className='text-[#BF0808] font-bold text-3xl pb-4'>1200+</span>{' '}
          <span className=' font-bold text-2xl'>Enrolled Students</span>
        </div>
        <div className='flex justify-start items-start flex-col record-num'>
          <span className='text-[#BF0808] font-bold text-3xl pb-4'>20LPA</span>{' '}
          <span className=' font-bold text-2xl higest-package'>
            Highest Package
          </span>
        </div>
        <div className='flex justify-start items-start flex-col record-num'>
          <span className='text-[#BF0808] font-bold text-3xl pb-4'>45+</span>{' '}
          <span className=' font-bold text-2xl higest-package'>
            Hiring Partners
          </span>
        </div>
        <div className='flex justify-start items-start flex-col record-num'>
          <span className='text-[#BF0808] font-bold text-3xl pb-4'>80%</span>{' '}
          <span className=' font-bold text-2xl'>Placements</span>
        </div>
      </div>
      <div
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: 'cover',
        }}
        className='h-[600px] mt-20 relative flex justify-center items-center bgImage'
      >
        <span className='text-3xl font-bold absolute top-[5rem] left-[3.5rem] records-hello'>
          Say hello to our mentors and educators
        </span>
        <div className='record px-14 py-20'>
          <Slider {...settings}>
            {companies.map((item, index) => {
              return (
                <div
                  className='h-[235px] w-[492px] bg-[#FFFFFF] rounded-xl p-4 record-wrap'
                  key={index}
                >
                  <div className=' m-4'>
                    <img src={item.profile} alt='' className='rounded-full' />
                  </div>
                  <div className='flex justify-center items-start flex-col pl-4'>
                    <span className='text-xl font-semibold py-2'>
                      {item.name}
                    </span>
                    <span>{item.designation}</span>
                    <div>
                      <img src={item.company} alt='' />
                    </div>
                  </div>
                </div>
              )
            })}
          </Slider>
        </div>
      </div>
    </div>
  )
}

export default Records
