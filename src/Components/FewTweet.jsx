import React from 'react'
// import Mentor1 from '../Assets/mentor1.svg'
// import TwitterImg from '../Assets/twitterImg.svg'
import '../Styles/few-tweets.scss'

const FewTweet = () => {
  return (
    <div className=' mt-6'>
      <span className='text-3xl font-bold px-14 mt-6 few-tweet-title'>
        Here's what they have to say
      </span>
      <div className='grid grid-cols-3 gap-6 px-14 py-4  mt-4 few-tweets-wrapper'>
        <div className='row-span-3 bg-[#ffffff] rounded-[10px] p-4'>
          <div>
            <p>
              CoachEd was instrumental in getting placed in my current role at
              Blackbuck! The attention to detail in them prepping me was
              amazing. Thanks CoachEd!
            </p>
            {/* <p className='pt-6'>11:19 · 6 Jan 2022</p> */}
          </div>
          <div className=' bg-[#FFFFFF] rounded-xl flex justify-start items-center py-0'>
            {/* <div className='  h-[3rem] m-2'>
              <img src={Mentor1} alt='' className='rounded-full  h-[4rem]' />
            </div> */}
            <div className='flex justify-center items-start flex-col'>
              <span className='text-xl font-semibold py-1'>Mihir </span>
              <span>NITK Surathkal</span>
            </div>
          </div>
        </div>
        <div className='row-span-3 bg-[#ffffff] rounded-[10px] p-4'>
          <div>
            <p>
              When I said that I wanted to learn something about web
              development, we started with basic things like what exactly it is,
              and later I worked on assignments related to web development. I am
              happy that I have learned something new in my life and that too in
              this pandemic situation.
            </p>
            {/* <p className='pt-4'>
              {' '}
              Great job team at curating such a diverse bunch.
            </p> */}
            {/* <p className='pt-6'>11:19 · 6 Jan 2022</p> */}
          </div>
          <div className=' bg-[#FFFFFF] rounded-xl flex justify-start items-center'>
            {/* <div className='  h-[3rem] m-2'>
              <img src={Mentor1} alt='' className='rounded-full  h-[4rem]' />
            </div> */}
            <div className='flex justify-center items-start flex-col'>
              <span className='text-xl font-semibold py-1'>Nafisha Bilagi</span>
              <span>BEC Bagalkot</span>
            </div>
          </div>
        </div>
        <div className='row-span-3 bg-[#ffffff] rounded-[10px] p-4'>
          <div>
            <p>
              "CoachEd is a great platform to explore more about different
              career opportunities and how to choose the best-suited one for
              oneself. "
            </p>
            {/* <p className='pt-4'>
              {' '}
              Great job team at curating such a diverse bunch.
            </p> */}
            {/* <p className='pt-6'>11:19 · 6 Jan 2022</p> */}
          </div>
          <div className=' bg-[#FFFFFF] rounded-xl flex justify-start items-center'>
            {/* <div className='  h-[3rem] m-2'>
              <img src={Mentor1} alt='' className='rounded-full  h-[4rem]' />
            </div> */}
            <div className='flex justify-center items-start flex-col'>
              <span className='text-xl font-semibold py-1'>
                Rajashri Javali
              </span>
              <span>KLS Gogte Institute of Technology, Belgaum</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FewTweet
