import React from 'react'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick'
import '../Styles/mentor.scss'

const MentorCarosel = ({ companies, settings }) => {
  return (
    <div className='pt-10 pb-10 overflow-hidden'>
      <Slider {...settings}>
        {companies.map((item, index) => {
          return (
            <div
              key={index}
              className='w-[397px] wrapper relative h-[160px] overflow-hidden'
            >
              <div className='flex justify-start items-start flex-col px-4'>
                <span className='font-bold'>{item.name}</span>
                <span className='py-2'>{item.designation}</span>
                <img src={item.company} alt='' />
              </div>
              <div className='absolute right-[-3rem] top-[2rem]'>
                <img src={item.profile} alt='' className='rounded-[100%]' />
              </div>
            </div>
          )
        })}
      </Slider>
    </div>
  )
}

export default MentorCarosel
