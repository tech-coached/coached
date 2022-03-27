import React from 'react'
import '../Styles/about-title.scss'
import experience1 from '../Assets/about-pic.svg'

const AboutTitle = () => {
  return (
    <div className='about-title ml-14 mt-10 flex justify-center flex-col items-start pl-10 relative '>
      <div className='absolute top-[4rem]'>
        <div>
          <span className='p-1 text-[#ffffff] text-2xl font-light'>
            We are here to get a
          </span>
          <span className='text-white text-2xl font-bold'>
            student their dream job{' '}
          </span>
        </div>
        <div className='py-4'>
          <span className='p-1 text-[#ffffff] text-2xl font-light'>and</span>
          <span className='text-white text-2xl font-bold'>
            companies their perfect hire.{' '}
          </span>
        </div>
      </div>
      <div className='absolute right-[-4rem] bottom-[-2.5rem] about-acad'>
        <img src={experience1} alt='' />
      </div>
    </div>
  )
}

export default AboutTitle
