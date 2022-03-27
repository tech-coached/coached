import React from 'react'
import '../Styles/studenttitle.scss'
import student1 from '../Assets/student1.svg'
import experience1 from '../Assets/stud-acad.svg'
import Download from './Download'

import '../Styles/title.scss'

const StudentTitle = () => {
  return (
    <div
      className=' mx-14 mt-10 flex justify-center flex-col items-start pl-10 relative title'
      style={{
        background: ' #15CD98',
        width: '85%',
      }}
    >
      <img
        src={experience1}
        alt=''
        className='absolute right-[-8rem] bottom-[-2rem] title-chair'
      />
      <div className='title-msg'>
        <span className='p-1 text-[#ffffff] text-2xl font-bold'>
          Welcome to the
        </span>
        <span className='one text-2xl font-bold'>CoachEd Kingdom!</span>
        <div className='p-4 pl-0 flex justify-start'>
          <span className='p-1 text-[#ffffff] text-2xl font-bold'>
            You are onto becoming a
          </span>
          <span className='two text-2xl font-bold'>CoachEd Warrior!</span>
        </div>
      </div>
      <div className='absolute bottom-[2rem] left-[2rem]'>
        <img src={student1} alt='' className='w-[70%]' />
      </div>
      <Download />
    </div>
  )
}

export default StudentTitle
