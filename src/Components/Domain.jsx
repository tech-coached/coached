import React from 'react'
import star from '../Assets/greentstar.svg'
import student2 from '../Assets/student2.svg'
import student3 from '../Assets/student3.svg'
import student4 from '../Assets/student4.svg'
import student5 from '../Assets/student5.svg'
import student6 from '../Assets/student6.svg'
import student7 from '../Assets/student7.svg'
import student8 from '../Assets/stud-process.svg'
import student9 from '../Assets/stud-process2.svg'
import "../Styles/domain.scss"

const domain = [
  {
    name: 'Software Domain',
    skills: ['Programming Fundamentals', 'Full Stack', 'Front end', 'Back end'],
  },
  {
    name: 'Software Domain',
    skills: ['Programming Fundamentals', 'Full Stack', 'Front end', 'Back end'],
  },
  {
    name: 'Software Domain',
    skills: ['Programming Fundamentals', 'Full Stack', 'Front end', 'Back end'],
  },
  {
    name: 'Software Domain',
    skills: ['Programming Fundamentals', 'Full Stack', 'Front end', 'Back end'],
  },
]

const Domain = () => {
  return (
    <div className='pb-10 px-14 domain-main-wrapper'>
      <div className='pt-10'>
        <div className='domain-title'>
          <span  className='text-xl  font-semibold'> A training program for you to{' '}</span>
          <span className='font-bold text-xl'>master skills</span> 
          <span className='text-xl  font-semibold'>that would
          win you{' '}</span>
          <span className='font-bold text-xl'>ultimate career wars!</span>
        </div>
        <div className=' grid grid-cols-3 gap-10 pt-10 mb-10 domain-grid-wrapper'>
          <div className='domain-grid-item'>
            <div>
              <img src={student2} alt='' />
            </div>
            <div>
              <span className='font-medium'>
                Designed for you to become the{' '}
                <span className='font-bold'>
                  best <br></br>across Industry
                </span>
              </span>
            </div>
          </div>
          <div className='domain-grid-item'>
            <div>
              <img src={student3} alt='' />
            </div>
            <div>
              <span className='font-medium'>
                Live classes by Commanders from big <br />
                <span className='font-bold'>
                  Empires like Google, Microsoft, PWC, <br /> Razorpay, etc.
                </span>
              </span>
            </div>
          </div>
          <div className='domain-grid-item'>
            <div>
              <img src={student4} alt='' />
            </div>
            <div>
              <span className=' font-bold'>
                Practical and best-learning <br /> experience
                <span className='font-medium'>
                  through thrilling real-life <br /> projects
                </span>
              </span>
            </div>
          </div>
          <div className='domain-grid-item'>
            <div>
              <img src={student5} alt='' />
            </div>
            <div className='pt-4'>
              <span className='font-medium'>
                Regular
                <span className='font-bold'>1:1 mentorship</span>from Industry{' '}
                <br />
                Chiefs
              </span>
            </div>
          </div>
          <div className='domain-grid-item'>
            <div>
              <img src={student6} alt='' />
            </div>
            <div>
              <span className='font-medium'>
                Career support via our
                <span className='font-bold'>
                  dedicated <br /> recruitment unit
                </span>
              </span>
            </div>
          </div>
          <div className='domain-grid-item'>
            <div>
              <img src={student7} alt='' />
            </div>
            <div>
              <span className=' font-bold'>
                Aspirational and motivated group of
                <span className='font-medium'>
                  {' '}
                  <br></br>thousands of troops
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className='pt-10'>
        <div className='domain-subjects'>
         <span className='text-xl  font-semibold'> If you have that grit and determination to become the best,{' '}</span>
          <span className='text-xl font-bold text-[red]'>Join us!</span>
        </div>
        <div className=' grid grid-cols-2 gap-10 pt-10 mb-10 domain-subjects-wrapper'>
          {domain.map((item, index) => {
            return (
              <div
                className='h-[248px] bg-[#15CD98] p-6 rounded-[10px]'
                key={index}
              >
                <span className='text-2xl font-bold text-[#ffffff]'>
                  {item.name}
                </span>
                {item.skills.map((i) => {
                  return (
                    <div
                      className='flex justify-start items-center  my-2'
                      key={index}
                    >
                      <div className='mr-2'>
                        <img src={star} alt='' />
                      </div>
                      <span className='text-xl text-[#ffffff] font-medium'>
                        {i}
                      </span>
                    </div>
                  )
                })}
              </div>
            )
          })}
        </div>
      </div>
      <div className='student-process'>
      <span className='text-3xl font-semibold mx-14 text-center ' >If you have that grit and determination to become the best, Join us!</span>
      <img src={ student8} alt="" className='stud-pocesss-main pt-10'/>
      <img src={ student9} alt="" className='stud-pocesss-sub pt-10'/>
      </div>
    </div>
  )
}

export default Domain
