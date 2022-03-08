import React from 'react'
import bgImage from '../Assets/bg-records.svg'
import Target from '../Assets/target.svg'
import Mentor1 from '../Assets/mentor1.svg'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick'
import '../Styles/record.scss'

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

const settings = {
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 9000,
  dots: false,
  arrows: false,
  fade: true,
}

const Records = () => {
  return (
    <div className='pt-14'>
      <span className='text-3xl font-bold pl-14'>
        In 2021, we have gone beyond and above to serve our students
      </span>
      <div className='pt-10 pb-2 pl-14 grid grid-cols-4 gap-4'>
        <div className='flex justify-start items-start flex-col'>
          <span className='text-[#BF0808] font-bold text-3xl pb-4'>600+</span>{' '}
          <span className=' font-bold text-2xl'>Paid Users</span>
        </div>
        <div className='flex justify-start items-start flex-col'>
          <span className='text-[#BF0808] font-bold text-3xl pb-4'>20LPA</span>{' '}
          <span className=' font-bold text-2xl'>Highest Package</span>
        </div>
        <div className='flex justify-start items-start flex-col'>
          <span className='text-[#BF0808] font-bold text-3xl pb-4'>45+</span>{' '}
          <span className=' font-bold text-2xl'>Hiring Partners</span>
        </div>
        <div className='flex justify-start items-start flex-col'>
          <span className='text-[#BF0808] font-bold text-3xl pb-4'>80%</span>{' '}
          <span className=' font-bold text-2xl'>Placements</span>
        </div>
      </div>
      <div
        style={{ backgroundImage: `url(${bgImage})` }}
        className='h-[600px] mt-20 relative flex justify-center items-center'
      >
        <span className='text-3xl font-bold absolute top-[5rem] left-[3.5rem]'>
          Say hello to our mentors and educators
        </span>
        {/* <div className='h-[235px] w-[492px] bg-[#FFFFFF] rounded-xl flex justify-start items-center p-4'>
          <div className=' m-4'>
            <img src={Mentor1} alt='' className='rounded-full' />
          </div>
          <div className='flex justify-center items-start flex-col'>
            <span className='text-xl font-semibold py-2'>Mentor Name</span>
            <span>Mentor Designation</span>
            <div>
              <img src={Target} alt='' />
            </div>
          </div>
        </div> */}
        <div className='record px-14 py-6'>
          <Slider {...settings}>
            {companies.map((item, index) => {
              return (
                <div className='h-[235px] w-[492px] bg-[#FFFFFF] rounded-xl p-4 record-wrap'>
                  <div className=' m-4'>
                    <img src={Mentor1} alt='' className='rounded-full' />
                  </div>
                  <div className='flex justify-center items-start flex-col pl-4'>
                    <span className='text-xl font-semibold py-2'>
                      Mentor Name
                    </span>
                    <span>Mentor Designation</span>
                    <div>
                      <img src={Target} alt='' />
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
