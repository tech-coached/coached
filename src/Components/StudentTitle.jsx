import React from 'react'
import '../Styles/studenttitle.scss'
import student1 from '../Assets/student1.svg'
import book from '../Assets/book.svg'

const StudentTitle = () => {
  return (
    <div className='title ml-14 mt-10 flex justify-center flex-col items-start pl-10 relative '>
      <div>
        <span className='p-1 text-[#ffffff] text-2xl font-bold'>
          Welcome to the
        </span>
        <span className='one text-2xl font-bold'>CoachEd Kingdom!</span>
      </div>
      <div className='py-4'>
        <span className='p-1 text-[#ffffff] text-2xl font-bold'>
          You are onto becoming a
        </span>
        <span className='two text-2xl font-bold'>CoachEd Warrior!</span>
      </div>
      <div className='absolute bottom-[0]'>
        <img src={student1} alt='' className='w-[70%]' />
      </div>
      <div className='absolute right-[-8rem]'>
        <img src={book} alt='' />
      </div>
    </div>
  )
}

export default StudentTitle
