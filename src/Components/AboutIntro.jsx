import React from 'react'
import '../Styles/introduction.scss'
import Banner from '../Assets/about-intro.svg'

const AboutIntro = () => {
  return (
    <div className='pt-10  px-14 grid grid-cols-2 gap-4 flex text-[#090809] items-center justify-center flex-row intro-wrapper mb-10'>
      <div className='flex flex-col'>
        <span className='text-2xl into-hero'>The CoachEd Story</span>
        <div className='py-6'>
          <div className='py-4'>
            <span>
              An <span className='font-bold'>upskilling platform</span> that
              assesses the{' '}
              <span className='font-bold'>
                candidate's current skills and identifies an attainable target
              </span>{' '}
              job. We then provide{' '}
              <span className='font-bold'> Industry driven Mentorship</span> to
              the candidates in line with the targeted job.
            </span>
          </div>
          <div className='py-4'>
            <span>
              We resonated with this confusion throughout our journey right from
              being students, up until the point where we started out as
              professionals.{' '}
              <span className='font-bold'>
                The lack of mentorship, direction and guidance during our
                formative years made us realise the essentiality of it
              </span>
              - which gave rise to CoachEd.
            </span>
          </div>
          <div className='py-4'>
            <span>
              A cumulative effort to understand and address the lack of
              mentorship,{' '}
              <span className='font-bold'>
                {' '}
                CoachEd aims to bring about a solution by creating peer-to-peer
                mentorship.
              </span>{' '}
              At CoachEd, we believe in the fact that we rise by lifting the
              people around us.
            </span>
          </div>
        </div>
        <span>Your passport to an amazing career.</span>
      </div>
      <div className='flex justify-center items-center'>
        <img src={Banner} alt='' />
      </div>
    </div>
  )
}

export default AboutIntro
