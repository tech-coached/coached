import React from 'react'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick'
import '../Styles/CompaniesCarousel.scss'

const CompaniesCarousel = ({ companies, settings }) => {
  return (
    <div className='my-10 px-14 overflow-hidden'>
      <Slider {...settings}>
        {companies.map((item, index) => {
          return (
            <div
              key={index}
              className='campany-carousel-wrap h-[100px] w-[100%] '
            >
              <img src={item} alt='' className='h-[100%] w-[100%]' />
            </div>
          )
        })}
      </Slider>
    </div>
  )
}

export default CompaniesCarousel
