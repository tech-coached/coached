import React from 'react'
import clock from '../Assets/clock.svg'
import message from '../Assets/message.svg'
import bag from '../Assets/bag.svg'
import tropy from '../Assets/tropy.svg'
import process3 from '../Assets/Phone -Pattern.svg'
import '../Styles/cohorts.scss'
import Donwload from './Download'

const Cohorts = () => {
  return (
    <>
      <span className='text-3xl font-bold m-14'>CoachEd Cohorts</span>
      <div className='pt-4 pb-2 px-14 mt-2 grid grid-cols-2 gap-4 text-[#090809] cohorts-wrapper'>
        <div>
          <div>
            <span className='text-3xl font-bold text-[#15CD98]'>10x </span>{' '}
            <span className='text-2xl font-bold '>your career in</span>{' '}
            <span className='text-3xl font-bold text-[#FA8F8F]'>10 Weeks</span>
          </div>
          <div className='grid grid-rows-2 grid-cols-2 gap-4 mt-10'>
            <div className='p-4'>
              <div className='pb-2'>
                {' '}
                <img src={clock} alt='' />
              </div>
              <span className='py-4'>
                A <span className='font-bold'>10-Week cohort</span> based course
                designed by top industry folks
              </span>
            </div>
            <div className='p-4'>
              <div className='pb-2'>
                {' '}
                <img src={message} alt='' />
              </div>
              <span className='py-4'>
                Be a part of a
                <span className='font-bold'>powerful community</span> to learn
                and earn more.
              </span>
            </div>
            <div className='p-4'>
              <div className='pb-2'>
                {' '}
                <img src={bag} alt='' />
              </div>
              <span className='py-4'>
                <span className='font-bold'>
                  Learn from top industry professionals
                </span>{' '}
                from companies like Qualcomm, PwC, Razorpay and more.
              </span>
            </div>
            <div className='p-4'>
              <div className='pb-2'>
                {' '}
                <img src={tropy} alt='' />
              </div>
              <span className='py-4'>
                <span className='font-bold'>Get placed</span> in India’s top
                startups and companies.
              </span>
            </div>
          </div>
        </div>
        <div className='flex justify-center items-center relative'>
          <img src={process3} alt='' className='mb-14' />
          <Donwload />
        </div>
      </div>
    </>
  )
}

export default Cohorts
