import React from 'react'
import founder1 from '../Assets/founder1.svg'
import founder2 from '../Assets/founder2.svg'
import founder3 from '../Assets/founder3.svg'
import founder4 from '../Assets/founder4.svg'
import '../Styles/founders.scss'

const Founders = () => {
  return (
    <div className='px-14 py-10'>
      <span className='text-3xl font-bold py-6'>
        Career War Chiefs at CoachEd
      </span>
      <div className='grid grid-cols-4 gap-4 py-10 founder-wrap'>
        <div className='flex justify-start items-center flex-col'>
          <div className='founder'>
            <img src={founder1} alt='' />
          </div>
          <span className='font-bold'>Poornanand Kulkarni</span>
          <span>CEO</span>
        </div>
        <div className='flex justify-start items-center flex-col'>
          <div className='founder'>
            <img src={founder2} alt='' />
          </div>
          <span className='font-bold'>Poornanand Kulkarni</span>
          <span>CEO</span>
        </div>
        <div className='flex justify-start items-center flex-col'>
          <div className='founder'>
            <img src={founder3} alt='' />
          </div>
          <span className='font-bold'>Poornanand Kulkarni</span>
          <span>CEO</span>
        </div>
        <div className='flex justify-start items-center flex-col'>
          <div className='founder'>
            <img src={founder4} alt='' />
          </div>
          <span className='font-bold'>Poornanand Kulkarni</span>
          <span>CEO</span>
        </div>
      </div>
      {/* <span className='text-3xl font-bold py-6'>We are recognized by</span> */}
    </div>
  )
}

export default Founders
