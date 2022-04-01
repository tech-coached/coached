import React from 'react'
import process3 from '../Assets/Phone -Pattern.svg'
import Donwload from '../Components/Download'
import '../Styles/manifesto.scss'
import ScrollToTop from '../Components/ScrollToTop'

const Manifesto = () => {
  return (
    <div className='p-10'>
      <ScrollToTop />
      <h3 className='font-bold leading-tight text-3xl text-center pb-4'>
        At CoachEd, we believe in rising by uplifting those around us
      </h3>
      <div className='flex justify-center items-center py-6 px-20 manifesto-wrapper'>
        <div className='flex justify-center items-center relative download-wrapper pr-6'>
          <img src={process3} alt='' className='mb-20' />
          <Donwload />
        </div>
        <div className='px-4'>
          <p className='font-medium text-lg pb-2'>
            Therefore, we care about the job opportunities you seek out.
          </p>
          <p className='font-normal text-sm pb-2'>
            Under the guidance of our seasoned mentors, you will learn to build
            trust, hone your leadership skills, and achieve work-life balance
            apart from developing industry-specific expertise - which will help
            enhance your career path in the long term.{' '}
          </p>
          <p className='font-medium text-lg pb-2'>
            Your doubts are all valid - and they matter.
          </p>
          <p className='font-normal text-sm pb-2'>
            You shouldn’t have to be in the dark regarding any aspect of the
            career path you wish to take up in the future. This is why our
            mentors are beside you, every step of the way until you land your
            job.
          </p>
          <p className='font-medium text-lg pb-2'>
            We understand that you cannot compromise on university assignments.
          </p>
          <p className='font-normal text-sm pb-2'>
            We acknowledge that you have deadlines you need to meet as a
            university student or an early young professional. This is why we
            offer to personalise your mentorship so that it is tailored to your
            liking, and suits your schedule.{' '}
          </p>
          <p className='font-medium text-lg pb-2'>
            Everyone deserves a shot at acing their interviews.
          </p>
          <p className='font-normal text-sm pb-2'>
            Regardless of your educational background, you deserve to blow the
            minds of your future recruiters. With the right guidance offered by
            our dedicated mentors, unlock your true potential and secure that
            dream job.
          </p>
          <p className='font-medium text-lg pb-2'>
            No one should be denied Networking Opportunities.
          </p>
          <p className='font-normal text-sm pb-2'>
            Networking is often built from scratch, and we motivate you to grab
            hold of these opportunities right from the start. Connect with our
            network of startups after the carefully curated mentorship program
            to help kickstart your career.{' '}
          </p>
          <p className='font-medium text-lg pb-2'>
            The best way to build an awesome profile.
          </p>
          <p className='font-normal text-sm pb-2'>
            We provide you a platform where you can work, discuss, ideate with
            your mentors in real time in order to build the best profile that
            will help you land that dream job you seek.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Manifesto
