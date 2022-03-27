import React from 'react'
import '../Styles/Fees.scss'
import feeCoin from '../Assets/fee-coin.svg'
import speaker2 from '../Assets/speaker2.svg'
import speaker1 from '../Assets/speaker1.svg'
import star from '../Assets/greentstar.svg'

const Fees = () => {
  return (
    <div className='px-14 fees-wrap py-10'>
      <span className='font-bold text-2xl text-[#ffffff]'>Program Fees</span>
      <div className='grid grid-cols-3 py-10 fee-val'>
        <div className='col-span-1 h-[184px] bg-[#DB5000] rounded-[10px] flex justify-center items-start px-10 flex-col'>
          <span className='text-[#ffffff] '>INR</span>
          <span className='font-bold text-2xl text-[#ffffff]  py-4'>3500</span>
          <span className='text-[#ffffff] pt-2'>One Time Payment</span>
        </div>
        <div className='col-span-1 h-[184px] bg-[#9E7F9B] rounded-[10px] flex justify-start items-start px-10 flex-col relative fees-coin-text'>
          <span className='font-bold text-2xl text-[#ffffff]  py-4'>
            Pay it once you get
          </span>
          <span className='font-bold text-2xl text-[#ffffff] '>
            placed via us
          </span>
          <img
            src={feeCoin}
            alt=''
            className='absolute right-[1rem] bottom-[.5rem] fees-coin'
          />
        </div>
      </div>
      <span className='font-bold text-2xl text-[#ffffff]'>Cohort Showcase</span>
      <div className='grid grid-cols-12 gap-6 py-10 fees-announce-two'>
        <div className='col-span-6 h-[184px] fee-course1 rounded-[10px] p-4 relative fees-announce'>
          <span className='font-bold text-2xl text-[white]'>
            Software Engineering
          </span>
          <div className='flex justify-start items-center  my-2'>
            <div className='mr-2'>
              <img src={star} alt='' />
            </div>
            <span className='text-xl text-[#ffffff] font-normal'>
              Starts from Saturday, 10 April 2022
            </span>
          </div>
          <div className='flex justify-start items-center  my-2'>
            <div className='mr-2'>
              <img src={star} alt='' />
            </div>
            <span className='text-xl text-[#ffffff] font-normal'>
              Timing 10AM to 5PM
            </span>
          </div>
          <img
            src={speaker1}
            alt=''
            className='absolute right-[1rem] bottom-[0rem] z-50  fees-speaker'
          />
        </div>
        <div className='col-span-6 h-[184px] fee-course2 rounded-[10px] p-4 relative fees-announce'>
          <span className='font-bold text-2xl  text-[white]'>
            VLSI and Embedded Systems
          </span>
          <div className='flex justify-start items-center  my-2'>
            <div className='mr-2'>
              <img src={star} alt='' />
            </div>
            <span className='text-xl text-[#ffffff] font-normal'>
              Starts from Saturday, 10 April 2022
            </span>
          </div>
          <div className='flex justify-start items-center  my-2'>
            <div className='mr-2'>
              <img src={star} alt='' />
            </div>
            <span className='text-xl text-[#ffffff] font-normal'>
              Timing 10AM to 5PM
            </span>
          </div>
          <img
            src={speaker2}
            alt=''
            className='absolute right-[1rem] bottom-[0rem] z-50 fees-speaker'
          />
        </div>
      </div>
    </div>
  )
}

export default Fees
