import React from 'react'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick'
import '../Styles/CompaniesCarousel.scss'

const CompaniesCarousel = ({ companies, settings }) => {
  return (
    <div className='pt-10 pb-10 px-14 overflow-hidden'>
      <Slider {...settings}>
        {companies.map((item, index) => {
          return (
            <div key={index} className='campany-carousel-wrap'>
              <img src={item} alt='' />
            </div>
          )
        })}
      </Slider>
    </div>
  )
}

export default CompaniesCarousel
