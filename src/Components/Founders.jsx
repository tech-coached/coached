import React from 'react'
import founder1 from '../Assets/founder1.svg'
import founder2 from '../Assets/founder2.svg'
import founder3 from '../Assets/founder3.svg'
import founder4 from '../Assets/founder4.svg'
import reco1 from '../Assets/reco1.jpg'
import reco2 from '../Assets/reco2.jpg'
import linkedin from '../Assets/linkedinprofile1.svg'
import '../Styles/founders.scss'

const Founders = () => {
  return (
    <div className='px-14 py-10'>
      <span className='text-3xl font-bold py-6'>
        Career War Chiefs at CoachEd
      </span>
      <div className='grid grid-cols-4 gap-4 py-10 founder-wrap'>
        <div
          className='flex justify-start items-center flex-col relative'
          onClick={() =>
            (window.location.href =
              'https://www.linkedin.com/in/poornanand-kulkarni/')
          }
        >
          {/* <div className='profile-social'>
            <img
              src={linkedin}
              alt=''
              className='absolute top-[30%] left-[40%] profileImage'
            />
          </div> */}
          <div className='founder relative'>
            <img src={founder1} alt='' className='profile' />
            <img
              src={linkedin}
              alt=''
              className='absolute top-[30%] left-[40%] profileImage'
            />
          </div>
          <span className='font-bold py-2'>Poornanand Kulkarni</span>
          <span>CEO</span>
        </div>
        <div className='flex justify-start items-center flex-col'>
          <div className='founder relative'>
            <img
              src={founder2}
              alt=''
              className='profile'
              onClick={() =>
                (window.location.href =
                  'https://www.linkedin.com/in/anikethanhvu/')
              }
            />
            <img
              src={linkedin}
              alt=''
              className='absolute top-[30%] left-[40%] profileImage'
            />
          </div>
          <span className='font-bold py-2'>Anikethan H V</span>
          <span>COO</span>
        </div>
        <div
          className='flex justify-start items-center flex-col'
          onClick={() =>
            (window.location.href =
              'https://www.linkedin.com/in/aishwarya-puranik/')
          }
        >
          <div className='founder relative'>
            <img src={founder3} alt='' className='profile' />
            <img
              src={linkedin}
              alt=''
              className='absolute top-[30%] left-[40%] profileImage'
            />
          </div>
          <span className='font-bold py-2'>Aishwarya Puranik </span>
          <span>CTO</span>
        </div>
        <div
          className='flex justify-start items-center flex-col'
          onClick={() =>
            (window.location.href =
              'https://www.linkedin.com/in/poornanand-kulkarni/')
          }
        >
          <div className='founder relative'>
            <img
              src={founder4}
              alt=''
              className='profile'
              onClick={() =>
                (window.location.href =
                  'https://www.linkedin.com/in/kaverib-1998/')
              }
            />
            <img
              src={linkedin}
              alt=''
              className='absolute top-[30%] left-[40%] profileImage'
            />
          </div>
          <span className='font-bold py-2'>Kaveri Bhadrannawar </span>
          <span>HR</span>
        </div>
      </div>
      <span className='text-3xl font-bold py-6'>We are recognized by</span>
      <div className='flex justify-center items-center flex-wrap'>
        <img src={reco1} alt='' className='w-[15rem] px-6 py-6' />
        <img src={reco2} alt='' className='w-[15rem] px-6 py-6' />
      </div>
    </div>
  )
}

export default Founders
