import React from 'react'
import '../Styles/process.scss'
import chakra from '../Assets/chakra.svg'
import hiring1 from '../Assets/hiringpartner1.svg'
import hiring2 from '../Assets/hiringpartner2.svg'
import leftArrow from '../Assets/leftArrow.svg'
import '../Styles/hiringpartner.scss'

const Companyhiringpartner = () => {
  return (
    <>
      <div
        className='pt-10 pb-2 mx-14 mt-5 grid grid-cols-2 gap-4 text-[#090809] step-two w-[90%]'
        style={{
          background:
            'linear-gradient(249.11deg, #67CE67 5.47%, #64EFC7 71.54%)',
        }}
      >
        <div className='textWrapper'>
          <div className='hiring-partner-title pb-4'>
            <span className='text-3xl  mt-4 mb-4'>You win with CoachEd</span>
            <span className='text-3xl font-bold mt-4 mb-4'>
              {' '}
              as your Hiring Partner
            </span>
          </div>
          <div className='grid grid-cols-2 gap-20 text-[#090809] hiring-partner-features-wrapper '>
            <div className='step-two-steps p-6 relative'>
              <img
                src={hiring1}
                alt=''
                className='absolute right-[-4rem] bottom-[-0rem]'
              />
              <div className='flex justify-start flex-col'>
                <span className='font-semibold pb-8'>Step 1</span>
                <span className='text-2xl font-bold'>
                  We understand <br />
                  your requirements{' '}
                </span>
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
                src={hiring2}
                alt=''
                className='absolute right-[-4rem] bottom-[-0rem]'
              />
              <div className='flex justify-start flex-col'>
                <span className='font-semibold pb-8'>Step 1</span>
                <span className='text-2xl font-bold'>
                  We match those <br /> requirements and <br />
                  provide our skilled <br />
                  grads
                </span>
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

      <div className='h-[80px] bg-[#4FBEFB] mx-14 rounded-[10px] relative flex justify-between items-center mb-10 hiring-partner-foot'>
        <img src={chakra} alt='' className='absolute rounded-[10px] left-[0]' />
        <span className='font-bold pl-20 text-[#000000]'>
          8 day turnaround guaranteed
        </span>
        <a
          href='https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=hello@coached.co.in'
          target='_blank'
          rel='noreferrer'
        >
          <div className='mail col-span-2 w-[22rem] text-[#ffffff]'>
            <div className='imageWrapper'>
              <img src={leftArrow} alt='' />
            </div>
            <div>Mail us today at hello@coached.co.in </div>
          </div>
        </a>
      </div>
    </>
  )
}

export default Companyhiringpartner
