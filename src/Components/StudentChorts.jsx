import React from 'react'
import stud1 from '../Assets/stud-cohorts-1.svg'
import stud2 from '../Assets/stud-cohorts-2.svg'
import stud4 from '../Assets/stud-cohorts-4.svg'
import process3 from '../Assets/Phone -Pattern.svg'
import '../Styles/cohorts.scss'
import Donwload from './Download'


const StudentChorts = () => {
  return (
   <div>
   <span className='text-3xl font-bold m-14'>CoachEd Cohorts</span>
   <div className='pt-4 pb-2 px-14 mt-2 grid grid-cols-2 gap-4 text-[#090809] cohorts-wrapper'>
     <div>
       <div>
         <span className='text-3xl font-bold text-[#15CD98]'>10x </span>{' '}
         <span className='text-2xl font-bold '>your career in</span>{' '}
         <span className='text-3xl font-bold text-[#FA8F8F]'>10 Weeks</span>
       </div>
       <div className='grid grid-rows-2 grid-cols-2 gap-4 mt-10'>
         <div className='p-4'>
           <div className='pb-2'>
             {' '}
             <img src={stud1} alt='' />
           </div>
           <span className='font-bold'>
           Industry Mentorship!
           </span>
         </div>
         <div className='p-4'>
           <div className='pb-2'>
             {' '}
             <img src={stud2} alt='' />
           </div>
           <span className='font-bold'>
           Live Projects!
           </span>
         </div>
         <div className='p-4'>
           <div className='pb-2'>
             {' '}
             <img src={stud2} alt='' />
           </div>
           <span className='font-bold'>
           Live Classes! 
           </span>
         </div>
         <div className='p-4'>
           <div className='pb-2'>
             {' '}
             <img src={stud4} alt='' />
           </div>
           <span className='font-bold'>
           100% Placement!
           </span>
         </div>
       </div>
     </div>
     <div className='flex justify-center items-center relative'>
       <img src={process3} alt='' className='' />
       <Donwload/>
     </div>
   </div>
  
 </div>
  )
}

export default StudentChorts