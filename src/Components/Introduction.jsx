import React from 'react'
import '../Styles/introduction.scss'
import leftArrow from '../Assets/leftArrow.svg'
import dividerRed from '../Assets/dividerRed.svg'
import Banner from '../Assets/Intro-banner.svg'

const Introduction = () => {
  return (
    <div className='pt-10 pb-2 px-14 grid grid-cols-2 gap-4 flex text-[#090809] items-center justify-center flex-row intro-wrapper'>
      <div className='flex flex-col'>
        <span>Your passport to an amazing career.</span>
        <div className='text-2xl into-hero'>
          <span className='text-2xl into-hero'> We bring together the</span>
          <span className='students'>students, </span>
          <span className='educators'>educators, </span>
          <span className='companies'> companies</span>
          <span className='text-2xl into-hero'>for you to win.</span>
        </div>
        <div className='descriptionWrapper'>
          <span className='sideLine'></span>
          <div className='description'>
            <p className='mb-4'>
              An upskilling platform that assesses the{' '}
              <span className='font-bold'>candidate's current skills</span> and
              identifies an attainable{' '}
              <span className='font-bold'>target job</span>. We then provide{' '}
              <span className='font-bold'> Industry driven Mentorship</span> to
              the candidates in line with the targeted job
            </p>
            <p>
              We help companies{' '}
              <span className='font-bold'>hire the right talent</span> and make
              use of the job{' '}
              <span className='font-bold'>
                market insights and partnerships
              </span>{' '}
              to ensure the mentored candidates get placed.
            </p>
          </div>
        </div>
        <div className='intro'>
          <div className='imageWrapper'>
            <img src={leftArrow} alt='' />
          </div>
          <a
            href='https://play.google.com/store/apps/details?id=co.edvin.iyclg'
            className='flex justify-start items-center'
          >
            <div className='text-white'>FIND OUT MORE</div>
          </a>
        </div>
        <div className='students mt-6 text-3xl'>
          <span className='font-bold text-2xl'>Curated</span> by the industry,{' '}
          <span className='font-bold text-2xl'>Trusted</span> by the industry,{' '}
        </div>
        <div className='dividerWrapper'>
          <img src={dividerRed} alt='' />
        </div>
        <div className='students text-2xl'>
          Get your first job at high paced companies
        </div>
      </div>
      <div className='flex justify-center items-center'>
        <img src={Banner} alt='' />
      </div>
    </div>
  )
}

export default Introduction
