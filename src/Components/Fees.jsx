import React from 'react'
import "../Styles/Fees.scss"
import feeCoin from '../Assets/fee-coin.svg'

const Fees = () => {
  return (
    <div className='px-14 fees-wrap py-10'>
     <span className='font-bold text-2xl text-[#ffffff]'>
     Program Fees
     </span>
     <div className='grid grid-cols-3 py-10 fee-val'>
      <div className='col-span-1 h-[184px] bg-[#DB5000] rounded-[10px] flex justify-center items-start px-10 flex-col'>
       <span className='text-[#ffffff] '>INR</span>
       <span className='font-bold text-2xl text-[#ffffff]  py-4'>3500</span>
       <span className='text-[#ffffff] pt-2'>One Time Payment</span>
      </div>
      <div className='col-span-1 h-[184px] bg-[#9E7F9B] rounded-[10px] flex justify-start items-start px-10 flex-col relative'>
       <span className='font-bold text-2xl text-[#ffffff]  py-4'>Pay it once you get</span>
       <span className='font-bold text-2xl text-[#ffffff]  '> placed via us</span>
       <img src={feeCoin} alt="" className='absolute right-[1rem] bottom-[.5rem]' />
      </div>
     </div>
     {/* <span className='font-bold text-2xl text-[#ffffff]'>Cohort Showcase</span>
     <div className='grid grid-cols-12 py-10'>
      <div className='col-span-6 h-[184px] fee-course1 rounded-[10px]'>
       <span className='font-bold text-2xl'>Software Engineering</span>
      <img src={speaker1} alt="" className='absolute right-[1rem] bottom-[.5rem] z-50' />
      </div>
      <div className='col-span-6 h-[184px] fee-course2 rounded-[10px]'>
      <span className='font-bold text-2xl'>VLSI and Embedded Systems</span>
      <img src={speaker2} alt="" className='absolute right-[1rem] bottom-[.5rem] z-50' />
      </div>
     </div> */}
    </div>
  )
}

export default Fees