import React from 'react'
import leftArrow from '../Assets/leftArrow.svg'
import '../Styles/process.scss'
import star from '../Assets/star.svg'
import wing from '../Assets/wing.svg'
import ladylaptop from '../Assets/laptop-lady.svg'
import process1 from '../Assets/process1.svg'
import process2 from '../Assets/process2.svg'

const Process = () => {
  return (
    <div className='px-14 process-top-wrapper'>
      <span className='text-3xl font-bold m-14'>Process</span>
      <div className='pt-10 pb-2 mt-5 grid grid-cols-2 gap-4 text-[#090809] processWrapper relative'>
        <div className='textWrapper'>
          <div>
            <span style={{ paddingRight: '.5rem' }}>Step</span>
            <span
              style={{
                padding: '.5rem 1rem',
                backgroundColor: '#ffffff',
                borderRadius: '100%',
              }}
            >
              1
            </span>
          </div>
          <span className='text-3xl font-bold mt-4 mb-4'>
            Download the Android App
          </span>
          <span>Download the App to start the journey with us</span>
        </div>
        <div className='start col-span-2'>
          <div className='imageWrapper'>
            <img src={leftArrow} alt='' />
          </div>
          <a href='https://play.google.com/store/apps/details?id=co.edvin.iyclg'>
            <div>START</div>
          </a>
        </div>
        <img
          src={ladylaptop}
          alt=''
          className='absolute right-[-2rem] lady-image'
        />
        <img
          src={wing}
          alt=''
          className='absolute right-[20%] top-[0rem] process-wing'
        />
      </div>
      <div className='pt-10 pb-2 mt-5 grid grid-cols-2 gap-4 text-[#090809] step-two '>
        <div className='textWrapper'>
          <div>
            <span style={{ paddingRight: '.5rem' }}>Step</span>
            <span
              style={{
                padding: '.5rem 1rem',
                backgroundColor: '#ffffff',
                borderRadius: '100%',
              }}
            >
              2
            </span>
          </div>
          <span className='text-3xl  mt-4 mb-4 process-head process-title-responsive'>
            Join our exclusive cohorts and supercharge your{' '}
            <span className='text-3xl font-bold mt-4 mb-4 process-head'>
              career in less than 10 weeks.
            </span>
          </span>
          <div className='grid grid-cols-2 gap-20 text-[#090809] process-part2'>
            <div className='step-two-steps p-6 relative'>
              <img
                src={process1}
                alt=''
                className='absolute right-[-4rem] bottom-[-0rem] process-part2-1'
              />
              <span className='text-2xl font-bold'>On-Demand Cohorts</span>
              <div className='textWrapper mt-2'>
                <div className='flex justify-start items-center my-2'>
                  <div className='mr-2'>
                    <img src={star} alt='' />
                  </div>
                  <span className='text-base'>UX/UI</span>
                </div>
                <div className='flex justify-start items-center  my-2'>
                  <div className='mr-2'>
                    <img src={star} alt='' />
                  </div>
                  <span className='text-base'>Blockchain</span>
                </div>
                <div className='flex justify-start items-center  my-2'>
                  <div className='mr-2'>
                    <img src={star} alt='' />
                  </div>
                  <span className='text-base'>Sales</span>
                </div>
                <div className='flex justify-start items-center  my-2'>
                  <div className='mr-2'>
                    <img src={star} alt='' />
                  </div>
                  <span className='text-base'>Devops and more!</span>
                </div>
              </div>
              {/* <div className='explore'>
                <div className='imageWrapper'>
                  <img src={leftArrow} alt='' />
                </div>
                <div>Explore</div>
              </div> */}
            </div>
            <div className='step-two-steps p-6 relative'>
              <img
                src={process2}
                alt=''
                className='absolute right-[-6rem] bottom-[-0rem] process-part2-2'
              />
              <span className='text-2xl font-bold'>
                Job Assured Industry Mentorship Program
              </span>
              <div className='textWrapper mt-2'>
                <div className='flex justify-start items-center my-2'>
                  <div className='mr-2'>
                    <img src={star} alt='' />
                  </div>
                  <span className='text-base'>Software Development</span>
                </div>
                <div className='flex justify-start items-center  my-2'>
                  <div className='mr-2'>
                    <img src={star} alt='' />
                  </div>
                  <span className='text-base'>VLSI and Embedded Systems</span>
                </div>
                <div className='flex justify-start items-center  my-2'>
                  <div className='mr-2'>
                    <img src={star} alt='' />
                  </div>
                  <span className='text-base'>Core Civil </span>
                </div>
                <div className='flex justify-start items-center  my-2'>
                  <div className='mr-2'>
                    <img src={star} alt='' />
                  </div>
                  <span className='text-base'>Management</span>
                </div>
              </div>
              {/* <div className='explore'>
                <div className='imageWrapper'>
                  <img src={leftArrow} alt='' />
                </div>
                <div>Explore</div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Process
