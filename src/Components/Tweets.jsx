import React from 'react'
import '../Styles/tweets.scss'
import Mentor1 from '../Assets/mentor1.svg'
import TwitterImg from '../Assets/twitterImg.svg'
import TweetImg from '../Assets/tweetImg.svg'

const Tweets = () => {
  return (
    <div className='w-full tweets pl-14 py-10'>
      <span className='text-[#ffffff] text-3xl font-bold '>
        #DilKiBaat from our CoachEd mentees
      </span>
      <div className='grid grid-cols-3 grid-rows-8 gap-4 p-10 pl-0 tweet-grid-wrap'>
        <div className='row-span-3 bg-[#ffffff] rounded-[10px] p-4'>
          <div>
            <p>
              Completion rate is an important metric to look at when choosing
              which online learning platform to learn from. I read terrible
              reviews of UpGrad on Quora, and went for the much cooler, time and
              cost effective @CoachEd.
            </p>
            <p className='pt-6'>11:19 · 6 Jan 2022</p>
          </div>
          <div className=' bg-[#FFFFFF] rounded-xl flex justify-start items-center py-2'>
            <div className='  h-[3rem] m-2'>
              <img src={Mentor1} alt='' className='rounded-full  h-[4rem]' />
            </div>
            <div className='flex justify-center items-start flex-col pl-4'>
              <span className='text-xl font-semibold py-1'>Mentor Name</span>
              <span>Mentor Designation</span>
            </div>
          </div>
        </div>
        <div className='row-span-3 bg-[#ffffff] rounded-[10px] p-4'>
          <div className='p-2 flex justify-start items-center bg-[#EAE0F4] w-[8rem] rounded-[10px] my-2'>
            <span>Pulled from</span>
            <div>
              <img src={TwitterImg} alt='' />
            </div>
          </div>
          <div>
            <p>
              Increasingly surprised with the breadth and quality of people at
              @CoachEd
            </p>
            <p className='pt-4'>
              {' '}
              Great job team at curating such a diverse bunch.
            </p>
            <p className='pt-6'>11:19 · 6 Jan 2022</p>
          </div>
          <div className=' bg-[#FFFFFF] rounded-xl flex justify-start items-center py-2'>
            <div className='  h-[3rem] m-2'>
              <img src={Mentor1} alt='' className='rounded-full  h-[4rem]' />
            </div>
            <div className='flex justify-center items-start flex-col pl-4'>
              <span className='text-xl font-semibold py-1'>Mentor Name</span>
              <span>Mentor Designation</span>
            </div>
          </div>
        </div>
        <div className='row-span-3 bg-[#ffffff] rounded-[10px] p-4'>
          <div>
            <p>
              Witnessing and experiencing a whole new side of me during the case
              weekend here at @CoachEd
            </p>
            <p>Loving the whole process of solving a real-world problem.</p>
            <p>
              {' '}
              Here to many more weekends like this. @AkankJu @AskSat@ansh2693,
              Neet and Gutham Thanks, Sirji @wherei
            </p>
            <p className='pt-6'>11:19 · 6 Jan 2022</p>
          </div>
          <div className=' bg-[#FFFFFF] rounded-xl flex justify-start items-center py-2'>
            <div className='  h-[3rem] m-2'>
              <img src={Mentor1} alt='' className='rounded-full  h-[4rem]' />
            </div>
            <div className='flex justify-center items-start flex-col pl-4'>
              <span className='text-xl font-semibold py-1'>Mentor Name</span>
              <span>Mentor Designation</span>
            </div>
          </div>
        </div>
        <div className='row-span-3 bg-[#ffffff] rounded-[10px] p-4'>
          <div>
            <p>
              Completion rate is an important metric to look at when choosing
              which online learning platform to learn from. I read terrible
              reviews of UpGrad on Quora, and went for the much cooler, time and
              cost effective @CoachEd.
            </p>
            <p className='pt-6'>11:19 · 6 Jan 2022</p>
          </div>
          <div className=' bg-[#FFFFFF] rounded-xl flex justify-start items-center py-2'>
            <div className='  h-[3rem] m-2'>
              <img src={Mentor1} alt='' className='rounded-full  h-[4rem]' />
            </div>
            <div className='flex justify-center items-start flex-col pl-4'>
              <span className='text-xl font-semibold py-1'>Mentor Name</span>
              <span>Mentor Designation</span>
            </div>
          </div>
        </div>
        <div className='row-span-6 bg-[#ffffff] rounded-[10px] p-4'>
          <div className='p-2 flex justify-start items-center bg-[#EAE0F4] w-[8rem] rounded-[10px] my-2'>
            <span>Pulled from</span>
            <div>
              <img src={TwitterImg} alt='' />
            </div>
          </div>
          <div>
            <p>
              Width 360px Height 71px Blend Pass through Fixed width Fixed
              height Witnessing and experiencing a whole new side of me during
              the case weekend here at @CoachEd
            </p>
            <div className='my-4 mb-0'>
              <img src={TweetImg} alt='' />
            </div>
            <p className='pt-6'>11:19 · 6 Jan 2022</p>
          </div>
          <div className=' bg-[#FFFFFF] rounded-xl flex justify-start items-center py-2'>
            <div className='  h-[3rem] m-2'>
              <img src={Mentor1} alt='' className='rounded-full  h-[4rem]' />
            </div>
            <div className='flex justify-center items-start flex-col pl-4'>
              <span className='text-xl font-semibold py-1'>Mentor Name</span>
              <span>Mentor Designation</span>
            </div>
          </div>
        </div>
        <div className='row-span-3 bg-[#ffffff] rounded-[10px] p-4'>
          <div>
            <p>
              Completion rate is an important metric to look at when choosing
              which online learning platform to learn from. I read terrible
              reviews of UpGrad on Quora, and went for the much cooler, time and
              cost effective @CoachEd.
            </p>
            <p className='pt-6'>11:19 · 6 Jan 2022</p>
          </div>
          <div className=' bg-[#FFFFFF] rounded-xl flex justify-start items-center py-2'>
            <div className='  h-[3rem] m-2'>
              <img src={Mentor1} alt='' className='rounded-full  h-[4rem]' />
            </div>
            <div className='flex justify-center items-start flex-col pl-4'>
              <span className='text-xl font-semibold py-1'>Mentor Name</span>
              <span>Mentor Designation</span>
            </div>
          </div>
        </div>
        <div className='row-span-3 bg-[#ffffff] rounded-[10px] p-4'>
          <div>
            <p>
              Completion rate is an important metric to look at when choosing
              which online learning platform to learn from. I read terrible
              reviews of UpGrad on Quora, and went for the much cooler, time and
              cost effective @CoachEd.
            </p>
            <p className='pt-6'>11:19 · 6 Jan 2022</p>
          </div>
          <div className=' bg-[#FFFFFF] rounded-xl flex justify-start items-center py-2'>
            <div className='  h-[3rem] m-2'>
              <img src={Mentor1} alt='' className='rounded-full  h-[4rem]' />
            </div>
            <div className='flex justify-center items-start flex-col pl-4'>
              <span className='text-xl font-semibold py-1'>Mentor Name</span>
              <span>Mentor Designation</span>
            </div>
          </div>
        </div>
        <div className='row-span-3 bg-[#ffffff] rounded-[10px] p-4'>
          <div className='p-2 flex justify-start items-center bg-[#EAE0F4] w-[8rem] rounded-[10px] my-2'>
            <span>Pulled from</span>
            <div>
              <img src={TwitterImg} alt='' />
            </div>
          </div>
          <div>
            <p>
              Increasingly surprised with the breadth and quality of people at
              @CoachEd
            </p>
            <p className='pt-4'>
              {' '}
              Great job team at curating such a diverse bunch.
            </p>
            <p className='pt-6'>11:19 · 6 Jan 2022</p>
          </div>
          <div className=' bg-[#FFFFFF] rounded-xl flex justify-start items-center py-2'>
            <div className='  h-[3rem] m-2'>
              <img src={Mentor1} alt='' className='rounded-full  h-[4rem]' />
            </div>
            <div className='flex justify-center items-start flex-col pl-4'>
              <span className='text-xl font-semibold py-1'>Mentor Name</span>
              <span>Mentor Designation</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Tweets
