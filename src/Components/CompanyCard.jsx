import React from 'react'
import cardImg1 from '../Assets/cardImg1.svg'
import cardImg2 from '../Assets/cardImg2.svg'
import cardImg3 from '../Assets/cardImg3.svg'
import '../Styles/CompanyCard.scss'

const CompanyCard = () => {
  return (
    <div className='px-14 grid grid-cols-3 gap-10 company-card-grid-wrapper'>
      <div className='h-[448px] bg-[#DFE1F7] p-6 my-10 rounded-[10px]'>
        <div>
          <img src={cardImg1} alt='' />
        </div>
        <div className='pt-20'>
          <span className='font-bold pr-1'>Hire</span>
          <span>Our Grads</span>
        </div>
      </div>
      <div className='h-[448px] bg-[#DFE1F7] p-6 my-10 rounded-[10px]'>
        <div>
          <img src={cardImg2} alt='' />
        </div>
        <div className='pt-20'>
          <span>Find the </span>
          <span className='font-bold pl-1 pr-1'>
            hottest, <br />
            upskilled and diverse <br /> talent
          </span>
          <span>, all in one place!</span>
        </div>
      </div>
      <div className='h-[448px] bg-[#DFE1F7] p-6 my-10 rounded-[10px] company-card-center'>
        <div>
          <img src={cardImg3} alt='' />
        </div>
        <div className='pt-20'>
          <span>
            CoachEd graduates are highly
            <br /> coveted, and come up with all
            <br /> the
          </span>
          <span className='font-bold pl-1 pr-1'>
            right skills needed to profit <br />
          </span>
          <span>your company!</span>
        </div>
      </div>
    </div>
  )
}

export default CompanyCard
