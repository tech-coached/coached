import React from 'react'
import '../Styles/tweets.scss'
import '../Styles/instagram.scss'
import Mentor1 from '../Assets/mentor1.svg'
import TweetImg from '../Assets/tweetImg.svg'
import instaImg from '../Assets/insta-icon.svg'

const Instagram = () => {
  return (
    <div className='w-full tweets px-14 py-10 insta-main-wrapper'>
      <span className='text-[#ffffff] text-3xl font-bold '>
        Want a sneakpeek into our Kingdom
      </span>
      <div className='grid grid-cols-3 grid-rows-6 gap-4 p-10 pl-0 insta-wrapper'>
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
          <div className=' bg-[#FFFFFF] rounded-xl flex justify-start items-center py-2 relative'>
            <div className='  h-[3rem] m-2'>
              <img src={Mentor1} alt='' className='rounded-full  h-[4rem]' />
            </div>
            <div className='flex justify-center items-start flex-col pl-4'>
              <span className='text-xl font-semibold py-1'>Mentor Name</span>
              <span>Mentor Designation</span>
            </div>
            <img src={instaImg} alt="" className='absolute right-[1rem] w-[2rem]'/>
          </div>
        </div>
        <div className='row-span-4 bg-[#ffffff] rounded-[10px] p-4'>
          <div>
            <div className='my-4 mb-4'>
              <img src={TweetImg} alt='' />
            </div>
            <p>
              Width 360px Height 71px Blend Pass through Fixed width Fixed
              height Witnessing and experiencing a whole new side of me during
              the case weekend here at @CoachEd
            </p>
            <p className='pt-6'>11:19 · 6 Jan 2022</p>
          </div>
          <div className=' bg-[#FFFFFF] rounded-xl flex justify-start items-center py-2 relative'>
            <div className='  h-[3rem] m-2'>
              <img src={Mentor1} alt='' className='rounded-full  h-[4rem]' />
            </div>
            <div className='flex justify-center items-start flex-col pl-4'>
              <span className='text-xl font-semibold py-1'>Mentor Name</span>
              <span>Mentor Designation</span>
            </div>
            <img src={instaImg} alt="" className='absolute right-[1rem] w-[2rem]'/>
          </div>
        </div>
        <div className='row-span-2 bg-[#ffffff] rounded-[10px] p-4'>
          {/* <div className='p-2 flex justify-start items-center bg-[#EAE0F4] w-[8rem] rounded-[10px] my-2'>
            <span>Pulled from</span>
            <div>
              <img src={TwitterImg} alt='' />
            </div>
          </div> */}
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
          <div className=' bg-[#FFFFFF] rounded-xl flex justify-start items-center py-2 relative'>
            <div className='  h-[3rem] m-2'>
              <img src={Mentor1} alt='' className='rounded-full  h-[4rem]' />
            </div>
            <div className='flex justify-center items-start flex-col pl-4'>
              <span className='text-xl font-semibold py-1'>Mentor Name</span>
              <span>Mentor Designation</span>
            </div>
            <img src={instaImg} alt="" className='absolute right-[1rem] w-[2rem]'/>
          </div>
        </div>
        <div className='row-span-2 bg-[#ffffff] rounded-[10px] p-4'>
          {/* <div className='p-2 flex justify-start items-center bg-[#EAE0F4] w-[8rem] rounded-[10px] my-2'>
            <span>Pulled from</span>
            <div>
              <img src={TwitterImg} alt='' />
            </div>
          </div> */}
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
          <div className=' bg-[#FFFFFF] rounded-xl flex justify-start items-center py-2 relative'>
            <div className='  h-[3rem] m-2'>
              <img src={Mentor1} alt='' className='rounded-full  h-[4rem]' />
            </div>
            <div className='flex justify-center items-start flex-col pl-4'>
              <span className='text-xl font-semibold py-1'>Mentor Name</span>
              <span>Mentor Designation</span>
            </div>
            <img src={instaImg} alt="" className='absolute right-[1rem] w-[2rem]'/>
          </div>
        </div>
        <div className='row-span-5 bg-[#ffffff] rounded-[10px] p-4'>
          {/* <div className='p-2 flex justify-start items-center bg-[#EAE0F4] w-[8rem] rounded-[10px] my-2'>
            <span>Pulled from</span>
            <div>
              <img src={TwitterImg} alt='' />
            </div>
          </div> */}
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
          <div className=' bg-[#FFFFFF] rounded-xl flex justify-start items-center py-2 relative'>
            <div className='  h-[3rem] m-2'>
              <img src={Mentor1} alt='' className='rounded-full  h-[4rem]' />
            </div>
            <div className='flex justify-center items-start flex-col pl-4'>
              <span className='text-xl font-semibold py-1'>Mentor Name</span>
              <span>Mentor Designation</span>
            </div>
            <img src={instaImg} alt="" className='absolute right-[1rem] w-[2rem]'/>
          </div>
        </div>
        <div className='row-span-4 bg-[#ffffff] rounded-[10px] p-4'>
          {/* <div className='p-2 flex justify-start items-center bg-[#EAE0F4] w-[8rem] rounded-[10px] my-2'>
            <span>Pulled from</span>
            <div>
              <img src={TwitterImg} alt='' />
            </div>
          </div> */}
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
          <div className=' bg-[#FFFFFF] rounded-xl flex justify-start items-center py-2 relative'>
            <div className='  h-[3rem] m-2'>
              <img src={Mentor1} alt='' className='rounded-full  h-[4rem]' />
            </div>
            <div className='flex justify-center items-start flex-col pl-4'>
              <span className='text-xl font-semibold py-1'>Mentor Name</span>
              <span>Mentor Designation</span>
            </div>
            <img src={instaImg} alt="" className='absolute right-[1rem] w-[2rem]'/>
          </div>
        </div>
        <div className='row-span-4 bg-[#ffffff] rounded-[10px] p-4'>
          {/* <div className='p-2 flex justify-start items-center bg-[#EAE0F4] w-[8rem] rounded-[10px] my-2'>
            <span>Pulled from</span>
            <div>
              <img src={TwitterImg} alt='' />
            </div>
          </div> */}
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
          <div className=' bg-[#FFFFFF] rounded-xl flex justify-start items-center py-2 relative'>
            <div className='  h-[3rem] m-2'>
              <img src={Mentor1} alt='' className='rounded-full  h-[4rem]' />
            </div>
            <div className='flex justify-center items-start flex-col pl-4'>
              <span className='text-xl font-semibold py-1'>Mentor Name</span>
              <span>Mentor Designation</span>
            </div>
            <img src={instaImg} alt="" className='absolute right-[1rem] w-[2rem]'/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Instagram
