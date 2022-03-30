import React from 'react'
import '../Styles/experience.scss'
import star from '../Assets/greentstar.svg'
import leftArrow from '../Assets/leftArrow.svg'
import experience1 from '../Assets/experience1.svg'
import experience2 from '../Assets/experience2.svg'
import { Link } from 'react-router-dom'

const Experience = () => {
  return (
    <>
      <div className='flex flex-col'>
        <span className=' text-3xl font-bold pl-14 pt-14'>Experience</span>
        <span className=' text-3xl pl-14 pt-4 experience-title-text'>
          {' '}
          The CoachEd Power for Student/Company{' '}
        </span>
      </div>
      <div className='pt-4 pb-2 pl-14 mt-5 grid grid-cols-12 gap-10 experience-wrapper'>
        <div className='student col-span-5 relative'>
          <img
            src={experience1}
            alt=''
            className='absolute right-[0rem] bottom-[-0rem]'
          />
          <div className='p-10'>
            <span className='text-3xl font-bold text-[#ffffff] font-bold'>
              Student
            </span>
            <div className='textWrapper mt-2'>
              <div className='flex justify-start items-center my-2'>
                <div className='mr-2'>
                  <img src={star} alt='' />
                </div>
                <span className='text-xl text-[#ffffff] font-medium'>
                  10 Weeks
                </span>
              </div>
              <div className='flex justify-start items-center  my-2'>
                <div className='mr-2'>
                  <img src={star} alt='' />
                </div>
                <span className='text-xl text-[#ffffff] font-medium'>
                  Industry Driven
                </span>
              </div>
              <div className='flex justify-start items-center  my-2'>
                <div className='mr-2'>
                  <img src={star} alt='' />
                </div>
                <span className='text-xl text-[#ffffff] font-medium'>
                  Fast Paced
                </span>
              </div>
              <div className='flex justify-start items-center  my-2'>
                <div className='mr-2'>
                  <img src={star} alt='' />
                </div>
                <span className='text-xl text-[#ffffff] font-medium'>
                  Virtual
                </span>
              </div>
              <div className='flex justify-start items-center  my-2'>
                <div className='mr-2'>
                  <img src={star} alt='' />
                </div>
                <span className='text-xl text-[#ffffff] font-medium'>
                  Industry Approved
                </span>
              </div>
              <div className='flex justify-start items-center  my-2'>
                <div className='mr-2'>
                  <img src={star} alt='' />
                </div>
                <span className='text-xl text-[#ffffff] font-medium'>
                  Company Supported
                </span>
              </div>
            </div>
            <Link to='/students'>
              <div className='button'>
                <div className='imageWrapper'>
                  <img src={leftArrow} alt='' />
                </div>
                <div> Explore</div>
              </div>
            </Link>
          </div>
        </div>
        <div className='company col-span-5 relative'>
          <img
            src={experience2}
            alt=''
            className='absolute right-[0rem] bottom-[-0rem]'
          />
          <div className='step-two-steps p-10'>
            <span className='text-3xl font-bold text-[#ffffff] font-bold'>
              Company
            </span>
            <div className='textWrapper mt-2'>
              <div className='flex justify-start items-center my-2'>
                <div className='mr-2'>
                  <img src={star} alt='' />
                </div>
                <span className='text-xl text-[#ffffff] font-medium'>
                  Hassle free hiring
                </span>
              </div>
              <div className='flex justify-start items-center  my-2'>
                <div className='mr-2'>
                  <img src={star} alt='' />
                </div>
                <span className='text-xl text-[#ffffff] font-medium'>
                  Fast paced turnaround
                </span>
              </div>
              <div className='flex justify-start items-center  my-2'>
                <div className='mr-2'>
                  <img src={star} alt='' />
                </div>
                <span className='text-xl text-[#ffffff] font-medium'>
                  Tailored to requirement and
                </span>
              </div>
              <div className='flex justify-start items-center  my-2'>
                <div className='mr-2'>
                  <img src={star} alt='' />
                </div>
                <span className='text-xl text-[#ffffff] font-medium'>
                  Skilled Talent
                </span>
              </div>
              <div className='flex justify-start items-center  my-2'>
                <div className='mr-2'>
                  <img src={star} alt='' />
                </div>
                <span className='text-xl text-[#ffffff] font-medium'>
                  Backed by community
                </span>
              </div>
            </div>
            <Link to='/company'>
              <div className='button'>
                <div className='imageWrapper'>
                  <img src={leftArrow} alt='' />
                </div>
                <div> Explore</div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Experience
